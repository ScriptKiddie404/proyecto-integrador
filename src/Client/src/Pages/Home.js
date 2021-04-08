import React from 'react';
import ShowCase from "../Components/HomeComponents/ShowCase";
import Stats from "../Components/HomeComponents/Stats";
import Footer from "../Components/GlobalComponents/Footer";

const Home = () => {
    return (
        <div>
            <ShowCase/>
            <Stats/>
            <Footer/>
        </div>
    );
}

export default Home;
