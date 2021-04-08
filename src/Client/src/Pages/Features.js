import React from 'react';
import Footer from "../Components/GlobalComponents/Footer";
import GlobalHead from "../Components/GlobalComponents/GlobalHead";
import FeatureCards from "../Components/GlobalComponents/FeaturesCards";
import featuresImg from '../images/features.png';
import arduinoImg from '../images/arduino.png';
import GlobalSubHead from "../Components/GlobalComponents/GlobalSubHead";

const Features = () => {

    const title = "Features";
    const bodyText = "Feel free to read the amazing Termal Care specs that separate us from any kind of competition out there.";
    const imgCard = featuresImg;

    const subTitle = "Thermal Care Platform";
    const subBodyText = "Feel the power of cloud computing and IoT. Wherever you are, any time.";

    return (
        <div>
            <GlobalHead title={title} bodyText={bodyText} imgCard={imgCard}/>
            <GlobalSubHead subTitle={subTitle} subTextBody={subBodyText} subImgCard={arduinoImg}/>
            <FeatureCards/>
            <Footer/>
        </div>
    );
}

export default Features;
