import React from 'react';

import "../../css/molecules/card.css";

function Card({title, description, children}) {
    return (
        <article className="card">
            {title &&
                <h2 className="card-title">
                    {title}
                </h2>}
            {description &&
                <p className="card-description">
                    {description}
                </p>
            }
            {children}
        </article>
    );
}

export default Card;