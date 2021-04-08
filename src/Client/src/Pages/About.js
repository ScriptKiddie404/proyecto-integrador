import React from 'react';
import Footer from "../Components/GlobalComponents/Footer";
import GlobalHead from "../Components/GlobalComponents/GlobalHead";
import aboutImg from "../images/aobut.png";
import questionImg from "../images/question.png";
import GlobalSubHead from "../Components/GlobalComponents/GlobalSubHead";


const About = () => {

    const dummyText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta doloremque eum, explicabo fugiat iste labore laborum laudantium minima nobis odio perferendis quia repellendus sapiente sequi sit sunt. Accusamus animi atque eos et expedita itaque laborum, nam porro quo quos.";
    const questionTitle1 = "This is a question?";
    const title = "Who we are?";
    const bodyText = "We are a modern technology company committed to giving you the best service and infrastructure for your greenhouse. Giving you comfort and accessibility of all kinds, adjusted to your economy, your possibilities and your desires."

    return (
        <div>
            <GlobalHead title={title} bodyText={bodyText} imgCard={aboutImg}/>
            <GlobalSubHead subTitle={questionTitle1} subTextBody={dummyText} subImgCard={questionImg}/>
            <GlobalSubHead subTitle={questionTitle1} subTextBody={dummyText} subImgCard={questionImg}/>
            <GlobalSubHead subTitle={questionTitle1} subTextBody={dummyText} subImgCard={questionImg}/>
            <GlobalSubHead subTitle={questionTitle1} subTextBody={dummyText} subImgCard={questionImg}/>
            <GlobalSubHead subTitle={questionTitle1} subTextBody={dummyText} subImgCard={questionImg}/>
            <Footer/>
        </div>
    );
}

export default About;
