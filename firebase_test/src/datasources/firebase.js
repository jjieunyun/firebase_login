import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDLMybVozkndT5fQ6l2X_yfFMjd3EBNcE8",
    authDomain: "fir-test-caf74.firebaseapp.com",
};

// Initialize Firebase
//파이어베이스를 (다른 자바스크립트 파일에 작성해서) 모듈로 쓰기위해서 export해주면된다.
export const app = initializeApp(firebaseConfig);