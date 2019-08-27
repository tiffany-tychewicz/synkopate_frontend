<template>
  <div>
    <div class="container">
      <div class="upload-button">
        <a class="waves-effect waves-red btn-large black pulse" v-on:click="showFilePicker()">
          <i class="material-icons right">speaker</i>
          Upload
        </a>
      </div>
    </div>
    <div v-for="upbeat in upbeats">
      <div class="title">
        <h3>{{ upbeat.title }}</h3>
      </div>
      <div>
        <div>
          <a class="waves-effect waves-white btn red" v-bind:href="upbeat.url" target="_blank">PLAY/ DOWNLOAD</a>
        </div>
      </div>
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
    newTab: function() {
      window.open(this.url);
    },

    showFilePicker: function() {
      const client = filestack.init(process.env.VUE_APP_FILEPICKER);

      const options = {
        // onFileSelected: file => {
        //   // If you throw any error in this function it will reject the file selection.
        //   // The error message will be displayed to the user as an alert.
        //   if (file.size > 1000 * 1000) {
        //     throw new Error("File too big, select something smaller than 1MB");
        //   }
        // },
        onUploadDone: response => {
          console.log("onUploadDone", response);
          const url = response.filesUploaded[0].url;
          const title = response.filesUploaded[0].filename;
          console.log("the url from the response is", url);
          console.log("the title from the response is", title);

          // axios.post({
          //   url: "localhost:3000/api/upbeats",
          //   data: title,
          //   url
          // });

          var params = {
            title: title,
            url: url
          };

          axios
            .post("/api/upbeats", params)
            .then(response => {
              console.log("Success", response.data);
              this.$router.push("/");
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
