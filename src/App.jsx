
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";


function Home() {
  return (
    <section className="hero">
      <p className="hello">WELCOME TO MY PORTFOLIO</p>

      <h1>Hi, I'm <span>Aditya Patil</span></h1>

      <h2>MCA Student | Aspiring Web Developer</h2>

      <p>
        I enjoy developing websites and exploring new technologies.
        I am passionate about programming, problem-solving and
        building useful projects.
      </p>

      <div className="hero-buttons">
        <Link to="/projects" className="btn">
          View My Projects
        </Link>

        <Link to="/contact" className="btn secondary-btn">
          Contact Me
        </Link>
      </div>
    </section>
  );
}


function About() {
  return (
    <section className="content">
      <h1>About <span>Me</span></h1>
      <p>
        Hello! My name is Aditya Patil. I am a Computer
        Applications student interested in web development
        and learning new technologies.
      </p>
    </section>
  );
}


function Skills() {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "75%" },
    { name: "ReactJS", level: "70%" },
    { name: "C Programming", level: "75%" }
  ];

  return (
    <section className="content">
      <h1>My <span>Skills</span></h1>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill" key={skill.name}>
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



function Projects() {
  const projects = [
    {
      number: "01",
      title: "Previous Year Question Paper Website",
      description:
        "An educational website that helps students access previous year question papers for exam preparation.",
      technology: "Educational Website"
    },
    {
      number: "02",
      title: "E-INVOICE BILLING PORTAL",
      description:
        "A construction site material calculation and billing portal designed to help manage material quantities and invoice details.",
      technology: "Billing & Material Calculation"
    }
  ];

  return (
    <section className="content">
      <h1>My <span>Projects</span></h1>

      <div className="cards">
        {projects.map((project) => (
          <div className="card project-card" key={project.number}>
            <span className="project-number">{project.number}</span>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <span className="project-tech">{project.technology}</span>
          </div>
        ))}
      </div>
    </section>
  );
}



function Education() {
  return (
    <section className="content">
      <h1>My <span>Education</span></h1>

      <div className="card">
        <h2>Master of Computer Applications (MCA)</h2>
        <h3>Late Bhausaheb Hiray S. S. Trust's</h3>
        <p>
          Institute of Computer Application
        </p>
        <p>University of Mumbai</p>
      </div>
    </section>
  );
}



function Contact() {
  return (
    <section className="content">
      <h1>Contact <span>Me</span></h1>

      <div className="card contact-card">
        <h2>Aditya Patil</h2>
        <p>Computer Applications Student</p>

        <div className="contact-links">
          <a
            href="https://github.com/Aditya8421"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/" className="logo">Aditya.</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/education">Education</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>© 2026 Aditya Patil | Personal Portfolio</footer>
    </BrowserRouter>
  );
}

export default App;
