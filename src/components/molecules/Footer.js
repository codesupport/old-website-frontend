import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "../../css/molecules/footer.css";

const socialLinks = [
    {
        icon: faDiscord,
        link: "https://codesupport.dev/discord"
    },
    {
        icon: faTwitter,
        link: "https://twitter.com/codesupportdev"
    },
    {
        icon: faGithub,
        link: "https://github.com/codesupport"
    }
];

function Footer() {
    return (
        <footer className="container">
            <div className="footer-social">
                <ul className="footer-social-icons">
                    {socialLinks.map(({ icon, link }) => (
                        <li>
                            <a target="_blank" href={link}>
                                <FontAwesomeIcon icon={icon} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <p className="footer-copyright">
                &copy; CodeSupport {new Date().getFullYear()}
            </p>
        </footer>
    );
}

export default Footer;