import React from 'react';

const Card = ({cardBody, cardIconClass}) => {

    return (
        <div className="card flex">
            <i className={cardIconClass}/>
            <p>{cardBody}</p>
        </div>
    );

}

export default Card;
