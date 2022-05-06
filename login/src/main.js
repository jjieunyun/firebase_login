import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import firebase from 'firebase/compat/app'
import '@/datasources/firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  created() {
    //사용자가 로그아웃, 비밀번호등을 변경했을때 저리
    //pUserInfo : 유저정보를 담아두는 사용자정의객체
    firebase.auth().onAuthStateChanged(()=> {
      if(pUserInfo) {
        //이미 로그인 되어있는지 여부를 파악해서 처리
      }

    })
  },
  render: function (h) { return h(App) }
}).$mount('#app')
