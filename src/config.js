const resourceCategories = ["Hosting", "JavaScript", "CSS", "Icons", "Python", "Software", "CSharp", "Fonts", "UI", "HTML"];
const resourcesAPI = "https://codesupport.github.io/resources-api/categories";
const githubAPI = "https://api.github.com";

const config = {
    "production": {
        "firebase-bucket-url": "https://firebasestorage.googleapis.com/v0/b/codesupport-production.appspot.com/o",
        "resources-api": resourcesAPI,
        "resource-categories": resourceCategories,
        "github-api": githubAPI,
        "backend-api": "http://api.codesupport.dev/api",
        "firebase": {}
    },
    "development": {
        "firebase-bucket-url": "https://firebasestorage.googleapis.com/v0/b/codesupport-development.appspot.com/o",
        "resources-api": resourcesAPI,
        "resource-categories": resourceCategories,
        "github-api": githubAPI,
        "backend-api": "http://localhost:8080/api",
        "firebase": {
            "apiKey": "AIzaSyBshIWr5s-dU8ugQTHKJstI4E5ZyLi_V6g",
            "projectId": "codesupport-development",
            "appId": "1:751174037565:web:a57acda7b2d688327e3a54",
            "measurementId": "G-XHEJ625R85"
        }
    }
};

export default process.env.ENVIRONMENT === "production" ? config.production : config.development;