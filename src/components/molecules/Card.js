import React from 'react';

import "../../css/molecules/card.css";

function Card({title, description, children}) {
    return (
        <article className="card">
            <h2 className="card-title">
                {title}
            </h2>
            <p className="card-description">
                {description}
            </p>
            {children}
        </article>
    );
}

export default Card;