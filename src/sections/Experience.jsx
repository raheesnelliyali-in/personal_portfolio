import { Briefcase, CheckCircle2 } from "lucide-react";

const responsibilities = [
  "Built and tested FastAPI endpoints using Swagger UI",
  "Created Pydantic models for request and response validation",
  "Practiced CRUD operations using Python dictionaries and SQLite",
  "Learned SQL commands such as CREATE, INSERT, SELECT, UPDATE, DELETE, and WHERE",
  "Organized code using routers, schemas, and helper functions",
  "Used GitHub to maintain project work and improve version control habits",
];

export const Experience = () => {
  return (
    <section id="experience" className="section-space">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Internship <span className="text-primary">Experience</span></h2>
          <p className="section-description mt-5">A clear summary of my backend learning journey during internship.</p>
        </div>

        <div className="max-w-4xl mx-auto mt-14 clean-card">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-surface border border-border flex items-center justify-center shrink-0">
              <Briefcase className="text-primary" size={28} />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">Python FastAPI Intern</h3>
                  <p className="text-primary font-semibold mt-1">Bridgeon Solutions, Calicut Kinfra</p>
                </div>
                <span className="skill-pill">2026 • Internship</span>
              </div>

              <p className="text-muted-foreground mt-5 leading-relaxed">
                Focused on Python backend development, REST APIs, FastAPI, SQLite, Pydantic validation, API testing, and building practical applications from beginner to deployable level.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-7">
                {responsibilities.map((item) => (
                  <div key={item} className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
