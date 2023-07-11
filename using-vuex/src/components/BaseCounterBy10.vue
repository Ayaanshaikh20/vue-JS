<template>
    <button @click="increase(10)">add 10 * 2</button>
</template>


<script>
    import { mapActions } from 'vuex';
    export default {
        methods: {
            // add10() {
            //     this.$store.dispatch('increase', 10)
            // }
            ...mapActions(['increase'])
        }
    }
</script>
