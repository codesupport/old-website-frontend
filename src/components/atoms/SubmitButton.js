import React from "react";

import "../../css/atoms/submitbutton.css";

function SubmitButton({text, preventDefault}) {
    return <button type="submit" onClick={(event) => {
        if (preventDefault) {
            event.preventDefault();
        }
    }}>{text}</button>;
}

export default SubmitButton;