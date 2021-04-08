import React from 'react';
import ContactForm from "../GlobalComponents/ContactForm";

const ShowCase = () => {
    return (
        <section className="showcase">
            <div className="container grid">
                <div className="showcase-text">
                    <h1>The Best Control System</h1>
                    <p>
                        Now you don't have to worry about the temperature or humidity in your greenhouse. Are you
                        interested
                        in maintaining control from anywhere? We do it for you! We use the most modern technology to
                        keep
                        you up to date with everything that happens in your greenhouse.
                    </p>
                    <a href={"Features.js"} className="btn btn-outline">Learn More</a>
                </div>
                <div className="showcase-form card">
                    <h2>Wanna know more?</h2>
                    <ContactForm/>
                </div>

            </div>
        </section>
    );
}

export default ShowCase;
