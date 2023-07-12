<template>
    <div>
        <button @click="login()" v-if="!userAuthenticated">Login</button>
        <button @click="logout()" v-else>LogOut</button>
    </div>
</template>


<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
export default {
    methods: {
        // isauth(){
        //     this.$store.commit('isAuthenticated', {isAuth : true})
        // }
        ...mapActions('authmod',['login']),
        ...mapActions('authmod',['logout'])
        
    },
    computed: {
        ...mapGetters('authmod',['userAuthenticated'])
  }
}
</script>