import React from "react";

import PageTemplate from "../templates/PageTemplate";
import IntroHero from "../molecules/IntroHero";

import "../../css/pages/index.css";

function Index() {
    return (
        <PageTemplate page="Home">
            <IntroHero
                title="CodeSupport"
                description="Welcome!"
            />
        </PageTemplate>
    );
}

export default Index;