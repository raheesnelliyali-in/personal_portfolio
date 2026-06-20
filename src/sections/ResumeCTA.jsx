import { ArrowRight, Download } from "lucide-react";

export const ResumeCTA = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="clean-card text-center max-w-5xl mx-auto p-10 md:p-16">
          <span className="section-label">Next Step</span>
          <h2 className="text-4xl md:text-6xl font-extrabold mt-4 leading-tight">
            Open to <span className="text-primary">Learning, Projects & Opportunities</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed">
            I am exploring opportunities where I can apply software development, data analytics, Excel, Power BI, and business-tech problem-solving skills through practical work and real projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a href="#contact" className="primary-btn">Contact Me <ArrowRight size={18} /></a>
            <a href="/resume.pdf" download className="outline-btn">Download Resume <Download size={18} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};
