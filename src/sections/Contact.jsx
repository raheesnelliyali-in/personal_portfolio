import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export const Contact = () => {
return ( <section id="contact" className="section-space"> <div className="container mx-auto px-6"> <div className="section-header"> <span className="section-label">Contact</span> <h2 className="section-title">
Let's <span className="text-primary">Connect</span> </h2> <p className="section-description mt-5">
Recruiters, mentors, and collaborators can reach me through these channels. </p> </div>

    <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-5xl mx-auto">

 <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=raheesnelliyali01@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="clean-card text-center"
>
  <Mail className="text-primary mx-auto mb-4" size={34} />
  <h3 className="text-xl font-semibold">Email</h3>
  <p className="text-muted-foreground mt-2">
  raheesnelliyali01@gmail.com
</p>
</a>

         <div className="clean-card text-center">
         <MapPin className="text-primary mx-auto mb-4" size={34} />
        <h3 className="text-xl font-semibold">Location</h3>
        <p className="text-muted-foreground mt-2">
          Kerala, India
        </p>
      </div>

      <a
        href="https://github.com/raheesnelliyali-in"
        target="_blank"
        rel="noopener noreferrer"
        className="clean-card text-center"
      >
        <Github className="text-primary mx-auto mb-4" size={34} />
        <h3 className="text-xl font-semibold">GitHub</h3>
        <p className="text-muted-foreground mt-2">
          github.com/raheesnelliyali-in
        </p>
      </a>

<a
  href="https://www.linkedin.com/in/muhammedraheesn/"
  target="_blank"
  rel="noopener noreferrer"
  className="clean-card text-center"
>
  <Linkedin className="text-primary mx-auto mb-4" size={34} />
  <h3 className="text-xl font-semibold">LinkedIn</h3>
  <p className="text-muted-foreground mt-2">
    View LinkedIn Profile
  </p>
</a>

    </div>
  </div>
</section>
);
};
