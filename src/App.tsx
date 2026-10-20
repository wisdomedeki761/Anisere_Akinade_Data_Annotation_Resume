const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const contactItems = [
  {
    label: "Location",
    value: "Brampton, ON, Canada",
    href: "https://maps.google.com/?q=Brampton,+ON,+Canada",
    icon: (
      <path
        d="M20 10.0001C20 14.9932 14.461 20.1932 12.601 21.7992C12.4277 21.9295 12.2168 22 12 22C11.7832 22 11.5723 21.9295 11.399 21.7992C9.539 20.1932 4 14.9932 4 10.0001C4 7.87834 4.84285 5.84348 6.34315 4.34318C7.84344 2.84287 9.87827 2 12 2C14.1217 2 16.1566 2.84287 17.6569 4.34318C19.1571 5.84348 20 7.87834 20 10.0001ZM15 10.0001C15 11.657 13.6569 13.0001 12 13.0001C10.3431 13.0001 9 11.657 9 10.0001C9 8.34323 10.3431 7.00006 12 7.00006C13.6569 7.00006 15 8.34323 15 10.0001Z"
        strokeWidth="2"
        strokeLinecap="round"
        stroke="#F7931A"
      />
    ),
  },
  {
    label: "Phone",
    value: "(647) 966-4305",
    href: "tel:+16479664305",
    icon: (
      <path
        d="M13.832 16.568C14.0385 16.6628 14.2712 16.6845 14.4917 16.6294C14.7122 16.5744 14.9073 16.4458 15.045 16.265L15.4 15.8C15.5863 15.5516 15.8279 15.35 16.1056 15.2111C16.3833 15.0723 16.6895 15 17 15H20C20.5304 15 21.0391 15.2107 21.4142 15.5858C21.7893 15.9609 22 16.4696 22 17V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22C15.2261 22 10.6477 20.1036 7.27208 16.7279C3.89642 13.3523 2 8.7739 2 4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H7C7.53043 2 8.03914 2.21071 8.41421 2.58579C8.78929 2.96086 9 3.46957 9 4V7C9 7.31049 8.92771 7.61672 8.78885 7.89443C8.65 8.17214 8.44839 8.41371 8.2 8.6L7.732 8.951C7.54842 9.09118 7.41902 9.29059 7.36579 9.51535C7.31256 9.74012 7.33878 9.97638 7.44 10.184C8.80668 12.9599 11.0544 15.2048 13.832 16.568Z"
        strokeWidth="2"
        strokeLinecap="round"
        stroke="#F7931A"
      />
    ),
  },
  {
    label: "Email",
    value: "Anisere66@Outlook.com",
    href: "mailto:Anisere66@Outlook.com",
    icon: (
      <path
        d="M22 7L13.009 12.727C12.7039 12.9042 12.3573 12.9976 12.0045 12.9976C11.6517 12.9976 11.3051 12.9042 11 12.727L2 7M22 7V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V7M22 7V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V7"
        strokeWidth="2"
        strokeLinecap="round"
        stroke="#F7931A"
      />
    ),
  },
  {
    label: "Address",
    value: "8 Clarke Haven Road",
    href: "https://maps.google.com/?q=8+Clarke+Haven+Road",
    icon: (
      <path
        d="M15 20.9995V12.9997C15 12.7345 14.8946 12.4802 14.7071 12.2926C14.5196 12.1051 14.2652 11.9997 14 11.9997H10C9.73478 11.9997 9.48043 12.1051 9.29289 12.2926C9.10536 12.4802 9 12.7345 9 12.9997V20.9995M3 10.0003C2.99993 9.70935 3.06333 9.42192 3.18579 9.15802C3.30824 8.89412 3.4868 8.66011 3.709 8.47232L10.709 2.47247C11.07 2.16738 11.5274 2 12 2C12.4726 2 12.93 2.16738 13.291 2.47247L20.291 8.47232C20.5132 8.66011 20.6918 8.89412 20.8142 9.15802C20.9367 9.42192 21.0001 9.70935 21 10.0003V19C21 19.5305 20.7893 20.0392 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0392 3 19.5305 3 19V10.0003Z"
        strokeWidth="2"
        strokeLinecap="round"
        stroke="#F7931A"
      />
    ),
  },
];

