const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmName: ''
    };
  },
  methods: {
    signUp() {
      alert('Successfully submmited');
    },
    confirmedName() {
      this.confirmName = this.name;
    },
    setName(event1, lastName) {
      this.name = event1.target.value + ' ' + lastName
    },
    add(num) {
      this.counter = this.counter + num;
    },
    minus(num) {
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');
