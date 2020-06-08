import React from "react";

import "../../css/molecules/introhero.css";

function IntroHero({title, description, button}) {
    return (
        <section className="intro">
            <div className="container">
                <div className="content">
                    <h1>
                        {title}
                    </h1>
                    <p>
                        {description}
                    </p>

                    {button &&
                        <a href={button.href} target={button.target} className="uk-button uk-button-secondary">
                            {button.text}
                        </a>
                    }
                </div>
            </div>
        </section>
    );
}

export default IntroHero;