const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'Ayaan', 
                    name: 'Ayaan Shaikh', 
                    phone: '9594548987', 
                    email: 'Ayaanshaikh220301@gmail.com'
                },
                {
                    id: 'Himanshu', 
                    name: 'Himanshu khond', 
                    phone: '9949493433', 
                    email: 'himanshu@gmail.com'
                },
                {
                    id: 'Sumeet', 
                    name: 'Sumeet the hero', 
                    phone: '9930898810', 
                    email: 'sumeet@gmail.com'
                },

            ]
        }
    },
});

app.component('friends-detail', {
    template: 
        `<li>
          <h2> {{ friend.name }}</h2>
          <button @click="toggleDetails()">{{ detailsvisible ? 'Hide' : 'Show' }} Details</button>
          <ul v-if="detailsvisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>`,

    data() {
        return {
            detailsvisible: false,
            friend: {
                id: 'Ayaan', 
                name: 'Ayaan Shaikh', 
                phone: '9594548987', 
                email: 'Ayaanshaikh220301@gmail.com'
            }
        }
    },
    methods: {
        toggleDetails() {
            this.detailsvisible = !this.detailsvisible;
        }
    }
})

app.mount('#app');