<template>
  <div class="the_crate">
    <div class="upload-button">
      <a class="waves-effect waves-red btn-large indigo accent-1 pulse" v-on:click="showFilePicker()">
        <i class="material-icons right">speaker</i>
        Upload
      </a>
    </div>
    <h1>THE CRATE</h1>
    <input v-model="searchFilter" type="text" list="titles" />
    <datalist id="titles">
      <option v-for="upbeat in upbeats">{{ upbeat.title }}</option>
    </datalist>
    <div v-for="upbeat in filterBy(upbeats, searchFilter, 'title')">
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
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      upbeats: {},
      searchFilter: "",
      sortAttribute: "title"
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
