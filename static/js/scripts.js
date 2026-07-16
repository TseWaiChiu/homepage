const contentDir = 'contents/';
const configFile = 'config.yml';
const sectionNames = ['home', 'awards', 'experience', 'publications'];

async function fetchText(path) {
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`Failed to load ${path}: HTTP ${response.status}`);
    }
    return response.text();
}

function setSectionVisibility(name, visible) {
    const section = document.getElementById(name);
    const navItem = document.querySelector(`#navbarResponsive a[href="#${name}"]`)?.closest('.nav-item');

    if (section) {
        section.hidden = !visible;
    }
    if (navItem) {
        navItem.hidden = !visible;
    }
}

window.addEventListener('DOMContentLoaded', async () => {
    // Activate Bootstrap scrollspy on the main nav element.
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    }

    // Collapse the responsive navbar after a navigation link is selected.
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [...document.querySelectorAll('#navbarResponsive .nav-link')];
    responsiveNavItems.forEach((responsiveNavItem) => {
        responsiveNavItem.addEventListener('click', () => {
            if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    try {
        const text = await fetchText(contentDir + configFile);
        const config = jsyaml.load(text);

        Object.entries(config).forEach(([key, value]) => {
            const element = document.getElementById(key);
            if (element) {
                element.innerHTML = value ?? '';
            }
        });

        const currentYear = document.getElementById('current-year');
        if (currentYear) {
            currentYear.textContent = new Date().getFullYear();
        }
    } catch (error) {
        console.error(error);
    }

    marked.use({ mangle: false, headerIds: false });

    await Promise.all(sectionNames.map(async (name) => {
        try {
            const markdown = await fetchText(`${contentDir}${name}.md`);
            const hasContent = markdown.trim().length > 0;
            setSectionVisibility(name, hasContent);

            if (hasContent) {
                const container = document.getElementById(`${name}-md`);
                if (container) {
                    container.innerHTML = marked.parse(markdown);
                }
            }
        } catch (error) {
            setSectionVisibility(name, false);
            console.error(error);
        }
    }));

    if (window.MathJax?.typesetPromise) {
        try {
            await MathJax.typesetPromise();
        } catch (error) {
            console.error('MathJax rendering failed:', error);
        }
    }
});
