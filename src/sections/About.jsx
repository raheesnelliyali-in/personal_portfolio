import { BarChart3, Code2, Database, Rocket } from "lucide-react";

const aboutCards = [
  { icon: Code2, title: "Backend Development", text: "Building REST APIs and CRUD applications using Python, FastAPI, and Pydantic." },
  { icon: Database, title: "Database Skills", text: "Working with SQLite and SQL concepts like tables, queries, filtering, updates, and persistence." },
  { icon: BarChart3, title: "Data Analytics Interest", text: "Interested in Power BI, Excel, dashboards, and turning data into simple insights." },
  { icon: Rocket, title: "Project-Based Learning", text: "Learning by creating real projects, testing APIs, using GitHub, and improving daily." },
];

export const About = () => {
  return (
    <section id="about" className="section-space">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="section-label">About Me</span>
            <h2 className="section-title mt-4">Building a Strong Foundation in <span className="text-primary">Backend Development</span></h2>
            <div className="space-y-5 mt-6 text-muted-foreground leading-relaxed">
              <p>
                I am Muhammed Rahees N, a BCA student from Kerala currently pursuing a Python FastAPI internship at Bridgeon. I am focused on learning backend development through practical tasks and real project building.
              </p>
              <p>
                My current learning path includes Python, FastAPI, REST APIs, Pydantic validation, SQLite database integration, Git, GitHub, and API testing with Swagger UI.
              </p>
              <p>
                I also have an interest in data analytics, Power BI, and business-focused problem solving. My goal is to become a developer who can understand requirements, build clean backend systems, and explain solutions clearly.
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
