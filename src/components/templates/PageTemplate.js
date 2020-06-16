import React from "react";

import { Helmet } from "react-helmet";
import Navigation from "../molecules/Navigation";
import Footer from "../molecules/Footer";

function PageTemplate({ page, children }) {
    return (
        <>
            <Helmet>
                <title>{page} - CodeSupport</title>
            </Helmet>
            <Navigation />
            {children}
            <Footer />
        </>
    );
}

export default PageTemplate;