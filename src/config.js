const resourceCategories = ["Hosting", "JavaScript", "CSS", "Icons", "Python", "Software", "CSharp", "Fonts", "UI"];
const resourcesAPI = "https://codesupport.github.io/resources-api/categories";

const config = {
    "production": {
        "firebase-bucket-url": "https://firebasestorage.googleapis.com/v0/b/codesupport-production.appspot.com/o",
        "resources-api": resourcesAPI,
        "resource-categories": resourceCategories
    },
    "development": {
        "firebase-bucket-url": "https://firebasestorage.googleapis.com/v0/b/codesupport-development.appspot.com/o",
        "resources-api": resourcesAPI,
        "resource-categories": resourceCategories
    }
};

export default process.env.ENVIRONMENT === "production" ? config.production : config.development;