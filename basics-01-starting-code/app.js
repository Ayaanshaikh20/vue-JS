const app = Vue.createApp({        //Initialize vue app
    data: function first() {    
        return {
            CourseGoalA: 'Finish the course and learn vue!!',
            CourseGoalB: 'Master the course and build apps',
            //You can put any name instead of message but the data
            // name cannot be changed
            vuelink: 'https://www.google.com' 
        } 
    },
    methods: {
        randomGenerator(){
            const randomNumber = Math.random()
            if (randomNumber > 0.5){
                return this.CourseGoalA;
            }else{
                return this.CourseGoalB;
            }
        }
    }     
})
app.mount('#user-goal');