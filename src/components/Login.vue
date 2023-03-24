<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="signupFrm">
    
    <form action="" class="form" @submit.prevent="login">

      <h1 class="title">Login</h1>

      <div class="inputContainer">
        
        <input v-model="email" class="input" type="text" id="email" placeholder="a">
        <label class="label" for="#email">Email</label>
      </div>

      <div class="inputContainer">
        
        <input v-model="password" class="input" type="password" id="password" placeholder="a">
        <label class="label" for="#password">Password</label>
      </div>

      <div class="inputContainer">
        <input class="submitBtn" type="submit" value="Login">
      </div>

    </form>
  </div>
</template>
  
<script>
import auth from "@/logic/auth";
export default {
  data: () => ({
    email: "",
    password: "",
    error: false
  }),
  methods: {
    async login() {
      try {
        await auth.login(this.email, this.password);
        this.$router.push("/Menu");
      } catch (error) {
        this.error = true;
      }
    }
  }
};
</script>
  
