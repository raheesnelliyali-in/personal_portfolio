const skillGroups = [
  {
    title: "Programming & Development",
    skills: [
      "Python",
      "JavaScript",
      "React",
      "Object-Oriented Programming",
      "Problem Solving"
    ]
  },
  {
    title: "Backend Technologies",
    skills: [
      "FastAPI",
      "REST APIs",
      "Pydantic",
      "API Development",
      "Swagger UI"
    ]
  },
  {
    title: "Database Systems",
    skills: [
      "SQL",
      "SQLite",
      "Database Design",
      "Data Management"
    ]
  },
  {
    title: "Data Analytics",
    skills: [
      "Power BI",
      "Microsoft Excel",
      "Data Visualization",
      "Data Cleaning",
      "Business Reporting"
    ]
  },
  {
    title: "AI & Emerging Technologies",
    skills: [
      "Prompt Engineering",
      "AI-Assisted Development",
      "Generative AI Tools",
      "ChatGPT",
      "Google Gemini"
    ]
  },
  {
    title: "Developer Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "Render",
      "Postman"
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="section-space">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <span className="section-label">Skills</span>
          <h2 className="section-title">Technical & <span className="text-primary">Analytical Skills</span></h2>
          <p className="section-description mt-5">
            A balanced overview of the tools and technologies I am learning through internship work, projects, and business operations exposure.
          </p>
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
