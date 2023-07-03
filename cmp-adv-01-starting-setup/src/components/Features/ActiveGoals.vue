<template>
    <h2>Active Goals</h2>
    <input type="text" ref="userText">
    <button @click="setGoal()">Set Goal</button>
    <teleport to="body">
    <error-alert v-if="inputIsInvalid">
        <h2>Input is ivalid</h2>
        <p>Please enter atleast few characters...</p>
        <button @click="confirmError()">Okay</button>
    </error-alert>
    </teleport>
    <p>{{ enteredgoal }}</p>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue'
export default {
    components: {'error-alert': ErrorAlert},
    data() {
        return {
            enteredgoal: '',
            inputIsInvalid: false
        }
    },
    methods: {
        setGoal() {
            this.enteredgoal = this.$refs.userText.value
            if(this.enteredgoal !== ''){
                return this.enteredgoal
            }else {
                this.inputIsInvalid = true
            }
        },
        confirmError() {
            this.inputIsInvalid = false
        }
    }
}
</script>