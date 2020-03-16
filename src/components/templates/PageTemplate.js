import React from "react";

import { Helmet } from "react-helmet";
import Navigation from "../molecules/Navigation";

import "../../css/style.css";

function PageTemplate({ page, children }) {
    return (
        <>
            <Helmet>
                <title>CodeSupport | {page}</title>
            </Helmet>
            <Navigation />
            {children}
        </>
    );
}

export default PageTemplate;