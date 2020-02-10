import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/performance";
import config from "../config";

firebase.initializeApp(config.firebase);

export const analytics = firebase.analytics();
export const performance = firebase.performance();