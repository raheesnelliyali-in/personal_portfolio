const skillGroups = [
  { title: "Programming", skills: ["Python", "JavaScript", "Problem Solving", "Type Hints", "OOP"] },
  { title: "Backend", skills: ["FastAPI", "REST APIs", "Pydantic", "CRUD APIs", "Swagger UI"] },
  { title: "Database", skills: ["SQLite", "SQL", "Tables", "WHERE Queries", "Data Persistence"] },
  { title: "Frontend", skills: ["HTML", "CSS", "React", "Tailwind CSS", "Responsive Design"] },
  { title: "Tools", skills: ["Git", "GitHub", "VS Code", "Postman", "Render", "Vercel"] },
  { title: "Analytics", skills: ["Excel", "Power BI", "Data Cleaning", "Dashboards", "Insights"] },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-space">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <span className="section-label">Skills</span>
          <h2 className="section-title">Technical <span className="text-primary">Skill Set</span></h2>
          <p className="section-description mt-5">A recruiter-friendly overview of the technologies I am learning and using in projects.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {skillGroups.map((group) => (
            <div key={group.title} className="clean-card">
              <h3 className="text-2xl font-semibold mb-6">{group.title}</h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => <span key={skill} className="skill-pill">{skill}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
