import { GraduationCap } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="section-space">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic <span className="text-primary">Background</span></h2>
        </div>
        <div className="max-w-4xl mx-auto mt-14 clean-card">
          <div className="flex gap-5 items-start">
            <div className="w-14 h-14 rounded-2xl bg-surface border border-border flex items-center justify-center shrink-0"><GraduationCap className="text-primary" size={30} /></div>
            <div>
              <h3 className="text-2xl font-bold">Bachelor of Computer Applications</h3>
              <p className="text-primary font-semibold mt-1">University of Calicut</p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Focused on programming fundamentals, web development, database concepts, software development practices, data handling, and practical project building.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
