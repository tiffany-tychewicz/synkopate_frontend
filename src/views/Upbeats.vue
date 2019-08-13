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
      client.picker().open();
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
