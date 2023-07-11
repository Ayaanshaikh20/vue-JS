<template>
    <div>
      <button @click="confirmInput()">Confirm</button>
      <button @click="savedChanges()">Saved Changes</button>
      <ul>
        <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
      </ul>
    </div>
  </template>
  
  <script>
  import UserItem from './UserItem.vue';
  
  export default {
    data() {
      return {
        savedchanges: false
      }
    },
    components: {
      UserItem,
    },
    inject: ['users'],
    methods: {
      confirmInput() {
        this.$router.push('/teams')
      },
      savedChanges() {
        this.savedchanges = true
      }
    },
    beforeRouteLeave(to, from, next) {
      console.log(to, from)
      if(this.savedchanges){
        next()
      }else {
        const unsaved = confirm("Are you sure you want to leave with unsaved changes!!")
        next(unsaved)
      }

      
    }
  };
  </script>
  
  <style scoped>
  ul {
    list-style: none;
    margin: 2rem auto;
    max-width: 20rem;
    padding: 0;
  }
  </style>