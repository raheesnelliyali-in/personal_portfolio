import { Trophy, Code, Database, Globe } from "lucide-react";

const achievements = [
  { icon: Code, title: "Built Practical Python Projects", text: "Expense tracker, contact book, task validator, and CRUD simulator." },
  { icon: Database, title: "Learned Database Persistence", text: "Moved from in-memory storage to SQLite-backed applications." },
  { icon: Globe, title: "Created Web Projects", text: "Developed portfolio and e-commerce website experience using modern web tools." },
  { icon: Trophy, title: "Consistent Internship Learning", text: "Daily backend learning through FastAPI, SQL, schemas, routers, and API testing." },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="section-space">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <span className="section-label">Achievements</span>
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
