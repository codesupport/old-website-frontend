import React from "react";

import "../../css/organisms/cardgroup.css";

function CardGroup({size, children}) {
    return (
        <div className={`card-group${size ? `-${size}` : ""}`}>
            {children}
        </div>
    );
}

export default CardGroup;