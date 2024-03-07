// Contact.jsx
import React from 'react';
import { Link } from 'react-scroll';  // function used to click and move w.r.to navbar.jsx
import './Contacts.css'; // Import CSS file for styling

function Contact() {
    return (
        <div id="contact" className="contact-container"> {/* Apply a class for container styling */}
            <h2>Contact Me</h2>
            <p>Further Queries?</p>
            <p>You can <Link to="contact" smooth={true} duration={500}>Contact here</Link></p>
        </div>
    );
}

export default Contact;


