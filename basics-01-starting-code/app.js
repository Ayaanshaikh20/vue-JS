const app = Vue.createApp({         //Initialize vue app
    data: function first() {    
        return {
            message: 'Finish the course and learn vue!!',
            //You can put any name instead of message but the data
            // name cannot be changed
            vuelink: 'https://www.google.com' 
        } 
    }     
})

app.mount('#user-goal')