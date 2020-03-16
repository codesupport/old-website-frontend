import React from "react";

import "../../css/atoms/tag.scss";

function Tag({text}) {
    return <span className="tag">{text}</span>;
}

export default Tag;