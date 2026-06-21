import './AboutDetails.css'

const AboutDetails = () => {
    const personalInfo = {
        name: "Arsalan Khadim Hussain",
        fatherName: "Khadim Hussain",
        email: "arsalankhadim70@gmail.com",
        phone: "+92 3232364919",
        address: "Karachi, Pakistan",
        education: "2nd years in Computer Science",
        collage: "Government National College, Karachi",
        graduationYear: "2024",
        experience: "2+ years",
        skills: ["React", "JavaScript", "HTML/CSS", "Node.js", "MongoDB", "Material UI"],
        languages: ["English", "Urdu"]
    }

    return (
        <div className="about-details-section">
            <div className="about-details-container">
                <h1 className="about-details-title">About Me</h1>
                <div className="about-details-grid">
                    <div className="about-card personal-info-card">
                        <h2>Personal Information</h2>
                        <div className="info-item">
                            <span className="info-label">Name:</span>
                            <span className="info-value">{personalInfo.name}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Father Name:</span>
                            <span className="info-value">{personalInfo.fatherName}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Email:</span>
                            <span className="info-value">{personalInfo.email}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Phone:</span>
                            <span className="info-value">{personalInfo.phone}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Address:</span>
                            <span className="info-value">{personalInfo.address}</span>
                        </div>
                    </div>

                    <div className="about-card education-card">
                        <h2>Education</h2>
                        <div className="info-item">
                            <span className="info-label">Degree:</span>
                            <span className="info-value">{personalInfo.education}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">College:</span>
                            <span className="info-value">{personalInfo.collage}</span>
                        </div>
            
                        <div className="info-item">
                            <span className="info-label">Graduation:</span>
                            <span className="info-value">{personalInfo.graduationYear}</span>
                        </div>
                    </div>

                    <div className="about-card experience-card">
                        <h2>Experience</h2>
                        <p className="experience-text">{personalInfo.experience}Entry-level Web Developer with strong foundations in React and Next.js, looking to contribute technical skills and fresh perspectives to a dynamic development team.</p>
                        <h3>Technical Skills</h3>
                        <div className="skills-list">
                            {personalInfo.skills.map((skill, index) => (
                                <span className="skill-badge" key={index}>{skill}</span>
                            ))}
                        </div>
                        <h3>Languages</h3>
                        <div className="skills-list">
                            {personalInfo.languages.map((lang, index) => (
                                <span className="skill-badge" key={index}>{lang}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutDetails