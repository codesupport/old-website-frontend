const config = {
    "production": {
        "firebase-bucket-url": "https://firebasestorage.googleapis.com/v0/b/codesupport-production.appspot.com/o",
        "resources-api": "https://codesupport.github.io/resources-api/categories",
        "resource-categories": ["Hosting", "JavaScript", "CSS", "Icons"]
    },
    "development": {
        "firebase-bucket-url": "https://firebasestorage.googleapis.com/v0/b/codesupport-development.appspot.com/o",
        "resources-api": "https://codesupport.github.io/resources-api/categories",
        "resource-categories": ["Hosting", "JavaScript", "CSS", "Icons"]
    }
};

export default process.env.ENVIRONMENT === "production" ? config.production : config.development;