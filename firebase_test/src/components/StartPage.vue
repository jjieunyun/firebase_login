<template>
    <div>
        <h1>시작페이지</h1>
        <button @click="fnGoogleLogin_Popup">구글 로그인</button> <br>
        <button @click="LoginEmail">이메일 로그인</button>
    </div>
</template>

<script>
export default {
    methods : {
        fnGoogleLogin_Popup(){
            this.$store.dispatch('fnGoogleLogin_Popup')
        },
        LoginEmail() {
            this.$router.push('/login')
        }
    }
}
</script>

<style>

</style>