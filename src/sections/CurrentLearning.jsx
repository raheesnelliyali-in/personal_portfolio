import {
Brain,
Database,
Code2,
BarChart3,
Github,
Rocket,
} from "lucide-react";

const learningItems = [
{
icon: Rocket,
title: "FastAPI",
description: "Building modern REST APIs and backend applications.",
},
{
icon: Database,
title: "SQLite",
description: "Learning database integration and data persistence.",
},
{
icon: Code2,
title: "React",
description: "Creating responsive and interactive user interfaces.",
},
{
icon: BarChart3,
title: "Power BI",
description: "Exploring data visualization and reporting.",
},
{
icon: Brain,
title: "Data Analytics",
description: "Understanding data and extracting insights.",
},
{
icon: Github,
title: "Git & GitHub",
description: "Version control and project collaboration.",
},
];

export const CurrentLearning = () => {
return ( <section id="learning" className="py-32 relative overflow-hidden"> <div className="container mx-auto px-6"> <div className="text-center max-w-3xl mx-auto mb-16"> <span className="text-primary uppercase tracking-widest text-sm">
Current Learning </span>
      <h2 className="text-4xl md:text-5xl font-bold mt-4">
        What I'm
        <span className="text-primary"> Learning Right Now</span>
      </h2>

      <p className="text-muted-foreground mt-5">
        Technologies and skills I am currently focusing on during my
        internship and personal learning journey.
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {learningItems.map((item) => (
        <div
          key={item.title}
          className="glass rounded-3xl p-6 border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-2"
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
            <item.icon className="text-primary" size={28} />
          </div>

          <h3 className="text-xl font-semibold mb-3">
            {item.title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

);
};
