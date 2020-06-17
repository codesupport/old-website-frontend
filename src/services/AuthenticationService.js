import axios from "axios";
import config from "../config";

class AuthenticationService {
    api = config["auth-api"];

    async setAccessToken(email, password) {
        const { status, data } = await axios.post(`${this.api}/authenticate`, {
            email, password
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (status === 200) {
            localStorage.setItem("token", data.response[0].token);
        } else if (status === 400) {
            throw new Error("Your username or password is incorrect.");
        } else {
            throw new Error("There was a problem authenticating your account.");
        }
    }

    getAccessToken() {
        return localStorage.getItem("token");
    }
}

export default new AuthenticationService();