import axios from "axios";
import config from "../config";

class UserProfileService {
    api = `${config["backend-api"]}/user/v1/profiles`;

    async getByAlias(alias) {
        try {
            const {data} = await axios.get(`${this.api}/?alias=${alias}`);
            const profile = data.response[0];

            return {
                alias: profile.alias,
                avatar: profile.avatarLink,
                bio: profile.biography,
                country: profile.countryId,
                job: {
                    title: profile.jobTitle,
                    company: profile.jobCompany
                },
                roles: [profile.role.label],
                awards: profile.userAward,
                connected_accounts: {
                    discord: {
                        id: profile.discordId,
                        username: profile.discordUsername
                    },
                    github: {
                        username: profile.githubUsername
                    }
                }
            };
        } catch (error) {
            console.error(error);
            throw new Error(`There was an error getting ${alias}'s UserProfile.`);
        }
    }
}

export const UserProfile = new UserProfileService();