<template>
  <div>
    <h1>E-Commerce Site</h1>
    <router-link to="/login"
      ><Button type="button" class="btn btn-primary" color="green" text="Login"></Button
    ></router-link>
    <router-link to="/sign-in"
      ><Button type="button" class="btn btn-primary" color="blue" text="Sign In"></Button
    ></router-link>
  </div>
</template>

<script>
import Button from "./button.vue";

export default {
  components: {
    Button,
  },
};
</script>
