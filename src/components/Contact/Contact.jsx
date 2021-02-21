import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="Contact">
            <h1 className="contact-title">Contact</h1>
            <div className="contact-adress">
                <p>f.m.11404@gmail.com</p>
                <div></div>
            </div>
            <h2 className="contact-sub-title">and more info...</h2>
            <ul className="contact-link-list">
                <li>Twitter</li>
                <li>Blog</li>
                <li>Qiita</li>
                <li>GitHub</li>
            </ul>
        </div>
    );
}

export default Contact;