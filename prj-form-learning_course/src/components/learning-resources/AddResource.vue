<template>
  <base-dialogue v-if="isinvalid" title="Invalid Input">
    <template #default>
      <p>At least one input value is invalid</p>
    </template>
    <template #actions>
      <base-button @click="confirmError()">okay</base-button>
    </template>
  </base-dialogue>
  <base-card>
    <form @submit.prevent="submitMethod">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="titleInput"/>
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea id="description" name="description" rows="3" ref="descriptionInput"></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="linkInput"/>
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>


<script>
import BaseButton from '../UI/BaseButton.vue';
export default {
  components: { BaseButton },
  inject: ['addresource'],
  data() {
    return {
      isinvalid: false
    }
  },
  methods: {
    submitMethod() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descriptionInput.value;
      const enteredlink = this.$refs.linkInput.value;
      
      if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredlink.trim() === ''){
        this.isinvalid = true
        return
      }

      this.addresource(enteredTitle, enteredDescription, enteredlink)
    },
    confirmError() {
      this.isinvalid = false
    }
  }
}
</script>


<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>