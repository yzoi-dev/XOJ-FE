<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
        <form id="login-form" @submit.prevent="login" action="" method="post">
          <div class="card" data-background="color" data-color="blue">
            <div class="card-header">
              <h3 class="card-title">Login</h3>
            </div>
            <div class="card-content">
              <div class="form-group">
                <label>Username</label>
                <input v-model="loginFormData.username" type="text" placeholder="Username" class="form-control input-no-border">
              </div>
              <div class="form-group">
                <label>Password</label>
                <input v-model="loginFormData.password" type="password" placeholder="Password" class="form-control input-no-border">
              </div>
            </div>
            <div class="card-footer text-center">
              <button type="submit" class="btn btn-fill btn-wd">LOGIN</button>
              <div class="forgot">
                <a href="#pablo">Forgot your password?</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Auth from '../api/auth'

export default {
  data: function () {
    return {
      loginFormData: {
        username: '',
        password: '',
        remember: false
      }
    }
  },
  methods: {
    login: function () {
      Auth.login({
        name: this.loginFormData.username,
        password: this.loginFormData.password,
        remember: this.loginFormData.remember
      })
      .then(({ data }) => {
        if (data.error) {
          console.log(data.error)
        } else {
          $('#loginModal').modal('toggle')
          this.$emit('loggedin', data)
          this.$router.push('/')
        }
      })
      .catch(error => {
        console.log(error)
      })
    },
    logout() {
      this.loggedIn = false
    }
  }
}
</script>
