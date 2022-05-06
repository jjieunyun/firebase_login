<template>
  <v-app>
    <v-navigation-drawer clipped app v-model='drawer'>
      <v-list>
        <!-- items 배열을 읽어와서 메뉴로 바인딩 -->
        <v-list-item v-for="(item, i) in fnGetMenuItems" :key="i" :to="item.to">
          <v-list-item-action>
            <!-- v-html을 사용하면 그 값이 html형식으로 들어간다 -->
            <v-icon v-html="item.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-title v-html="item.title"></v-list-item-title>
        </v-list-item>

        <!-- 로그인이 된 경우에만 로그아웃 버튼을 표시함 -->
        <v-list-item v-if="login">
          <v-list-item-action>
            <v-icon>mdi-arrow-right-bold-box-outline</v-icon>
          </v-list-item-action>
          <v-list-item-title>로그아웃</v-list-item-title>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <!-- app-bar 시작-->
    <v-app-bar app clipped-left color="primary" dark>
      <!-- class 를 통해 sm(중단점)크기 보다 크면 숨긴다 -->
      <v-app-bar-nav-icon @click="drawer= !drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <router-link to="/" >
        <!-- class를 통해 xs(중단점)크기 일때 숨긴다-->
        <v-icon class="hidden-xs-only">mdi-home</v-icon>
      </router-link>
      <v-toolbar-title class="headline"> 이메일-구글 인증 로그인 </v-toolbar-title>
      <v-spacer></v-spacer>
      
      <!-- 툴바 메뉴 = 네비게이션 서랍과 동일한 메뉴 -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text v-for="(item,i) in fnGetMenuItems" :key="i" :to="item.to">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
        <!-- 로그인 된 경우에만 로그아웃 버튼을 표시 -->
        <v-btn text v-if="login">
          <v-icon left>mdi-arrow-right-bold-box-outline</v-icon>
          로그아웃
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer app>
      <div class="mx-auto">&copy; CODE-DESIGN.web.app </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return  {
      drawer : false,
      login : false
    }
  },
  computed : {
    // 로그인 여부에 따라 다르게 탐색서랍과 툴바메뉴명 항목 배열 반환
    fnGetMenuItems() {
      if(!this.login) {
        return [{
          title : '회원가입',
          to : '/register',
          icon : 'mdi-lock-open-outline'
        }]
      } else {
        return [{
          title :'메인 페이지',
          to : '/main',
          icon : 'mdi-account'
        }]
      }
      
    }
  }
}
</script>