const skills = [
  "RLHF (Reinforcement Learning from Human Feedback)",
  "LLM Response Evaluation",
  "Prompt Engineering",
  "Factuality & Safety Alignment",
  "Data Categorization",
  "Rubric Compliance",
  "Quality Calibration",
  "Detailed Writing & Justifications",
  "Advanced Web Research",
  "Cross-Platform Remote Workflows",
  "RDP & VPS Navigation",
  "Version Control Tracking",
];

const experiences = [
  {
    period: "2025 – Present",
    location: "Remote",
    role: "AI Data Annotator & Model Evaluator",
    company: "Remote AI Platforms (e.g., Outlier AI)",
    description:
      "Conducted rigorous RLHF evaluations by comparing Large Language Model outputs against complex prompts, assessing accuracy, safety, and coherence. Drafted comprehensive, well-structured justification write-ups detailing model strengths, failure modes, and nuanced edge cases.",
  },
  {
    period: "2024 – 2025",
    location: "Remote",
    role: "Operations & Data Support Specialist",
    company: "Remote Operations Team",
    description:
      "Managed structured datasets, task queues, and digital information systems to streamline project throughput. Validated data consistency, performed meticulous quality checks, and resolved formatting discrepancies.",
  },
];

const projects = [
  {
    title: "Live-S2S-Elo Quality Calibration Project",
    subtitle: "Aether Platform",
    description:
      "Participated in specialized evaluation queues and calibration tracking to optimize conversational speech models.",
  },
  {
    title: "Digital Workflow & Quality Assurance Certification",
    subtitle: "2024",
    description:
      "Demonstrated expertise in managing high-volume annotation workflows while maintaining peak quality standards.",
  },
];

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0B0F19]">
      {/* Decorative background blobs — mobile */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 lg:hidden">
        <div className="absolute -left-[180px] -top-20 h-[480px] w-[480px] rounded-full bg-[#1E293B] opacity-50"></div>
        <div className="absolute -right-[170px] top-[760px] h-[360px] w-[360px] rounded-full bg-[#F7931A] opacity-10"></div>
        <div className="absolute -right-40 bottom-[733px] h-[360px] w-[360px] rounded-full bg-[#F7931A] opacity-10"></div>
        <div className="absolute -left-[220px] bottom-[43px] h-[480px] w-[480px] rounded-full bg-[#1E293B] opacity-50"></div>
      </div>

      {/* Decorative background blobs — desktop, on a centered 1728px stage
          (the original MacBook Pro 16 design width) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="relative mx-auto h-full w-[1728px]">
          <div className="absolute left-[928px] top-[469px] h-[600px] w-[600px] rounded-full bg-[#F7931A] opacity-10"></div>
          <div className="absolute -left-[200px] -top-[100px] h-[800px] w-[800px] rounded-full bg-[#1E293B] opacity-50"></div>
          <div className="absolute -left-[227px] top-[1972px] h-[800px] w-[800px] rounded-full bg-[#1E293B] opacity-50"></div>
          <div className="absolute left-[1200px] top-[1500px] h-[600px] w-[600px] rounded-full bg-[#F7931A] opacity-10"></div>
        </div>
      </div>

      {/* Skip link for keyboard/screen reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-10 focus:rounded-lg focus:bg-[#F7931A] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#0B0F19]"
      >
        Skip to content
      </a>

      {/* Header / Navigation */}
      <header className="relative mx-auto w-full max-w-[1200px] px-6 pt-8 lg:px-8">
        <div className="flex w-full flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <a
            href="#"
            className="w-full text-xl font-extrabold text-[#F8FAFC] transition-colors hover:text-[#F7931A] lg:w-fit lg:text-2xl"
          >
            ANISERE AKINADE
          </a>
          <nav
            aria-label="Primary"
            className="flex w-full items-center justify-between lg:w-fit lg:justify-start lg:gap-10"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium text-[#94A3B8] transition-colors hover:text-[#F8FAFC] lg:text-base"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main
        id="main-content"
        className="relative mx-auto flex w-full max-w-[1200px] flex-col items-start gap-12 px-6 pt-12 pb-12 lg:gap-20 lg:px-8 lg:pt-20 lg:pb-20"
      >
        {/* Hero */}
        <section className="flex w-full flex-col items-start gap-7 lg:gap-8">
          <div className="flex w-full flex-col items-start gap-5 lg:gap-4">
            <h1 className="w-full text-3xl font-extrabold leading-[1.1em] text-[#F8FAFC] lg:text-6xl">
              Data Annotation &amp; AI Training Specialist
            </h1>
            <p className="w-full text-[17px] leading-[1.6em] text-[#94A3B8] lg:max-w-[720px] lg:text-xl">
              Detail-oriented professional with robust experience evaluating
              language models, performing precise text/data categorization, and
              executing meticulous prompt engineering critiques.
            </p>
          </div>
          <div className="flex w-full items-start gap-3 lg:w-fit lg:gap-4">
            <a
              href="mailto:Anisere66@Outlook.com"
              className="flex h-[52px] w-full items-center justify-center overflow-hidden text-nowrap rounded-lg bg-[#F7931A] text-base font-semibold text-[#0B0F19] transition-colors hover:bg-[#ffa733] lg:h-auto lg:w-fit lg:justify-start lg:px-8 lg:py-4"
            >
              Hire Me
            </a>
            <a
              href="/Anisere_Akinade_Data_Annotation_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[52px] w-full items-center justify-center overflow-hidden text-nowrap rounded-lg border border-[#334155] text-base font-semibold text-[#F8FAFC] transition-colors hover:border-[#F7931A] hover:text-[#F7931A] lg:h-auto lg:w-fit lg:justify-start lg:px-8 lg:py-4"
            >
              Download CV
            </a>
          </div>
        </section>

        {/* Contact bar */}
        <section
          id="contact"
          aria-label="Contact information"
          className="flex w-full scroll-mt-8 flex-col items-start gap-6 rounded-3xl border border-[#1E293B] bg-[#111827] p-6 lg:flex-row lg:items-center lg:gap-12 lg:p-10"
        >
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group flex w-fit items-center gap-4 lg:w-full"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0"
              >
                {item.icon}
              </svg>
              <div className="flex flex-col items-start gap-1">
                <p className="w-full text-xs font-semibold text-[#94A3B8] lg:text-sm">
                  {item.label}
                </p>
                <p className="w-full text-[15px] font-medium text-[#F8FAFC] transition-colors group-hover:text-[#F7931A] lg:text-base">
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </section>

        {/* Skills */}
        <section className="flex w-full flex-col items-start gap-6 lg:gap-8">
          <h2 className="w-full text-[26px] font-bold leading-[1.2em] text-[#F8FAFC] lg:text-[32px]">
            Core Competencies &amp; Annotation Skills
          </h2>
          <div className="flex w-full flex-wrap items-start gap-3 lg:gap-6">
            {skills.map((skill) => (
              <div
                key={skill}
                className="flex max-w-full items-start rounded-[100px] border border-[#1E293B] bg-[#111827] px-[18px] py-3 lg:px-6"
              >
                <p className="text-sm font-medium text-[#F8FAFC]">{skill}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="flex w-full scroll-mt-8 flex-col items-start gap-6 lg:gap-10"
        >
          <h2 className="w-full text-[26px] font-bold leading-[1.2em] text-[#F8FAFC] lg:text-[32px]">
            Professional Experience
          </h2>
          <div className="flex w-full flex-col items-start gap-5 lg:gap-6">
            {experiences.map((exp) => (
              <div
                key={exp.role}
                className="flex w-full flex-col items-start gap-5 rounded-2xl border border-[#1E293B] bg-[#111827] p-6 lg:flex-row lg:items-start lg:gap-6 lg:p-8"
              >
                <div className="flex w-full items-center justify-between lg:w-[120px] lg:shrink-0 lg:flex-col lg:items-start lg:justify-start lg:gap-2">
                  <p className="text-sm font-bold text-[#F8FAFC] lg:text-base">
                    {exp.period}
                  </p>
                  <p className="text-sm font-medium text-[#94A3B8]">
                    {exp.location}
                  </p>
                </div>
                <div className="flex w-full flex-col items-start gap-3">
                  <p className="w-full text-xl font-bold leading-[1.35em] text-[#F8FAFC]">
                    {exp.role}
                  </p>
                  <p className="w-full text-[15px] font-medium text-[#F7931A] lg:text-base">
                    {exp.company}
                  </p>
                  <p className="w-full text-[15px] leading-[1.6em] text-[#94A3B8]">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Projects */}
        <div className="flex w-full flex-col items-start gap-6 lg:flex-row lg:gap-12">
          <section
            id="education"
            className="flex w-full scroll-mt-8 flex-col items-start gap-6 lg:gap-8"
          >
            <h2 className="w-full text-[26px] font-bold leading-[1.2em] text-[#F8FAFC] lg:text-[32px]">
              Education &amp; Professional Development
            </h2>
            <div className="flex w-full flex-col items-start gap-5 lg:gap-6">
              <div className="flex w-full flex-col items-start gap-2 rounded-xl border border-[#1E293B] bg-[#111827] p-6">
                <p className="w-full text-lg font-bold leading-[1.4em] text-[#F8FAFC]">
                  Post-Secondary Studies &amp; Technical Training
                </p>
                <p className="w-full text-sm font-medium text-[#F7931A]">
                  Ongoing
                </p>
                <p className="w-full text-sm text-[#94A3B8]">
                  Ontario Post-Secondary Institution – Ontario, Canada
                </p>
                <p className="w-full text-sm text-[#94A3B8]">
                  Key Focus: Information Systems, Analytical Problem Solving,
                  and Digital Communications. Completed specialized online
                  training and calibration modules for AI model evaluation
                  frameworks.
                </p>
              </div>
            </div>
          </section>

          <section
            id="projects"
            className="flex w-full scroll-mt-8 flex-col items-start gap-6 lg:gap-8"
          >
            <h2 className="w-full text-[26px] font-bold leading-[1.2em] text-[#F8FAFC] lg:text-[32px]">
              Projects &amp; Certifications
            </h2>
            <div className="flex w-full flex-col items-start gap-5 lg:gap-6">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="flex w-full flex-col items-start gap-2 rounded-xl border border-[#1E293B] bg-[#111827] p-6"
                >
                  <p className="w-full text-lg font-bold leading-[1.4em] text-[#F8FAFC]">
                    {project.title}
                  </p>
                  <p className="w-full text-sm font-medium text-[#F7931A]">
                    {project.subtitle}
                  </p>
                  <p className="w-full text-sm text-[#94A3B8]">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        </main>

        {/* Footer */}
        <footer className="relative mx-auto flex w-full max-w-[1200px] flex-col items-start gap-6 border-t border-[#1E293B] px-6 pb-14 pt-8 lg:px-8 lg:pt-10 lg:pb-20">
          <p className="w-full text-sm text-[#94A3B8]">
            © 2026 Anisere Akinade. All rights reserved.
          </p>
          <div className="flex w-full items-start gap-6">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#F8FAFC] transition-colors hover:text-[#F7931A]"
            >
              LinkedIn
            </a>
          </div>
        </footer>
    </div>
  );
}
