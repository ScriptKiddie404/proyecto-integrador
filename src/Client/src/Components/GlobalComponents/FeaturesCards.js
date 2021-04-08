import React from 'react';
import Card from "./Card";

const FeatureCards = () => {

    const cardText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cumque cupiditate debitis ex facere laboriosam omnis quaerat quam quas tempore.";

    return (
        <section className="features-main my-2">
            <div className="container grid grid-3">
                <Card cardBody={cardText} cardIconClass={"fab fa-pagelines fa-3x"}/>
                <Card cardBody={cardText} cardIconClass={"fas fa-tree fa-3x"}/>
                <Card cardBody={cardText} cardIconClass={"fas fa-laptop-code fa-3x"}/>
                <Card cardBody={cardText} cardIconClass={"fas fa-thermometer-three-quarters fa-3x"}/>
                <Card cardBody={cardText} cardIconClass={"fas fa-video fa-3x"}/>
                <Card cardBody={cardText} cardIconClass={"fas fa-hand-holding-water fa-3x"}/>
            </div>
        </section>
    );
}

export default FeatureCards;
