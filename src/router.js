import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Upbeats from "./views/Upbeats.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import The_Crate from "./views/The_Crate.vue";
import Player from "./views/Player.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/upbeats",
      name: "upbeats",
      component: Upbeats
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    ,
    {
      path: "/logout",
      name: "logout",
      component: Logout
    },
    {
      path: "/the_crate",
      name: "The Crate",
      component: The_Crate
    },
    {
      path: "/player",
      name: "Player",
      component: Player
    }
  ]
});
