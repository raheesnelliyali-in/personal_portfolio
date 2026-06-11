import { useState, useEffect } from "react";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { GithubActivity } from "@/sections/GithubActivity";
import { Education } from "@/sections/Education";
// import { Timeline } from "@/sections/Timeline";
import { Certificates } from "@/sections/Certificates";
import { Achievements } from "@/sections/Achievements";
import { ResumeCTA } from "@/sections/ResumeCTA";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";

function App() {
  const [theme, setTheme] = useState(
  localStorage.getItem("theme") || "dark"
);

useEffect(() => {
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
}, [theme]);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GithubActivity />
        <Education />
        {/* <Timeline /> */}
        <Certificates />
        <Achievements />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
