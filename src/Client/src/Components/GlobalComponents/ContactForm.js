import React from 'react';

const ContactForm = () => {
    return (
        <form name="contact" method="POST" data-netlify="true">
            <div className="form-control">
                <input required type="text" name="name" placeholder="Your full name"/>
            </div>
            <div className="form-control">
                <input required type="text" name="company" placeholder="Your adress"/>
            </div>
            <div className="form-control">
                <input required type="text" name="know" placeholder="How did you find us?"/>
            </div>
            <div className="form-control">
                <input required type="email" name="email" placeholder="Give us your email"/>
            </div>
            <input type="submit" value="Send" className="btn btn-primary"/>
            <input type="hidden" name="form-name" value="contact"/>
        </form>
    );
}

export default ContactForm;
