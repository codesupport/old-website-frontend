import React from 'react';

import "../../css/molecules/card.css";

function Card({title, description, children}) {
    return (
        <div className="card">
            <h2 className="card-title">
                {title}
            </h2>
            <p className="card-description">
                {description}
            </p>
            {children}
        </div>
    );
}

export default Card;