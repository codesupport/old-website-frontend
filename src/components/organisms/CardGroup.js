import React from "react";

import "../../css/organisms/cardgroup.css";

function CardGroup({children}) {
    return (
        <div className="card-group">
            {children}
        </div>
    );
}

export default CardGroup;