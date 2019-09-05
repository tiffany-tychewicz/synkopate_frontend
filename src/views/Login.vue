<template>
  <div class="login">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1 style="color: white">Login</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="input-field">
          <i class="material-icons prefix">email</i>
          <input type="email" class="form-control" v-model="email" />
          <label for="icon_prefix">E-mail</label>
        </div>
        <div class="input-field">
          <i class="material-icons prefix">https</i>
          <input type="password" class="form-control" v-model="password" />
          <label for="icon_password">Password</label>
        </div>

        <input type="submit" class="white-text btn indigo accent-1" value="Login" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$emit("changeJwt");
          this.$router.push("/home");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>

<style>
.login {
  padding-bottom: 100px;
}
i.material-icons {
  color: #ffffff !important;
}
.input-field {
  margin-left: 250px;
  margin-right: 250px;
}

/* label color */
.input-field label {
  color: #ffffff;
}
/* label focus color */
.input-field input[type="text"]:focus + label {
  color: #ffffff;
}
/* label underline focus color */
.input-field input[type="text"]:focus {
  border-bottom: 1px solid #ffffff !important;
  box-shadow: 0 1px 0 0 #ffffff !important;
}
/* valid color */
.input-field input[type="text"].valid {
  border-bottom: 1px solid #0c8;
  box-shadow: 0 1px 0 0 #000;
}
/* invalid color */
.input-field input[type="text"].invalid {
  border-bottom: 1px solid #f08;
  box-shadow: 0 1px 0 0 #000;
}

/* icon prefix focus color */
.input-field .prefix.active {
  color: #8c9eff;
}

.active + input {
  border-bottom: 1px solid #8c9eff !important;
}

label.active {
  color: #8c9eff !important;
}
</style>
