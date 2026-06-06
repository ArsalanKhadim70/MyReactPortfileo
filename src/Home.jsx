import Button from '@mui/material/Button';
import './Home.css'
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='Home'>
            <div className="Main_Hero_Section">
                <div className="hero-image">
                    <img src={`${import.meta.env.BASE_URL}IMG_0002.JPG`} alt="Hero" />
                </div>
                <div className="Hero_Section">
                    <div className="hero-card">
                        <h1>Welcome to My Portfolio</h1>
                        <h2>My Name is Arsalan</h2>
                        <p>I am a passionate developer creating amazing web experiences.</p>
                        <p>My projects showcase my skills and creativity.</p>
                        <Button variant="outlined" onClick={() => navigate('/About')}>
                            Explore My Work
                        </Button>
                    </div>
                </div>
            </div>

            <div className="About_Me_Section">
                <h2>About Me</h2>
                <p>I am a dedicated developer with a passion for creating innovative web applications. With a strong background in front-end and back-end development, I strive to build seamless user experiences. My portfolio showcases a variety of projects that highlight my skills and creativity in the field of web development.</p>
                <br />
                <Button variant="outlined" onClick={() => navigate('/about-details')}>
                            Learn More About Me
                        </Button>
            </div>

            <div className="Skills_Section">
                <h2>My Skills & Projects</h2>
                <div className="skills-grid">
                    {[
                        { id: 1, title: "WhisperBloom", desc: "An elegant multi-page e-commerce website for premium perfumes built with React.", liveLink: "https://whisper-bloom.netlify.app/", githubLink: "https://github.com/ArsalanKhadim70/whisperbloom" },
                        { id: 2, title: "Api Project", desc: "A responsive three-page personal portfolio with smooth animations.", liveLink: "https://coruscating-sorbet-9bc202.netlify.app/", githubLink: "https://github.com/ArsalanKhadim70" },
                        { id: 3, title: "Hacking Side", desc: "Converted a 5-page static HTML/CSS project into a fully responsive React app.", liveLink: "https://enchanting-starlight-5831f5.netlify.app/", githubLink: "https://github.com/ArsalanKhadim70" },
                        { id: 4, title: "Express Server", desc: "Built a local Express server to handle custom API responses and static image serving.", liveLink: "https://bright-marigold-6f4437.netlify.app/", githubLink: "https://github.com/ArsalanKhadim70" },
                        { id: 5, title: "Nexcent Dashboard", desc: "Admin dashboard for managing products and orders with Material UI.", liveLink: "https://iridescent-buttercream-8b2cb8.netlify.app/", githubLink: "https://github.com/ArsalanKhadim70" },
                        { id: 6, title: "Quiz App", desc: "Interactive quiz application with timer and score tracking.", liveLink: "https://classy-choux-8adacd.netlify.app/", githubLink: "https://github.com/ArsalanKhadim70" }
                    ].map((project) => (
                        <div key={project.id} className="skill-card">
                            <div className="skill-icon">★</div>
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <div className="skill-links">
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="skill-link">Live Demo</a>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="skill-link">GitHub</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <footer className="footer-section">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h3>Arsalan</h3>
                        <p>Professional Developer</p>
                    </div>
                    <div className="footer-social">
                        <a href="https://www.facebook.com/arslan.khadm.hsyn" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Facebook">
                            <span>f</span>
                        </a>
                        <a href="https://www.linkedin.com/in/arsalan-khadim-b17a16365/" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="LinkedIn">
                            <span>in</span>
                        </a>
                        <a href="https://github.com/ArsalanKhadim70" target="_blank" className="social-circle" aria-label="GitHub">
                            <span>gh</span>
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 Arsalan. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Home