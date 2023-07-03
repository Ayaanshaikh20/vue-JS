<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <!-- <course-goal>
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps['another--prop'] }}</p>
      </template>
    </course-goal> -->
    <button @click="setSelectedComponents('active-goals')">Active Goals</button>
    <button @click="setSelectedComponents('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponents === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponents === 'manage-goals'"></manage-goals> -->
    <keep-alive>
      <component :is="selectedComponents"></component>
    </keep-alive>
   
  </div>
</template>

<script>
import TheHeader from './components/STRUCTURE/TheHeader.vue';
import BadgeList from './components/Features/BadgeList.vue';
import UserInfo from './components/User_info/UserInfo.vue';
import ActiveGoals from './components/Features/ActiveGoals.vue';
import ManageGoals from './components/Features/ManageGoals.vue';
// import CourseGoal from './components/CourseGoal.vue';
export default {
  components: {'the-header': TheHeader, 'badge-list': BadgeList, 'user-info': UserInfo, 'active-goals': ActiveGoals, 'manage-goals': ManageGoals},
  data() {
    return {
      selectedComponents: '',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponents(cmp) {
      this.selectedComponents = cmp
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>