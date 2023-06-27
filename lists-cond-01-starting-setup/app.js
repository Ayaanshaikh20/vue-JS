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
      this.goals.push(this.enteredgoalname); //this will push the typed goals into the array goals
      this.enteredgoalname = '';             //this sets enteredgoalname input text back to empty
    },
    removeGoals(indx) {
      this.goals.splice(indx, 1)             //splice would delete the selected goal from the goals array
    }
  }
});

app.mount('#user-goals');
