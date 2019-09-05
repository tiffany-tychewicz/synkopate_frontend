<!-- Upbeats now referred to as "Uploads" -->

<template>
  <div id="app">
    <nav class="background indigo accent-1">
      <div class="nav-wrapper">
        <a class="brand-logo right" style="padding-right: 70px">
          Valefor
        </a>
        <a>
          <img src="https://i.imgur.com/gNRaf7C.png" class="brand-logo right" style="padding-right: 5px" />
        </a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><a href="/home">Home</a></li>
          <li><a href="/login" v-if="!jwt">Login</a></li>
          <li><a href="/logout" v-if="jwt">Logout</a></li>
          <li><a href="/signup" v-if="!jwt">Signup</a></li>
          <li><a href="/upbeats" v-if="jwt">Uploads</a></li>
          <li><a href="/the_crate" v-if="jwt">THE CRATE</a></li>
          <li><a href="/player" v-if="jwt">Player</a></li>
        </ul>
      </div>
    </nav>
    <router-view v-on:changeJwt="setJwt()" />

    <footer v-if="$route.name !== 'Player'" class="page-footer indigo accent-1">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Thank you for choosing Valefor.</h5>
            <p class="grey-text text-lighten-4">
              This is a student project built purely for academic purposes. Any assumption stating otherwise is
              decidedly false.
            </p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Menu</h5>
            <ul>
              <li><a class="grey-text text-lighten-3" href="home">Home</a></li>
              <li><a class="grey-text text-lighten-3" href="upbeats" v-if="jwt">Upload</a></li>
              <li><a class="grey-text text-lighten-3" href="the_crate" v-if="jwt">THE CRATE</a></li>
              <li><a class="grey-text text-lighten-3" href="player" v-if="jwt">Player</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2019 Tiffany Tychewicz
        </div>
      </div>
    </footer>
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
.ml11 {
  font-weight: 700;
  font-size: 3.5em;
}

.ml11 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
}

.ml11 .line {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 100%;
  width: 3px;
  background-color: #fff;
  transform-origin: 0 50%;
}

.ml11 .line1 {
  top: 0;
  left: 0;
}

.ml11 .letter {
  display: inline-block;
  line-height: 1em;
}
.the_crate {
  padding-bottom: 40px;
}

#app {
  font-family: "Red Hat Text", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
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
