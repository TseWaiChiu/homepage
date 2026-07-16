### iFLYTEK

*Assistant Research Algorithm Engineer · April 2026 – July 2026*

- Developed an automated optimization harness for LLM agents in educational error-correction workflows, supporting iterative optimization of code logic, prompts, and DAG topology.
- Built a closed-loop workflow covering context retrieval, log analysis, bad-case attribution, solution generation, isolated experiments, and metric evaluation.
- Introduced Git worktree-based experiment isolation and corrected reward hacking by combining answerability and grading accuracy with grading-volume safeguards.
- Reduced a single evaluation cycle from approximately 2 hours to 30 minutes through intermediate-state caching. After about 30 optimization rounds, answerability improved from **98.02% to 99.45%**, while grading accuracy improved from **89.33% to 91.47%**.

### Institute of Artificial Intelligence, Hefei Comprehensive National Science Center

*Algorithm Intern · June 2025 – April 2026*

- Led the development of a multimodal large language model system for upper gastrointestinal endoscopy, covering medical vision-language data construction, domain-specific MLLM fine-tuning, report-generation pipelines, and evaluation.
- Processed and linked **6M+ endoscopic images** and **300K+ reports**, including de-identification, anomaly filtering, image quality control, and report standardization.
- Adapted Qwen2.5-VL to the medical domain using joint SFT and RL training with medical-keyword reward signals.
- Built a report-evaluation framework with a vocabulary of **300+ medical features**, achieving keyword-level **F1 = 0.6073**. In human-AI collaboration experiments, report quality improved by **17.0%** and reporting time decreased by **40.9%**.
- The system has undergone prospective testing at West China Hospital of Sichuan University, Hefei First People's Hospital, and other hospitals. The related work is under review at **NEJM AI**.

### On-Policy Distillation for UAV Small-Object Understanding

*Project Lead · April 2026 – Present*

- Built and quality-controlled region classification and region visual question answering data from the UAVIT-1M dataset, using image-ID-based splits to prevent source-image leakage.
- Constructed medium- and high-difficulty training subsets using 16 on-policy rollouts per candidate and rejection sampling based on empirical success rate and answer consistency.
- Designed task-adaptive privileged visual information and a teacher-student on-policy distillation framework in which the teacher receives high-resolution region views while the student receives only the full image.
- Compared with the UAV-domain SFT baseline, accuracy improved by **2.1%** on region classification, **1.7%** on region VQA, and **3.4%** on the small-object subset; **16.8%** of difficult region-global samples were corrected.
