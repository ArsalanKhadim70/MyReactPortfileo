import { useRef, useState } from 'react'
// import emailjs from '@emailjs/browser';
import './contact.css'


const Contact = () => {
    // const Ref = useRef()
    // const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs
    //         .sendForm('service_ltbbt9o', 'template_k7utj9q', form.current, {
    //             publicKey: 'YOUR_PUBLIC_KEY',
    //         })
    //         .then(
    //             () => {
    //                 console.log('SUCCESS!');
    //             },
    //             (error) => {
    //                 console.log('FAILED...', error.text);
    //             },
    //         );
    // };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const [buttonText, setButtonText] = useState('Send Message')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        setButtonText('Sent!')
        setTimeout(() => {
            setButtonText('Send Message')
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        }, 1500)
    }


    return (
        <div className="contact-container">
            <div className="contact-card">
                <h1 className="contact-title">Contact Us</h1>
                <p className="contact-subtitle">We'd love to hear from you!</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            className="form-input form-textarea"
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">{buttonText}</button>
                </form>
            </div>
        </div>
    )
}

export default Contact