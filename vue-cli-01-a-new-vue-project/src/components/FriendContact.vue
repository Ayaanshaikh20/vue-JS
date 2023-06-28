<template>
    <li>
        <h2>{{ name }} {{ favoriteVisible === 'visible' ? '(Favourite)' : ''}}</h2>   <!--now because of props we can directly use the prop item-->
        <button @click="toggleDetails()">{{ detailsVisible ? 'Hide' : 'Show'}} Details</button>
        <br>
        <br>
        <button @click="toggleFavorite()">{{ favoriteVisible === '1' ? 'Unset' : 'Set'}} Favorite</button>
        <ul v-if="detailsVisible">
            <li><strong>Phone:</strong> {{ Number(phoneNumber) + 1}}</li>
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
            type: String,
            required: true,
            default: 'notvisible',
            validator: function isFav(value) {
                return value === 'visible' || value === 'notvisible';
            }
        }

    },
    data() {
        return {
            detailsVisible: false,
            favoriteVisible: this.isFavorite
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
            if(this.favoriteVisible === 'visible'){
                this.favoriteVisible = 'notvisible';
            }
            else{
                this.favoriteVisible = 'visible';
            }
        }
    }
};
</script>