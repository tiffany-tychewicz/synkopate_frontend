<template>
  <div class="container">
    <h1>Upload an Upbeat</h1>
    <button v-on:click="showFilePicker()">Upload</button>
    <h1>All Upbeats</h1>
    <div v-for="upbeat in upbeats">
      <h2>{{ upbeat.title }}</h2>
      <h3>{{ upbeat.artist }}</h3>
      <h3>{{ upbeat.album }}</h3>
      <p>{{ upbeat.genre }}</p>
      <p>{{ upbeat.duration }}</p>
      <p>{{ upbeat.repertoire_id }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      upbeats: []
    };
  },
  created: function() {
    axios.get("/api/upbeats").then(response => {
      this.upbeats = response.data.message;
      console.log(this.upbeats);
    });
  },

  methods: {
    showFilePicker: function() {
      const client = filestack.init(process.env.VUE_APP_FILEPICKER);
      client.picker().open();
    }
  }
};
</script>
