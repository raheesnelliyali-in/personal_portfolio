import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.12fr_0.88fr] gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Available for internship opportunities and learning projects
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
              Muhammed Rahees N
              <span className="block text-primary mt-2">Python FastAPI Intern</span>
            </h1>

            <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-foreground/90">
              Backend Developer & Data Analytics Enthusiast
            </h2>

            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              BCA student focused on building practical backend projects using Python, FastAPI, SQLite, REST APIs, and Pydantic. I also explore React, Power BI, and data analytics to become a strong problem solver with real project experience.
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
              <a href="https://www.linkedin.com/in/muhammed-rahees-n-68065a317/" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn">
                <Linkedin size={22} />
              </a>
              <a href="mailto:raheesnelliyali01@gmail.com" className="icon-btn" aria-label="Email">
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
                <p className="font-bold text-primary">FastAPI • APIs • SQLite</p>
              </div>
              {/* <div className="profile-badge left-badge">
                <p className="text-xs text-muted-foreground">Open To</p>
                <p className="font-bold">Backend Internship</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
