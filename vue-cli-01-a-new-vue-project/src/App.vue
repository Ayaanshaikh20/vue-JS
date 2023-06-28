<template>
    <header>
        <h1>FriendList</h1>
    </header>
    <section>
        <!-- <h2>My Friends</h2> -->
        <ul>
            <friend-contact 
                name="Ayaan Shaikh"
                phone-number= "9594548987"
                email-address="ayaanshaikh220301@gmail.com"
                is-favorite= "visible">
            </friend-contact>
            <friend-contact 
                name="Himanshu Khond"
                phone-number= "5345345345"
                email-address="Himanshu@gmail.com"
                is-favorite="notvisible">
            </friend-contact>
        </ul>
    </section>
    
</template>

<script>
import FriendContact from './components/FriendContact.vue'
export default {
  components: { FriendContact },
    data() {
        return {
            // friends: [
            //     {
            //         id: 'Ayaan',
            //         name: 'Ayaan Shaikh',
            //         phone: '9594548987',
            //         email: 'ayaanshaikh220301@gmail.com'
            //     },
            //     {
            //         id: 'Himanshu',
            //         name: 'Himanshu Khond',
            //         phone: '9535454334',
            //         email: 'himanshu.k@gmail.com'
            //     }
            // ]
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>