<template>
    <h3>
        {{ finalCounter }}
    </h3>
</template>

<script>
import { mapGetters } from 'vuex'; 
export default {
    computed: {
        // counter() {
        //     return this.$store.getters.finalCounter
        // }      
        ...mapGetters('countermod',['finalCounter'])             //alternate method of the commented computed method
    }
};
</script>
