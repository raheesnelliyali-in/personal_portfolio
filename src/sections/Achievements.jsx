import { Trophy, Code, Database, Globe } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "Completed FastAPI Internship", text: "Completed Python FastAPI internship at Bridgeon with hands-on backend and API development practice." },
  { icon: Code, title: "Built Task Management System", text: "Developed a practical project with task CRUD, dashboard metrics, status management, database persistence, and authentication concepts." },
  { icon: Globe, title: "Created Web Projects", text: "Built and deployed a personal portfolio and e-commerce website using modern web development tools." },
  { icon: Database, title: "Business & Data Exposure", text: "Supported RealBuild Hub with Excel, invoice-related work, documentation, data organization, and business operations." },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="section-space">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <span className="section-label">Highlights</span>
          <h2 className="section-title">What I Have <span className="text-primary">Built So Far</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {achievements.map((item) => (
            <div key={item.title} className="clean-card">
              <item.icon className="text-primary mb-5" size={34} />
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
