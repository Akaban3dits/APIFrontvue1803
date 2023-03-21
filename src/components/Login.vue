<template>
    <div class="login">
      <h1 class="title">Login in the page</h1>
      <form action class="form" @submit.prevent="login">
        <label class="form-label" for="#email">Email:</label>
        <input
          v-model="email"
          class="form-input"
          type="email"
          id="email"
          required
          placeholder="Email"
        >
        <label class="form-label" for="#password">Password:</label>
        <input
          v-model="password"
          class="form-input"
          type="password"
          id="password"
          placeholder="Password"
        >
        <p v-if="error" class="error">Has introducido mal el email o la contraseña.</p>
        <input class="form-submit" type="submit" value="Login">
      </form>
      <p class="msg">¿No tienes cuenta?
        <router-link to="/register">Regístrate</router-link>
      </p>
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
          this.$router.push("/Dashboard");
        } catch (error) {
          this.error = true;
        }
      }
    }
  };
  </script>
  
