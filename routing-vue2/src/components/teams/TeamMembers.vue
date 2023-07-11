<template>
    <section>
      <h2>{{ teamName }}</h2>
      <ul>
        <user-item
          v-for="member in members"
          :key="member.id"
          :name="member.fullName"
          :role="member.role"
        ></user-item>
      </ul> 
      <button @click="comeback()">Back</button>
      <router-link to="/teams/t2">Go to team 2</router-link>
    </section>
  </template>
  
  <script>
  import UserItem from '../users/UserItem.vue';
  
  export default {
    inject: ['users', 'teams'],
    props: ['teamId'],
    components: {
      UserItem
    },
    data() {
      return {
        // teamName: 'Test',
        // members: [
        //   { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
        //   { id: 'u2', fullName: 'Max Schwarz', role: 'Engineer' },
        // ],
        teamName: '',
        members: []
      };
    },
    methods: {
      comeback() {
        this.$router.push('/teams')
      },
      loadteams(teamId) {
        const selectedTeams = this.teams.find(team => team.id === teamId)
        const Members = selectedTeams.members
        console.log(Members)
        const selectedMembers = []
      for(let member in Members) {
        const selecteduser = this.users.find(user => user.id === Members[member])
        selectedMembers.push(selecteduser)
      }
      this.members = selectedMembers
      this.teamName = selectedTeams.name
      }
    },


    created() {
      this.loadteams(this.teamId)
    },
    BeforeRouteUpdate(to, next) {
        console.log(to)
        this.loadteams(to.params.teamId)
        console.log(to.params)
        next()
      },
    // watch: {
    //   teamId(newId) {
    //     this.loadteams(newId)
    //   },
    // }
  };
  </script>
  
  <style scoped>
  section {
    margin: 2rem auto;
    max-width: 40rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    border-radius: 12px;
  }
  
  h2 {
    margin: 0.5rem 0;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  button {
    font: inherit;
    background: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    color: white;
    padding: 0.5rem 1.5rem;
    display: inline-block;
    background-color: purple;
  }

  /* button:hover,
  button:active,
  button.active{
    color: #f1a80a;
    border-color: #f1a80a;
    background-color: #1a037e;
  } */
  </style>