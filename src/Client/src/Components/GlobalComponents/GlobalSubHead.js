import React from 'react';

const GlobalSubHead = ({subTitle, subTextBody, subImgCard}) => {
    return (
        <div>
            <section className="features-sub-head bg-light py-3">
                <div className="container grid">
                    <div>
                        <h1 className="md">{subTitle}</h1>
                        <p>{subTextBody}</p>
                    </div>
                    <img src={subImgCard} alt="A tree"/>
                </div>
            </section>
        </div>
    );
}

export default GlobalSubHead;
