<template>
  <div>
    <h1>Sign-in page</h1>
    <form @submit="onSubmit">
      <div class="container">
        <label>Username : </label>
        <input
          type="text"
          placeholder="Enter Username"
          v-model="username"
          name="username"
        />
        <br /><br />

        <label>Password : </label>
        <input
          type="password"
          placeholder="Enter Password"
          v-model="password"
          name="password"
        />
        <br /><br />

        <Button type="submit" class="btn btn-primary" text="Sign In"></Button>

        <router-link to="/"><Button type="button" class="btn btn-danger" text="Cancel"></Button></router-link>

        <router-link to="/login"
          ><Button type="button" class="btn btn-primary" text="Login"></Button
        ></router-link>
      </div>
    </form>
  </div>
</template>

<script>
import Button from "./button.vue";

export default {
  name: "SignIn",
  components: {
    Button,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();

      if (!this.username || !this.password) {
        alert("Please enter user details");
        return;
      }

      const newUser = {
        name: this.username,
        password: this.password,
      };

      const response = await this.$store.dispatch("createUser", newUser);

      if (response.status) alert(response.message);

      if (!response.isUserExists){
        this.$router.push('/login')
      }

      this.username = "";
      this.password = "";
    },
  },
};
</script>

<style>
</style>
