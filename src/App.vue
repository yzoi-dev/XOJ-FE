<template>

  <div id="app">
    <div class="wrapper">
		<div class="sidebar" data-background-color="brown" data-active-color="warning">
			<div class="logo">
				<a href="#" class="simple-text logo-mini">
					<i class="ti-microsoft"></i>
				</a>

				<a href="#" class="simple-text logo-normal">
					 XOJ - X Online Judge
				</a>
			</div>

			<div class="sidebar-wrapper">
				<div class="user" v-if="loggedIn">
          <div class="photo">
              <img src="assets/img/faces/face-2.jpg" />
          </div>
          <div class="info">
						<a data-toggle="collapse" href="#collapseExample" class="collapsed">
              <span>
								{{ user.name }}<b class="caret"></b>
							</span>
            </a>
						<div class="clearfix"></div>
            <div class="collapse" id="collapseExample">
              <ul class="nav">
                <li>
          				<a href="#profile">
          					<span class="sidebar-mini"><i class="ti-user"></i></span>
          					<span class="sidebar-normal">My Profile</span>
          				</a>
                </li>
                <li>
          				<a href="#edit">
          					<span class="sidebar-mini"><i class="ti-pencil-alt"></i></span>
          					<span class="sidebar-normal">Edit Profile</span>
          				</a>
          			</li>
                <li>
          				<a href="#settings">
          					<span class="sidebar-mini"><i class="ti-settings"></i></span>
          					<span class="sidebar-normal">Settings</span>
          				</a>
          			</li>
              </ul>
            </div>
          </div>
        </div>

        <ul class="nav">
					<li>
            <a href="#">
              <i class="ti-home"></i>
              <p>首页</p>
            </a>
          </li>
					<li>
            <a data-toggle="collapse" href="#dashboardOverview">
              <i class="ti-agenda"></i>
              <p>训练题库</p>
            </a>
          </li>
					<li class="active">
            <a data-toggle="collapse" href="#componentsExamples" aria-expanded="true">
              <i class="ti-package"></i>
              <p>题库分类
                <b class="caret"></b>
              </p>
            </a>

                      <div class="collapse in" id="componentsExamples">
							<ul class="nav">
	                            <li class="active">
									<a href="../components/buttons.html">
										<span class="sidebar-mini"><i class="ti-tag"></i></span>
										<span class="sidebar-normal">Buttons</span>
									</a>
								</li>
	                            <li>
									<a href="../components/grid.html">
										<span class="sidebar-mini"><i class="ti-location-pin"></i></span>
										<span class="sidebar-normal">Grid System</span>
									</a>
								</li>

	                        </ul>
	                    </div>
	                </li>
					<li>
						<a data-toggle="collapse" href="#dashboardOverview">
							<i class="ti-shield"></i>
							<p>测评结果</p>
						</a>
					</li>
					<li>
						<a data-toggle="collapse" href="#dashboardOverview">
							<i class="ti-crown"></i>
							<p>用户排名</p>
						</a>
					</li>
					<li>
						<a data-toggle="collapse" href="#dashboardOverview">
							<i class="ti-cup"></i>
							<p>作业/比赛</p>
						</a>
					</li>
					<li>
						<a data-toggle="collapse" href="#dashboardOverview">
							<i class="ti-key"></i>
							<p>讨论/帮助</p>
						</a>
					</li>
					<li>
						<a data-toggle="collapse" href="#dashboardOverview">
							<i class="ti-cloud"></i>
							<p>学习资源</p>
						</a>
					</li>
          </ul>
	    	</div>
	    </div>

	    <div class="main-panel">
			<nav class="navbar navbar-default">
	            <div class="container-fluid">
					<div class="navbar-minimize">
						<button id="minimizeSidebar" class="btn btn-fill btn-icon"><i class="ti-more-alt"></i></button>
					</div>
	                <div class="navbar-header">
	                    <button type="button" class="navbar-toggle">
	                        <span class="sr-only">Toggle navigation</span>
	                        <span class="icon-bar bar1"></span>
	                        <span class="icon-bar bar2"></span>
	                        <span class="icon-bar bar3"></span>
	                    </button>
	                    <a class="navbar-brand" href="#typography">{{ routeTitle() }}</a>
	                </div>
	                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">
                      <li>
                          <form class="navbar-form navbar-left" style="width:120px;">
                              <div class="input-group">
                                  <span class="input-group-addon"><i class="ti-rocket"></i></span>
                                  <input type="text" value="" class="form-control" placeholder="PID">
                              </div>
                          </form>
                      </li>
                      <li>
                          <form class="navbar-form navbar-left navbar-search-form" role="search">
                              <div class="input-group">
                                  <span class="input-group-addon"><i class="ti-search"></i></span>
                                  <input type="text" value="" class="form-control" placeholder="Search...">
                              </div>
                              <select id="s" name="s" class="form-control search-query">
                                  <option value="tl">标题</option>
                                  <option value="ct">内容</option>
                                  <option value="sr">来源</option>
                                  <option value="sr">来源</option>
                                  <option value="sr">来源</option>
                              </select>
                          </form>
                      </li>
                      <template v-if="loggedIn">
                        <li class="dropdown">
                          <a href="#notifications" class="dropdown-toggle btn-rotate" data-toggle="dropdown">
                            <i class="ti-bell"></i>
                            <span class="notification">5</span>
                            <p class="hidden-md hidden-lg">
                              Notifications
                              <b class="caret"></b>
                            </p>
                          </a>
                            <ul class="dropdown-menu">
                              <li><a href="#not1">Notification 1</a></li>
                              <li><a href="#not2">Notification 2</a></li>
                              <li><a href="#not3">Notification 3</a></li>
                              <li><a href="#not4">Notification 4</a></li>
                              <li><a href="#another">Another notification</a></li>
                            </ul>
                        </li>
                        <li>
                          <a href="#settings" class="btn-rotate">
                            <i class="ti-settings"></i>
                            <p class="hidden-md hidden-lg">
                              Settings
                            </p>
                          </a>
                        </li>
                      </template>
                      <template v-else>
                        <li><router-link to="/login">登录</router-link>
                        <li><a href="#">注册</a></li>
                      </template>
                    </ul>
	                </div>
	            </div>
	        </nav>

	        <div class="content">
            <router-view @loggedin="onLoggedIn"></router-view>
        	</div>
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
      user: {}
    }
  },
  computed: {
    volume: function () {
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
    onLoggedIn: function (user) {
      this.loggedIn = true
      this.user = user
    },
    routeTitle: function () {
      switch (this.$route.name) {
        case 'login':
          return '登录'
        default:
          return '首页'
      }
    }
  }
}
</script>

<style>

</style>
