const steps = [
  { year: "Step 1", title: "Python Fundamentals", text: "Variables, conditions, loops, functions, lists, dictionaries, and problem-solving programs." },
  { year: "Step 2", title: "OOP & File Handling", text: "Classes, inheritance, exceptions, JSON storage, type hints, and reusable functions." },
  { year: "Step 3", title: "Pydantic & APIs", text: "Data validation, JSON serialization, API concepts, requests library, and structured models." },
  { year: "Step 4", title: "FastAPI Backend", text: "Routes, path/query parameters, HTTPException, schemas, routers, CRUD APIs, and Swagger UI." },
  { year: "Step 5", title: "SQLite & Databases", text: "Persistent storage, SQL commands, filtering, updating, deleting, and connecting database logic with APIs." },
  { year: "Step 6", title: "Portfolio & Deployment", text: "React portfolio, GitHub, responsive design, project showcasing, and online presence building." },
];

export const Timeline = () => {
  return (
    <section id="timeline" className="section-space">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <span className="section-label">Learning Journey</span>
          <h2 className="section-title">How I Am <span className="text-primary">Progressing</span></h2>
          <p className="section-description mt-5">A clear timeline of what I am learning and building.</p>
        </div>
        <div className="max-w-4xl mx-auto mt-14 space-y-5">
          {steps.map((step) => (
            <div key={step.title} className="clean-card flex flex-col md:flex-row gap-5">
              <div className="text-primary font-bold md:w-28 shrink-0">{step.year}</div>
              <div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground mt-2 leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
