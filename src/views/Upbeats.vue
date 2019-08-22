<template>
  <div class="container">
    <div class="button">
      <a class="waves-effect waves-red btn-large black pulse" v-on:click="showFilePicker()">
        <i class="material-icons right">speaker</i>
        Upload
      </a>
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
.button {
  margin: 50px;
}

.button:hover {
}
</style>
