<template>
  <div id="app">
    <nav class="navbar navbar-default navbar-top">
      <div class="container">

        <div class="collapse navbar-collapse" id="yzoi-navbar">
          <ul class="nav navbar-nav">
            <li :class="{ active: $route.path == '/' }">
              <router-link to="/">Home</router-link>
            </li>
            <li :class="{ active: $route.name == 'problemList' || $route.name == 'problem' }">
              <router-link :to="`/problems/${volume}`" class="nav-link active">Problems</router-link>
            </li>
            <li :class="{ active: $route.name == 'contestList' || $route.name == 'contest' }">
              <router-link to="/contests/1">Contests</router-link>
            </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>
          </ul>

          <form class="navbar-form navbar-left">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
          </form>

          <ul class="nav navbar-nav navbar-right">
            <li v-if="loggedIn" class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                {{ user.name }}
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li><a @click="logout" href="#">Logout</a></li>
              </ul>
            </li>
            <template v-else>
              <li><a href="#" data-toggle="modal" data-target="#loginModal">Login</a></li>
              <li><a href="#">Register</a></li>
            </template>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
    </div>

    <router-view></router-view>

    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <form id="login-form" @submit.prevent="login" action="" method="post">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">Sign in</h4>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <input v-model="loginFormData.username" type="text" class="form-control" id="login-username" placeholder="Username">
              </div>
              <div class="form-group">
                <input v-model="loginFormData.password" type="password" class="form-control" id="login-password" placeholder="Password">
              </div>
              <label class="checkbox-inline">
                <input v-model="loginFormData.remember" type="checkbox" id="remember" name="remember">Remember Me
              </label>
            </div>
            <div class="modal-footer">
              <input type="submit" class="btn btn-primary" value="Login">
              <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Auth from './api/auth'

export default {
  name: 'app',
  data: function () {
    return {
      loggedIn: false,
      loginFormData: {
        username: '',
        password: '',
        remember: false
      },
      user: {}
    }
  },
  computed: {
    volume: function() {
      return this.loggedIn ? this.user.volume : 1
    }
  },
  watch: {
    // loggedIn: function () {
    //   if (this.loggedIn) {
    //
    //   } else {
    //
    //   }
    // }
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
          this.loggedIn = true
          this.user = data
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

<style>

</style>
