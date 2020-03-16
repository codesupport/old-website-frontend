import React from "react";

import "../../css/molecules/introhero.scss";

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
                        <a href={button.href} target={button.target}>
                            <button>
                                {button.text}
                            </button>
                        </a>
                    }
                </div>
            </div>
        </section>
    );
}

export default IntroHero;