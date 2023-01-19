import firebase from "firebase/compat/app";

const conf = {
    apiKey: "AIzaSyADIO4zmEVW5WnMBQLWeCMr7UWRVO5Rgbw",
    authDomain: "gdsc-wow-2022.firebaseapp.com",
    projectId: "gdsc-wow-2022",
    storageBucket: "gdsc-wow-2022.appspot.com",
    messagingSenderId: "658804558392",
    appId: "1:658804558392:web:df4926b2ceafae991834cd",
    measurementId: "G-5DN8ELTHT1"
}

export default !firebase.apps.length ? firebase.initializeApp(conf) : firebase.app();
