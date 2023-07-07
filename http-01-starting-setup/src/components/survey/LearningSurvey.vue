<template>
  <section>
    <base-card>
      <h2>How was you learning experience?</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model="enteredName" />   <!--tried using v-ref and its working-->
        </div>
        <h3>My learning experience was ...</h3>
        <div class="form-control">
          <input type="radio" id="rating-poor" value="poor" name="rating" v-model="chosenRating" />
          <label for="rating-poor">Poor</label>
        </div>
        <div class="form-control">
          <input type="radio" id="rating-average" value="average" name="rating" v-model="chosenRating"/>
          <label for="rating-average">Average</label>
        </div>
        <div class="form-control">
          <input type="radio" id="rating-great" value="great" name="rating" v-model="chosenRating" />
          <label for="rating-great">Great</label>
        </div>
        <p v-if="invalidInput">One or more input fields are invalid. Please check your provided data.</p>
        <p v-if="iserror">{{ iserror }}</p>
        <div>
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      enteredName: '',
      chosenRating: null,
      invalidInput: false,
      iserror: null
    };
  },
  emits: ['survey-submit'],
  methods: {
    submitSurvey() {
      if (this.enteredName === '' || !this.chosenRating) {
        console.log()
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;

      // this.$emit('survey-submit', this.enteredName, this.chosenRating);
      //using normal fetch
      
      
      // fetch('https://vue-http-request-a2b7a-default-rtdb.firebaseio.com/servey.json', {
      //   method: 'POST',
      //   headers: {'Content-type' : 'application/json'},
      //   body: JSON.stringify({name: this.enteredName,rating: this.chosenRating})
      // })

      //with Axios, you have to write less code. It automatically sets the Content-Type header for you, it also automatically converts the body data to JSON.
      this.iserror = null
      axios.post('https://vue-http-request-a2b7a-default-rtdb.firebaseio.com/servey.json',{name:this.enteredName, rating: this.chosenRating})
      .then((response) => {
        if(response.status == 200) {
          console.log('okay')
        }else{
          throw new Error('Data could not be saved')
        }
      }).catch((error) => {
        console.log(error)
      })

      this.enteredName = '';
      this.chosenRating = null;
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>