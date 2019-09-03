<template>
  <div>
    <div class="container">
      <div class="upload-button">
        <a class="waves-effect waves-red btn-large indigo accent-1 pulse" v-on:click="showFilePicker()">
          <i class="material-icons right">speaker</i>
          Upload
        </a>
      </div>
    </div>
    <input v-model="searchFilter" type="text" list="titles" />
    <datalist id="titles">
      <option v-for="upbeat in upbeats">{{ upbeat.title }}</option>
    </datalist>
    <div v-for="upbeat in filterBy(upbeats, searchFilter, 'title')">
      <div class="title">
        <h3>{{ upbeat.title }}</h3>
      </div>
      <div>
        <div>
          <a class="waves-effect waves-white btn indigo accent-1" v-bind:href="upbeat.url" target="_blank">
            PLAY/ DOWNLOAD
          </a>
        </div>
      </div>
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
      upbeats: [],
      searchFilter: "",
      sortAttribute: "title"
    };
  },
  created: function() {
    axios.get("/api/upbeats").then(response => {
      this.upbeats = response.data.message;
      console.log(this.upbeats);
    });
  },

  methods: {
    newTab: function() {
      window.open(this.url);
    },

    showFilePicker: function() {
      const client = filestack.init(process.env.VUE_APP_FILEPICKER);

      const options = {
        onUploadDone: response => {
          console.log("onUploadDone", response);
          const url = response.filesUploaded[0].url;
          const title = response.filesUploaded[0].filename;
          console.log("the url from the response is", url);
          console.log("the title from the response is", title);

          var params = {
            title: title,
            url: url
          };

          axios
            .post("/api/upbeats", params)
            .then(response => {
              console.log("Success", response.data);
              this.$router.push("/upbeats");
              location.reload(true);
            })
            .catch(error => console.log(error.response));
        }
      };

      client.picker(options).open();
    }
  }
};
</script>

<style>
h3 {
  margin: 10px;
}
.upload-button {
  margin-top: 100px;
  margin-bottom: 100px;
}

.button {
  margin: 25px;
  padding-top: 0px;
}
</style>
