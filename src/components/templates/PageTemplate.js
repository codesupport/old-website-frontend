import React from "react";

import { Helmet } from "react-helmet";
import Navigation from "../molecules/Navigation";

function PageTemplate({ page, children }) {
    return (
        <>
            <Helmet>
                <title>{page} - CodeSupport</title>
            </Helmet>
            <Navigation />
            {children}
        </>
    );
}

export default PageTemplate;