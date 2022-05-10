import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router';

//초기화한 파이어베이스를 불러옴
import '@/datasources/firebase.js';

//9버전을 사용한 방법, 
import { 
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider, deleteUser
 } from "firebase/auth";
//파이어베이스 인증을 위한 객체
const auth = getAuth();

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    oUser : null //사용자 정보를 담을 객체
  },
  getters: {
    //사용자 객체 반환
    fnGetUser(state) {
      return state.oUser;
    },
    //사용자 객체값의 유무로 로그인 여부 판단
    fnGetAuthSatus(state) {
      return state.oUser != null;
    }
  },
  mutations: {
    //작성한 User의 정보를 받아와서 할당해준다.
    fnSetUser(state, payload) {
      state.oUser = payload
    }
  },
  actions: {
    //1. 파이어베이스의 인증을 이용해서 이메일회원 생성 및 저장 - 공식문서참고
    fnRegisterUser({commit}, payload) {
      createUserWithEmailAndPassword(auth, payload.pEmail, payload.pPassword)
        .then((pUserInfo) => {
          // 신규회원 이메일 정보를 스토어에 저장
          commit('fnSetUser', {
            email : pUserInfo.user.email
          });
          router.push('/main');
        })
        .catch(error=> console.log(error.message));
    },
    
    //2. 파이어베이스의 인증을 이용해서 이메일회원 로그인
    fnDoLogin({commit}, payload) {
      signInWithEmailAndPassword(auth, payload.pEmail, payload.pPassword)
        .then((pUserInfo) => {
          commit('fnSetUser', {
            id : pUserInfo.user.uid,
            name : pUserInfo.user.name,
            email : pUserInfo.user.email,
            photoURL : pUserInfo.user.photoURL
          })
          router.push('/main');
        })
        .catch(error=> console.log(error.message));
    },

    //3. 파이어베이스 구글인증 
    fnGoogleLogin_Popup({commit}) {
      const oProvider = new GoogleAuthProvider();
      oProvider.addScope('profile');
      oProvider.addScope('email');

      signInWithPopup(auth, oProvider)
        .then((pUserInfo) =>{
          commit('fnSetUser', {
            id: pUserInfo.user.uid,
            name: pUserInfo.user.displayName,
            email: pUserInfo.user.email,
            photoURL: pUserInfo.user.photoURL
          });
          console.log(pUserInfo.user.photoURL)
          router.push('/main');
        })
        .catch(error=> {
          console.log(error.name);
          console.log(error.message)
        });
    },

    //4. 로그아웃
    fnDoLogout({ commit }) {
      commit("fnSetUser", null);
      router.push("/");
    },

    //5. 회원삭제
    fnDoDelete({ commit }) {
      //파이어베이스에 회원탈퇴를 요청
      deleteUser()
        .then(() => {
          //스토어의 회원에 빈값을 넣음
          commit("fnSetUser", null);
          router.push("/");
        })
        .catch(error => console.log(error));
    },
  },
  modules: {
  }

})
