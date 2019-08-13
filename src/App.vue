<template>
  <div id="app">
    <nav class="background black">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo right">Logo</a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><a href="/home">Home</a></li>
          <li><a href="/login" v-if="!jwt">Login</a></li>
          <li><a href="/logout" v-if="jwt">Logout</a></li>
          <li><a href="/signup" v-if="!jwt">Signup</a></li>
          <li><a href="/repertoires" v-if="jwt">Repertoires</a></li>
          <li><a href="/upbeats" v-if="jwt">Upbeats</a></li>
        </ul>
      </div>
    </nav>
    <router-view v-on:changeJwt="setJwt()" />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      jwt: null
    };
  },
  created: function() {
    this.setJwt();
  },
  methods: {
    setJwt: function() {
      this.jwt = localStorage.getItem("jwt");
    }
  }
};
</script>

<style>
#app {
  font-family: "Orbitron", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
