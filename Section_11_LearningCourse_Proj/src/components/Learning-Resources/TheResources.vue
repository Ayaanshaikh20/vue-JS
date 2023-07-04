<template>
        <button @click="setSelectedTab('stored-resources')">Stored Resources</button>
        <button @click="setSelectedTab('add-resources')">Add Resources</button>
    <component :is="selectedTab"></component>
</template>


<script>
import Storedresources from './StoredResources.vue'
import AddResources from './AddResources.vue';
export default {
    components: {'stored-resources': Storedresources, 'add-resources': AddResources},
    data() {
        return {
            selectedTab: 'stored-resources',
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The official vue.js documentation',
                    link: 'https://vuejs.org'  
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'The Google home page',
                    link: 'https://google.com'  
                }
            ]
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        }
    },
    provide() {
        return {
            resources: this.storedResources
        }
    }


}
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
div{
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 2rem auto;
    max-width: 40rem;
}

li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>