<template>
        <the-resource></the-resource>
        <ul>
            <base-card v-for="res in resources" 
            :key="res.id" 
            :resource-title="res.title" 
            :resource-description="res.description"
            :resource-link="res.link"></base-card>
        </ul>
</template>

<script>
import TheResource from './TheResources.vue'
import BaseCard from '../UI/BaseCard.vue'
export default {
    components: {'base-card': BaseCard, 'the-resource': TheResource},
    inject: ['resources']
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>