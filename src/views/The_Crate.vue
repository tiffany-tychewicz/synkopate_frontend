<template>
  <div class="the_crate">
    <h1>THE CRATE</h1>
    <div v-for="upbeat in upbeats">
      <div>
        {{ upbeat.title }}
      </div>
      <div>
        <a class="waves-effect waves-white btn red" v-bind:href="upbeat.url" target="_blank">PLAY/ DOWNLOAD</a>
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
