import React from 'react';
import {Link} from "react-router-dom";


const Footer = () => {

    return (
        <footer className="footer bg-dark py-5">
            <div className="container grid grid-3">
                <div className={"footer-logo"}>
                    <h1 className={"logo"}><i className="fas fa-thermometer-three-quarters"/> <a href={"Home.js"}>Thermal
                        Care</a></h1>
                    <p>Copyright &copy; 2021</p>
                </div>

                <nav className="nav-footer-links">
                    <ul>
                        <Link to={"/"}>
                            <li>Home</li>
                        </Link>
                        <Link to={"/features"}>
                            <li>Features</li>
                        </Link>
                        <Link to={"/about"}>
                            <li>About</li>
                        </Link>
                        <Link to={"contact"}>
                            <li>Contact</li>
                        </Link>
                    </ul>
                </nav>

                <div className="social">
                    <a href="http://www.twitter.com"><i className="fab fa-twitter fa-2x"/></a>
                    <a href="http://www.facebook.com"><i className="fab fa-facebook fa-2x"/></a>
                    <a href="http://www.instagram.com"><i className="fab fa-instagram fa-2x"/></a>
                </div>

            </div>
        </footer>
    );

}

export default Footer;
