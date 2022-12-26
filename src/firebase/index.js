import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCCESoGcFdYxPVYdtJRwcRTSjOErWG1LCk",
    authDomain: "remitano-test-a86d2.firebaseapp.com",
    projectId: "remitano-test-a86d2",
    storageBucket: "remitano-test-a86d2.appspot.com",
    messagingSenderId: "25746196818",
    appId: "1:25746196818:web:a3888224c99bb05af2128b",
    measurementId: "G-RWY2GC2ECV",
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
