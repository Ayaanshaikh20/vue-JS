<template>
    <h3>
        {{ normalizedCounter }}
        <p>We do more...</p>
    </h3>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        // counter() {
        //     return this.$store.getters.normalizedCounter
        // }      
        ...mapGetters(['normalizedCounter'])
    },
}
</script>