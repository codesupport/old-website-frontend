const config = {
    "production": {
        "firebase-bucket-url": "https://firebasestorage.googleapis.com/v0/b/codesupport-production.appspot.com/o",
        "resources-api": "https://codesupport.github.io/resources-api",
        "resource-categories": ["Hosting", "JavaScript"]
    },
    "development": {
        "firebase-bucket-url": "https://firebasestorage.googleapis.com/v0/b/codesupport-development.appspot.com/o",
        "resources-api": "https://codesupport.github.io/resources-api",
        "resource-categories": ["Hosting", "JavaScript"]
    }
};

export default process.env.ENVIRONMENT === "production" ? config.production : config.development;