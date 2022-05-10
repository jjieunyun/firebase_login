<template>
  <div id="app">
    <nav v-if="!fnGetAuthSatus">
      <router-link to="/">Home</router-link> |
      <router-link to="/register">회원가입</router-link>
    </nav>

    <nav v-else>
      <router-link to="/">Home</router-link> |
      <button @click="fnDoLogout">로그아웃</button>
      <button @click="fnDoDelete"> 회원탈퇴</button>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed : {
    fnGetAuthSatus() {
      return this.$store.getters.fnGetAuthSatus
    },
  },
  methods : {
     fnDoLogout() {
      this.$store.dispatch('fnDoLogout')
    },
    fnDoDelete(){
      this.$store.dispatch('fnDoDelete')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
