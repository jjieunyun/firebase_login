//파이어베이스 앱 객체모듈 가져오기
//파이어베이스 9버전이므로 아래와 같이 /compat을 함께 작성
import firebase  from "firebase/compat/app";

// 파이어베이스 초기화
const oFirebase =  firebase.initializeApp({
  apiKey: "AIzaSyAZwe8-JumYMCPZE6NCHS7QRplQ1VQhCa8",
  authDomain: "login-97034.firebaseapp.com",
});



// 파이어베이스는 인증객체 모듈로사용
export const ofirebaseAuth = oFirebase.auth()