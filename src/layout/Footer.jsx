import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-xl font-bold">Muhammed Rahees N<span className="text-primary">.</span></h3>
          <p className="text-muted-foreground text-sm mt-1">Python FastAPI Intern | Backend Developer | Data Analytics Enthusiast</p>
          <p className="text-muted-foreground text-xs mt-2">© 2026 Muhammed Rahees N. All rights reserved.</p>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/raheesnelliyali-in" target="_blank" rel="noopener noreferrer" className="icon-btn"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/muhammed-rahees-n-68065a317/" target="_blank" rel="noopener noreferrer" className="icon-btn"><Linkedin size={20} /></a>
          <a href="mailto:raheesnelliyali01@gmail.com" className="icon-btn"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
};
