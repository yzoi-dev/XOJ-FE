<template>
  <div>
  <nav class="navbar navbar-transparent navbar-absolute">
          <div class="container">
              <div class="navbar-header">
                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                  </button>
                  <a class="navbar-brand" href="../dashboard/overview.html">XOJ - X Online Judge</a>
              </div>
              <div class="collapse navbar-collapse">
                  <ul class="nav navbar-nav navbar-right">
                      <li>
                         <a href="register.html">
                              Register
                          </a>
                      </li>
  					<li>
                         <a href="../dashboard/overview.html">
                              Problems
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>

      <div class="wrapper wrapper-full-page">
          <div class="full-page login-page" data-color="blue" data-image="assets/img/signin-bg-1.jpg">
          <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
              <div class="content">
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
              </div>

          	<footer class="footer footer-transparent">
                  <div class="container">
                      <div class="copyright pull-right">
                          &copy; 2017 Hanggao Olympiad in Informatics - Online Judge System.
                      </div>
                  </div>
              </footer>
          </div>
      </div>
    </div>
      <!--
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
  </div>-->
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
  mounted: function () {
    $().ready(function(){
        $page = $('.full-page');
        image_src = $page.data('image');

        if(image_src !== undefined){
            image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }

        setTimeout(function(){
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)
    });
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
