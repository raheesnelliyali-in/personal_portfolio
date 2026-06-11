import { Award } from "lucide-react";

const certificates = [
  { title: "Python FastAPI Internship", status: "In Progress", text: "Bridgeon Solutions internship focused on backend development and API building." },
  { title: "Python Basics Practice", status: "Learning", text: "Hands-on programs covering functions, OOP, file handling, and validation." },
  { title: "Project Portfolio", status: "Completed", text: "Personal portfolio website showcasing skills, projects, experience, and GitHub activity." },
];

export const Certificates = () => {
  return (
    <section id="certificates" className="section-space">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <span className="section-label">Certificates</span>
          <h2 className="section-title">Certifications & <span className="text-primary">Learning Proof</span></h2>
          <p className="section-description mt-5">Replace these with your certificate links when you receive them.</p>
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
