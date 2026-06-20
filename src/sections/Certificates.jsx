import { Award } from "lucide-react";

const certificates = [
  { title: "Python FastAPI Internship", status: "Completed", text: "Completed Bridgeon internship focused on Python, FastAPI, REST APIs, SQLite, and practical project development." },
  { title: "Task Management System", status: "Completed", text: "Completed internship project demonstrating CRUD operations, dashboard metrics, database storage, and frontend-backend integration." },
  { title: "Project Portfolio", status: "Completed", text: "Personal portfolio website showcasing skills, projects, experience, GitHub activity, and professional contact links." },
];

export const Certificates = () => {
  return (
    <section id="certificates" className="section-space">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <span className="section-label">Learning Proof</span>
          <h2 className="section-title">Completed Work & <span className="text-primary">Learning Proof</span></h2>
          <p className="section-description mt-5">A summary of completed learning milestones and practical project outcomes.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {certificates.map((cert) => (
            <div key={cert.title} className="clean-card">
              <Award className="text-primary mb-5" size={34} />
              <div className="flex items-center justify-between gap-3"><h3 className="text-xl font-bold">{cert.title}</h3><span className="skill-pill">{cert.status}</span></div>
              <p className="text-muted-foreground mt-4 leading-relaxed">{cert.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
