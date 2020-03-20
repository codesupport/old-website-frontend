import React from "react";
import {Link} from "react-router-dom";

import "../../css/templates/errortemplate.css";

function ErrorTemplate({message, code}) {
    return (
        <main className="error-template">
            <section className="error">
                <h1>
                    {code ? `Error ${code}` : "An Error Occurred"}
                </h1>
                <p>
                    {message}
                </p>
                <Link to="/">
                    <button>
                        Back To The Homepage
                    </button>
                </Link>
            </section>
        </main>
    );
}

export default ErrorTemplate;