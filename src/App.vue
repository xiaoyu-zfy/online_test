<template>
  <div id="app">
    <home-page></home-page>
    <!-- <start-test></start-test> -->
    <!-- <personal-details></personal-details> -->
    <!-- <register></register> -->
    <router-view></router-view>   
  </div>
</template>

<script>
import Login from './components/Login'
import HomePage from './components/HomePage'
import PersonalDetails from './components/PersonalDetails'
import StartTest from './components/StartTest'
import Register from './components/Register'

export default {
  name: 'App',
  components: {
    Login,HomePage,Register
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
</style>
