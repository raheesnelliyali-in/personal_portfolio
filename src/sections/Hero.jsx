import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
export const Hero = () => {

  const techStack = [
    " Python",
    " FastAPI",
    " SQL",
    " Data Analytics",
    " Power BI",
    " Technology Solutions"
  ];

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.12fr_0.88fr] gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Open To Software Development, Data Analytics, And Business-Tech Opportunities
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
              Muhammed Rahees N
              <span className="block text-primary mt-2">Building Practical Solutions with Code, Data & Technology</span>
            </h1>

           <div className="flex flex-wrap gap-3 mt-6">
  {techStack.map((item, index) => (
    <span
      key={index}
      className="px-4 py-2 rounded-full border border-primary/30 bg-card text-sm md:text-base"
    >
      {item}
    </span>
  ))}
</div>

            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              BCA student passionate about software development, data analytics, and technology-driven problem solving. I enjoy building practical projects, exploring new technologies, and turning ideas into useful solutions through code, data, and continuous learning.

            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <a href="#projects" className="primary-btn">
                View Projects <ArrowRight size={18} />
              </a>
              <a href="/resume.pdf" download className="outline-btn">
                Download Resume <Download size={18} />
              </a>
              <a href="#contact" className="outline-btn">
                Contact Me <Mail size={18} />
              </a>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="https://github.com/raheesnelliyali-in" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/muhammedraheesn/" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn">
                <Linkedin size={22} />
              </a>
              <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=raheesnelliyali01@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="icon-btn"
>
  <Mail size={22} />
</a>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
                <MapPin size={16} /> Kerala, India
              </span>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="profile-card premium-profile-card">
              <img src="/profile-photo.jpg" alt="Muhammed Rahees N" className="w-72 md:w-88 aspect-[4/5] object-cover rounded-3xl" />
              <div className="profile-badge">
                <p className="text-xs text-muted-foreground">Current Focus</p>
                <p className="font-bold text-primary">Python • Analytics • Business Tech</p>
              </div>
              <div className="profile-badge left-badge">
                <p className="text-xs text-muted-foreground">Bridgeon</p>
                <p className="font-bold">Python Intern</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
