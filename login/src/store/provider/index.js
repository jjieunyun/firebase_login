//구글인증관련 내용만 따로 작성한 store모듈

//파이어베이스 앱 객체모듈
import firebase from 'firebase/compat/app';
import "firebase/compat/auth"

//라우터 사용을 위한 
import router from "@/router"

export default {
    state : {
        oUser : null // 사용자 정보를 담을 객체 생성
    },
    mutations : {
        //사용자 객체 저장
        fnSetUser(state, payload) {
            state.oUser = payload;
        }
    },
    getters : {
        //사용자 객체 반환
        fnGetUser(state) {
            return state.oUser;
        },
        //사용자 객체 값의 유무를 통해 로그인 여부 판단
        fnGetAuthStatus(state) {
            return state.oUser != null;
        }
    },
    actionts : {
        //이메일 회원가입 처리
        fnRegisterUser( {commit}, payload) {
            //파이어베이스에 이메일 회원 생성 저장
            firebase.auth().createUserWithEmailAndPassword(payload.pEmail, payload.pPassword)
                .then((pUserInfo)=> {
                    //신규회원이메일 정보를 스토어에 저장
                    commit("fnSetUser", {
                        email : pUserInfo.user.email,
                    });
                    router.push('/mail');
                })
                .catch((err)=> {
                    console.log(err.message)
                });
        },
        doLogin({commit}, payload) {
            //파이어베이스에 이메일 회원 로그인 인정처리 요청
            firebase.auth()
                .signInWithEmailAndPassword(payload.pEmail, payload.pPassword)
                .then((pUserInfo)=> {
                    //로그인이 성공하면 내용 저장
                })
        },
        //구글 계정 회원 로그인팝업
        fnDoGoogleLogin_Popup({commit}) {
            //파이어베이스에 r구글 회원 로그인 인증처리 요청
            //로그인 제공자 객체 생성
            const oProvieder = new 
            //오픈 계정의 범위 (가져오는 값)
            oProvieder.addScope('profile');
            oProvieder.addScope('email');
        } 
    }
}