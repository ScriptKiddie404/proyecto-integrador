import React from 'react';
import Footer from "../Components/GlobalComponents/Footer";
import GlobalHead from "../Components/GlobalComponents/GlobalHead";
import contactImg from "../images/contact.png";
import ContactForm from "../Components/GlobalComponents/ContactForm";
import "./Contact.css";

const Contact = () => {
    const title = "Contact Us?";
    const bodyText = "If you want to contact us, do not hesitate to fill out the form.";

    return (
        <div>
            <GlobalHead title={title} bodyText={bodyText} imgCard={contactImg}/>
            <section className={"contact-section"}>
                <div className="card">
                    <h1>Contact Us</h1>
                    <ContactForm/>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Contact;
