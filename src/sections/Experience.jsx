import { Briefcase, CheckCircle2, Building2 } from "lucide-react";

const bridgeonResponsibilities = [
  "Completed Python FastAPI internship focused on backend fundamentals and API development",
  "Built and tested REST API endpoints using FastAPI and Swagger UI",
  "Created Pydantic models for request and response validation",
  "Practiced CRUD operations with Python, SQLite, and modular project structure",
  "Worked with routers, schemas, helper functions, and database integration",
  "Built a Task Management System using FastAPI, SQLite, Streamlit, and authentication concepts",
];

const realBuildResponsibilities = [
  "Supported business operations through invoice-related work, documentation, and record organization",
  "Worked with Microsoft Excel for data entry, tracking, reporting, and operational support",
  "Assisted with digital presence activities including photos, online sharing, and business page support",
  "Gained practical exposure to business processes, customer-facing information, and workflow coordination",
  "Developed interest in business analysis, data organization, and analytics-oriented problem solving",
];

const experiences = [
  {
    icon: Briefcase,
    title: "Python FastAPI Intern",
    company: "Bridgeon Solutions, Calicut Kinfra",
    period: "May 2026 – June 2026 • Completed",
    summary:
      "Completed a hands-on internship focused on Python backend development, REST APIs, FastAPI, SQLite, Pydantic validation, API testing, and practical application development.",
    items: bridgeonResponsibilities,
  },
  {
    icon: Building2,
    title: "Business Operations & Analytics Support",
    company: "RealBuild Hub",
    period: "Part-time / Practical Business Exposure",
    summary:
      "Supported business-related activities while gaining exposure to operations, Excel work, documentation, digital presence, and analytics-oriented tasks.",
    items: realBuildResponsibilities,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="section-space">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Practical <span className="text-primary">Experience</span></h2>
          <p className="section-description mt-5">
            A mix of internship learning, project building, business operations, and data-oriented work.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-14 space-y-8">
          {experiences.map((experience) => (
            <div key={experience.title} className="clean-card">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-surface border border-border flex items-center justify-center shrink-0">
                  <experience.icon className="text-primary" size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold">{experience.title}</h3>
                      <p className="text-primary font-semibold mt-1">{experience.company}</p>
                    </div>
                    <span className="skill-pill">{experience.period}</span>
                  </div>

                  <p className="text-muted-foreground mt-5 leading-relaxed">{experience.summary}</p>

                  <div className="grid md:grid-cols-2 gap-4 mt-7">
                    {experience.items.map((item) => (
                      <div key={item} className="flex gap-3 text-muted-foreground">
                        <CheckCircle2 className="text-primary shrink-0 mt-1" size={18} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
