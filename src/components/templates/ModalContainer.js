import React from "react";

import "../../css/templates/modalcontainer.scss";

function ModalContainer({children}) {
    return <div className="modal-container" tabIndex="-1">{children}</div>;
}

export default ModalContainer;