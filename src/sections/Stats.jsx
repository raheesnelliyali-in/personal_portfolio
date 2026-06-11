const stats = [
  { number: "BCA", label: "Academic Background", description: "Computer Applications student building a strong tech foundation" },
  { number: "1", label: "Internship", description: "Python FastAPI Internship at Bridgeon" },
  { number: "10+", label: "Practice Projects", description: "Python, FastAPI, React, and web development projects" },
  { number: "2026", label: "Current Focus", description: "Backend development, APIs, SQLite, and data analytics" },
];

export const Stats = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="clean-card text-center">
              <h3 className="text-4xl font-extrabold text-primary">{stat.number}</h3>
              <p className="font-semibold mt-3">{stat.label}</p>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
