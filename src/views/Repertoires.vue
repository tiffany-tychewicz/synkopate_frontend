<!-- <template>
  <div class="container">
    <h1>All Repertoires</h1>
    <div v-for="repertoire in repertoires">
      <h2>{{ repertoire.title }}</h2>
      <h3>{{ repertoire.genre }}</h3>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      repertoires: []
    };
  },
  created: function() {
    axios.get("/api/repertoires").then(response => {
      this.repertoires = response.data.message;
      console.log(this.repertoires);
    });
  },
  methods: {}
};
</script>
 -->
