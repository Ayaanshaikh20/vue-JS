const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      enteredgoalname: '',
      person: {name: "ayaan", age: 22} 
    };
  },
  methods: {
    addGoals() {
      console.log('Ayaan')
      this.goals.push(this.enteredgoalname);
      this.enteredgoalname = '';
    },
    removeGoals(indx) {
      this.goals.splice(indx, 1)
    }
  }
});

app.mount('#user-goals');
