import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Veloura Clothing E-Commerce Website",
    description:
      "A modern clothing e-commerce website featuring product listings, shopping cart functionality, order management, responsive design, and a clean user experience. Built to simulate a real-world online fashion store.",
    image: "/projects/project2.png",
    tags: ["React", "FastAPI", "SQLite", "Admin Panel"],
    github: "https://github.com/raheesnelliyali-in",
    demo: "https://velouraclothing.netlify.app/",
    highlight: "Full-stack project",
  },
  {
    title: "Task Management System",
    description:
      "A completed internship project built to manage tasks with create, update, delete, status tracking, dashboard metrics, user authentication concepts, and database persistence.",
    image: "/projects/project3.png",
    tags: ["FastAPI", "SQLite", "Streamlit", "Python", "Pydantic"],
    github: "https://github.com/raheesnelliyali-in",
    demo: "#contact",
    highlight: "Internship project",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Responsive portfolio built with React, Vite, and Tailwind CSS to showcase profile, skills, projects, experience, GitHub activity, and professional contact links.",
    image: "/projects/project4.png",
    tags: ["React", "Vite", "Tailwind CSS", "Responsive UI"],
    github: "https://github.com/raheesnelliyali-in/personal-portfolio",
    demo: "https://raheesportfolio.vercel.app/",
    highlight: "Portfolio project",
  },
  {
    title: "Coming Soon",
    description:
      "Currently planning a new project focused on software development and data analytics. This section will be updated with a new project soon.",
    image: "/projects/project1.png",
    tags: ["In Development", "Coming Soon"],
    github: "#contact",
    demo: "#contact",
    highlight: "Next project",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-space">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <span className="section-label">Projects</span>
          <h2 className="section-title">Selected <span className="text-primary">Projects</span></h2>
          <p className="section-description mt-5">
            Projects showing practical learning across software development, APIs, databases, frontend UI, and business-tech problem solving.
          </p>
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
                  <a href={project.demo} target={project.demo.startsWith("http") ? "_blank" : undefined} rel={project.demo.startsWith("http") ? "noopener noreferrer" : undefined} className="inline-flex items-center gap-2 text-primary hover:underline"><ExternalLink size={18} /> Demo / Details</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
