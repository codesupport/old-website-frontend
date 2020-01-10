import React from "react";

import "../../css/molecules/labelwithinput.css";

function LabelWithInput({title, description, input}) {
    const {name, type, placeholder, pattern, required} = input;

    return (
        <label className="with-input">
            {title}
            {description ?
                <span className="label-description">
                    {description}
                </span>
            : ""}
            <input
                name={name}
                type={type}
                placeholder={placeholder || ""}
                pattern={pattern || ""}
                required={required || false}
            />
        </label>
    );
}

export default LabelWithInput;