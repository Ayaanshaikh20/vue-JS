Vue.createApp({
    data() {
        return {
            goals :[],
            enteredValue :''
        };
        
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue)
            this.enteredValue = ''
        }
    }
}).mount('#app')





// const inputBtn = document.querySelector('#goal')
// const goalBtn = document.querySelector('button')
// const ul = document.querySelector('ul');


// addgoal = () => {
//     const addli = document.createElement('li')
//     addli.textContent = inputBtn.value
//     ul.append(addli)
//     inputBtn.value = '';
// }

// goalBtn.addEventListener('click', addgoal);