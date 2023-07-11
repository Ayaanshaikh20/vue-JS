<template>
  <div>
    <base-container title="Vuex">
    <!-- <h3>{{ this.$store.state.counter }}</h3> -->
      <base-counter></base-counter>
      <favourite-value></favourite-value>
      <button @click="increment(5)">Add 5 * 2</button>
      <base-counter-by-10></base-counter-by-10>
    </base-container>
    <base-container title="Auth">
      <user-auth></user-auth>
    </base-container>
  </div>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import BaseCounter from './components/BaseCounter.vue'
import BaseCounterBy10 from './components/BaseCounterBy10.vue';
import FavouriteValue from './components/FavouriteValue.vue';
import UserAuth from './components/UserAuth.vue'
import { mapActions } from 'vuex';
export default {
  components: {
    BaseContainer,
    BaseCounter,
    BaseCounterBy10,
    FavouriteValue,
    UserAuth
  },
  methods: {
    // addcounter() {
    //   this.$store.dispatch('increment', 5) //commit is built in method which takes increment from store.js
    // }                                // 10 is coming from payload
    
      ...mapActions(['increment'])
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
