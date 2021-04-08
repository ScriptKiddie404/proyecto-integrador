import React from 'react';
import {Link} from 'react-router-dom';

const NavigationBar = () => {

    return (
        <div className={"navbar navbar-home"}>
            <div className={"container flex"}>
                <Link to={"/"}>
                    <h1><i className="fas fa-thermometer-three-quarters"/> Thermal Care</h1>
                </Link>
                <nav>
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
                        <Link to={"/demo"}>
                            <li>Demo</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    );

}

export default NavigationBar;
