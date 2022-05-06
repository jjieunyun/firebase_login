<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="text-center my-5">
                <h1 class="display-1">회원가입 페이지</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="text-center" cols="8" offset="2" sm="6" offset-sm="3">
                <form >
                    <v-text-field name="Email" label="이메일" type="email" required></v-text-field>
                    <v-text-field name="password" label="비밀번호" type="password" required></v-text-field>
                    
                    <!-- 비밀번호 확인 : rules 속성 -->
                    <v-text-field name="ConfirmPassword" label="비밀번호 확인" type="password" required
                    :rules="[true]">
                    </v-text-field>
                    
                    <v-btn color="orange" dark v-if="!loading">회원가입</v-btn>

                    <!-- 시간지연의 경우 회전 프로그레스 원 표시 -->
                    <v-progress-circular v-if="loading"
                    color="grey lighten-1" :width="7" :size="70"
                    indeterminate>
                    </v-progress-circular>
                    
                </form>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data () {
        return {
            loading : false
        }
    }
}
</script>