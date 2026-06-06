import './About.css'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    const projects = [
        {
            id: 1,
            title: "E-commerce Website",
            description: "A full-featured online shopping platform with user authentication, product management, and secure payment integration.",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            variant: "black-gold"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A responsive task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            tech: ["Vue.js", "Firebase", "Tailwind CSS"],
            variant: "white-gold"
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "A modern portfolio website showcasing creative work with smooth animations and interactive elements.",
            tech: ["Next.js", "Framer Motion", "CSS"],
            variant: "black-gold"
        },
        {
            id: 4,
            title: "Weather Dashboard",
            description: "A responsive weather application with location-based forecasts and interactive maps using OpenWeather API.",
            tech: ["React", "OpenWeather API", "Chart.js"],
            variant: "white-gold"
        },
        {
            id: 5,
            title: "Blog Platform",
            description: "A full-stack blog platform with markdown support, user comments, and admin dashboard.",
            tech: ["React", "Express", "PostgreSQL"],
            variant: "black-gold"
        },
        {
            id: 6,
            title: "Social Media App",
            description: "A social networking application with real-time chat, post sharing, and user profiles.",
            tech: ["React", "Socket.io", "Redis"],
            variant: "white-gold"
        }
    ]

    return (
        <>
           <div className="projects-section">
                <div className="My_wrok">
                    <h1>My Projects</h1>
                </div>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div className={`project-card ${project.variant}`} key={project.id}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((t, index) => (
                                    <span className="tech-tag" key={index}>{t}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href="#" className="project-link">Live Demo</a>
                                <a href="#" className="project-link">View Code</a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="learn-more-section">
                    <button className="learn-more-btn" onClick={() => navigate('/about-details')}>
                        Learn More About Me
                    </button>
                </div>
            </div>
        </>
    )
}

export default About