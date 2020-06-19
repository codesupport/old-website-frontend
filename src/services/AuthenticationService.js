import axios from "axios";
import config from "../config";

class AuthenticationService {
    api = config["auth-api"];

    signOut() {
        localStorage.removeItem("token");
    }

    async setAccessToken(email, password) {
        try {
            const { data } = await axios.post(`${this.api}/authenticate`, {
                email, password
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            localStorage.setItem("token", data.response[0].token);
        } catch ({ response }) {
            if (response.status === 400) {
                throw new Error("Your username or password is incorrect.");
            }

            throw new Error("There was a problem authenticating your account.");
        }
    }

    getAccessToken() {
        return localStorage.getItem("token");
    }
}

export default new AuthenticationService();