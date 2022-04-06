<template>
  <div id="app">
    <router-view ></router-view>
  </div>
</template>

<script>
import Login from './components/login.vue';
import SignIn from './components/sign-in.vue';
import Dashboard from './components/dashboard.vue';

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    Login,
    SignIn,
    Dashboard
  }
}
</script>

<style>

</style>
