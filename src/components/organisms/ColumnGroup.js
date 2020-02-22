import React from "react";

import "../../css/organisms/columngroup.css";

function ColumnGroup({ children }) {
    return <div className="column-group"> {children} </div>;
}

export default ColumnGroup;