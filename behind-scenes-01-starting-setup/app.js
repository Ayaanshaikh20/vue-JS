const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: '',
    };
  },
  methods: {
    setText() {
      this.message = this.$refs.userText.value;
      console.log(this.message)
    },
  },
});

app.mount('#app');
