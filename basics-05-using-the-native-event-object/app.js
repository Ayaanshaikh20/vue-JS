const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  watch: {
    counter(value) {
      if(value>50){
        this.counter = 0
      }
    }
  },
  computed: {
    fullname() {
      if(this.name === ""){
        return '';
      }
      else{
        return this.name + ' ' + 'Shaikh';
      }
    },
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetName() {
      this.name = '';
    }
  }
});

app.mount('#events');
