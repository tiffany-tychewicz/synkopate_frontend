<template>
  <div class="the_crate">
    <h1>THE CRATE</h1>
    <input v-model="searchFilter" type="text" list="titles" />
    <div v-for="upbeat in upbeats">
      <div>
        <h3>{{ upbeat.title }}</h3>
      </div>
      <div>
        <a class="waves-effect waves-white btn indigo accent-1" v-bind:href="upbeat.url" target="_blank">
          PLAY/ DOWNLOAD
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      upbeats: {}
    };
  },

  created: function() {
    axios.get("/api/upbeats?all=true").then(response => {
      this.upbeats = response.data.message;
      console.log(this.upbeats);
    });
  }
};
</script>
