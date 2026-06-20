import { BarChart3, Code2, Database, Rocket } from "lucide-react";

const aboutCards = [
  { icon: Code2, title: "Software Development", text: "Building practical applications using Python, FastAPI, React, REST APIs, and project-based learning." },
  { icon: Database, title: "Database & APIs", text: "Working with SQLite, CRUD operations, API testing, data storage, queries, and application logic." },
  { icon: BarChart3, title: "Data Analytics Interest", text: "Interested in Excel, Power BI, dashboards, reporting, data cleaning, and business insights." },
  { icon: Rocket, title: "Business-Tech Mindset", text: "Combining technology, business processes, documentation, and real-world problem solving." },
];

export const About = () => {
  return (
    <section id="about" className="section-space">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="section-label">About Me</span>
            <h2 className="section-title mt-4">Building a Flexible Foundation in <span className="text-primary">Technology & Analytics</span></h2>
            <div className="space-y-5 mt-6 text-muted-foreground leading-relaxed">
              <p>
                I am Muhammed Rahees N, a BCA student from Kerala with interests across software development, data analytics, and business-focused problem solving.
              </p>
              <p>
                I recently completed a Python FastAPI internship at Bridgeon, where I learned backend fundamentals, REST APIs, SQLite, Pydantic validation, Swagger UI testing, and practical project development.
              </p>
              <p>
                Along with development projects, I also support RealBuild Hub with business operations, Excel-based work, invoice-related tasks, documentation, and data organization. This gives me practical exposure to both technology and business workflows.
              </p>
              <p>
                I am still exploring my exact career direction, but I feel a growing interest in data analytics, Excel, Power BI, and building useful software solutions that solve real problems.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {aboutCards.map((card) => (
              <div key={card.title} className="clean-card">
                <card.icon className="text-primary mb-5" size={34} />
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
