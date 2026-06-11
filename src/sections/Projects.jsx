import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Veloura Clothing E-Commerce Website",
    description: "A modern clothing e-commerce website featuring product listings, shopping cart functionality, order management, responsive design, and a clean user experience. Built to simulate a real-world online fashion store.",
    image: "/projects/project2.png",
    tags: ["React", "FastAPI", "SQLite", "Admin Panel"],
    github: "https://github.com/raheesnelliyali-in",
    demo: "https://velouraclothing.netlify.app/",
    highlight: "Full-stack project",
  },
  {
    title: "FastAPI Task CRUD API",
    description: "REST API with create, read, update, delete, and complete-task endpoints. Built with clean schemas, validation, and Swagger UI testing.",
    image: "/projects/project3.png",
    tags: ["FastAPI", "Pydantic", "SQLite", "Swagger"],
    github: "https://github.com/raheesnelliyali-in",
    demo:"#home",
    highlight: "Backend API",
  },
  {
    title: "Expense Tracker",
    description: "Python application for adding, viewing, and summarizing expenses with JSON file storage and clean function-based structure.",
    image: "/projects/project1.png",
    tags: ["Python", "JSON", "File Handling"],
    github: "https://github.com/raheesnelliyali-in",
    demo: "#contact",
    highlight: "Python project",
  },
  {
    title: "Personal Portfolio Website",
    description: "Responsive portfolio built with React and Tailwind CSS to showcase profile, skills, projects, internship experience, and GitHub activity.",
    image: "/projects/project4.png",
    tags: ["React", "Tailwind CSS", "Responsive UI"],
    github: "https://github.com/raheesnelliyali-in",
    demo: "#home",
    highlight: "Frontend project",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-space">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <span className="section-label">Projects</span>
          <h2 className="section-title">Selected <span className="text-primary">Projects</span></h2>
          <p className="section-description mt-5">Projects that show practical learning in backend development, Python, React, APIs, and databases.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {projects.map((project) => (
            <article key={project.title} className="project-card group">
              <div className="aspect-video overflow-hidden rounded-2xl bg-surface border border-border relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 border border-border px-3 py-1 text-xs text-primary font-semibold">{project.highlight}</span>
              </div>
              <div className="mt-6">
                <div className="flex justify-between gap-4 items-start">
                  <h3 className="text-2xl font-bold leading-tight">{project.title}</h3>
                  <ArrowUpRight className="text-primary shrink-0" />
                </div>
                <p className="text-muted-foreground mt-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag) => <span key={tag} className="skill-pill">{tag}</span>)}
                </div>
                <div className="flex flex-wrap gap-5 mt-6">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline"><Github size={18} /> GitHub</a>
                  <a href={project.demo} className="inline-flex items-center gap-2 text-primary hover:underline"><ExternalLink size={18} /> Demo / Details</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
