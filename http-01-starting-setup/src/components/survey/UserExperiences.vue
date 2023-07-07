<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadresults">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isloading">Loading...</p>
      <p v-else-if="!isloading && iserror">{{ iserror }}</p>
      <p v-else-if="!isloading && (!originalresults || originalresults.length === 0)">There is no data items please add some value</p>
      <ul v-else>
        <survey-result v-for="result in originalresults" :key="result.id" :name="result.name" :rating="result.rating"></survey-result>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import axios from 'axios'
export default {

  components: {
    SurveyResult
  },
  data() {
    return {
      originalresults: [],
      isloading: false,
      iserror: null
    }
  },
  methods: {
    loadresults() { 
      this.isloading = true
      this.error = null
      axios.get('https://vue-http-request-a2b7a-default-rtdb.firebaseio.com/servey.json').then((response) => {                           
        if(response.status === 200){
          this.isloading = false
          const results = [];
          for(let id in response.data){
            results.push({id: id, name: response.data[id].name, rating: response.data[id].rating})
          }
        console.log('This is my array', results)
        this.originalresults = results
        }
      }).catch((error) => {
        console.log(error)
        this.isloading = false
        this.iserror = "Failed to fetch Data --- Please try again later"
      })
    } 
  },
  mounted() {
    this.loadresults()
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>