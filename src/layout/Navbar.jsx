import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";

const links = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Experience", path: "#experience" },
  { name: "Projects", path: "#projects" },
  { name: "GitHub", path: "#github" },
  { name: "Contact", path: "#contact" },
];

export const Navbar = ({ theme, setTheme }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/85 backdrop-blur-xl border-b border-border/70">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-2xl font-extrabold tracking-tight">
          Rahees<span className="text-primary">.</span>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <a key={link.name} href={link.path} className="text-sm text-muted-foreground hover:text-primary transition">
              {link.name}
            </a>
          ))}
        </div>

       <div className="hidden md:flex items-center gap-3">

  <button
    onClick={() =>
      setTheme(theme === "dark" ? "light" : "dark")
    }
    className="icon-btn"
    aria-label="Toggle Theme"
  >
    {theme === "dark" ? (
      <Sun size={20} />
    ) : (
      <Moon size={20} />
    )}
  </button>

  <a
    href="#contact"
    className="primary-btn text-sm"
  >
    Hire / Connect
  </a>

</div>

        <button className="lg:hidden icon-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-border px-6 py-5 space-y-4">
          {links.map((link) => (
            <a key={link.name} href={link.path} onClick={() => setOpen(false)} className="block text-muted-foreground hover:text-primary">
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="inline-flex primary-btn">
            Contact Me
          </a>
        </div>
      )}
    </header>
  );
};
