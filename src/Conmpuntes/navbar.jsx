import { useState } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">
                    <Link to="/" className="nav-logo">
                        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" className="logo-img" />
                        <h1 className="nav-title">My Portfolio</h1>
                    </Link>
                </div>
                <button
                    className="nav-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
                </button>
                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to="/About" onClick={() => setIsOpen(false)}>Project</Link></li>
                    <li><Link to="/Contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar