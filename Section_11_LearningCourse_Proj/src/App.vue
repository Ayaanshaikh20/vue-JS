

<!--Adding Dummy Data-->
<!--Key is compulsory needed in in v-for-->
<template>
    <the-header 
    :title="Title"></the-header>
    <the-resources></the-resources>
</template>


<!--Creating array of object that has some data-->
<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheResources from './components/Learning-Resources/TheResources.vue';
export default {

    components: {'the-header': TheHeader, 'the-resources': TheResources},


    data() {
        return {
            Title: "RememberMe"
        };
    },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&family=Roboto:wght@500&display=swap');

*{
    box-sizing: border-box;
}

html{
    font-family: 'Roboto', sans-serif;
}

body{
    margin: 0;
}
</style>