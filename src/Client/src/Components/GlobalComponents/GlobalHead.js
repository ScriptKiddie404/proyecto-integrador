import React from 'react';

const GlobalHead = ({title, bodyText, imgCard}) => {
    return (
        <div>
            <section className="features-header bg-primary py-3">
                <div className="container grid">
                    <div>
                        <h1 className="xl">{title}</h1>
                        <p className="lead">{bodyText}</p>
                    </div>
                    <img src={imgCard} alt="Features"/>
                </div>
            </section>
        </div>
    );
}

export default GlobalHead;
