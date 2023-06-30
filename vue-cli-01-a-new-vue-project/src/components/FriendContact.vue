<template>
    <li>
        <h2>{{ name }} {{ isFavorite ? '(Favourite)' : ''}}</h2>   <!--now because of props we can directly use the prop item-->
        <button @click="toggleDetails()">{{ detailsVisible ? 'Hide' : 'Show'}} Details</button>
        <br>
        <br>
        <button @click="toggleFavorite()">{{ isFavorite ? 'Unset' : 'Set'}} Favorite</button>
        <br>
        <br>
        <button @click="delete1()">Delete</button>
        <ul v-if="detailsVisible">
            <li><strong>Phone:</strong> {{ phoneNumber }}</li>
            <li><strong>Email:</strong> {{ emailAddress }}</li>
        </ul>
    </li>
</template>


<script>
export default {
    // props: [
    //     'name',
    //     'phoneNumber',
    //      'emailAddress',
    //     'isFavorite'
    //  ],
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true
        },
        isFavorite: {
            type: Boolean,
            required: false,
            // default: false
        //     validator: function isFav(value) {
        //         return value === 'visible' || value === 'notvisible';
        //     }
        },

    },

    emits: ['friend-favourite', 'delete-contact'],        //this will tell which property we are emiting in the entire code which is at line 73

    data() {
        return {
            detailsVisible: false,
            // favoriteVisible: this.isFavorite
            // emailaddressVisible: this.emailAddress
            
            // friend: {
            //     id: 'Ayaan',
            //     name: 'Ayaan Shaikh',
            //     phone: '9594548987',
            //     email: 'ayaanshaikh220301@gmail.com'
            // }
        }
    },
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible
        },
        toggleFavorite() {
            this.$emit('friend-favourite', this.id)
            // if(this.favoriteVisible === 'visible'){
            //     this.favoriteVisible = 'notvisible';
            // }
            // else{
            //     this.favoriteVisible = 'visible';
            // }
        },
        delete1() {
            this.$emit('delete-contact', this.id)
        }
    }
};
</script>