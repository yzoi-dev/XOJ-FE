<template>
  <div class="container-fluid">
		<div class="row">
			<div class="col-md-12">
				<div class="card">
					<div class="card-header">
						<div class="container-fluid">
							<h3 class="card-title text-warning">{{ id }}: {{ problem.title }}</h3>
							<div class="category container-fluid">
								<div class="pull-left">
									<abbr title="Time Limit"><i class="ti-time"></i> {{ problem.time_limit }}sec</abbr> &nbsp;
									<abbr title="Memory Limit"><i class="ti-save-alt"></i> {{ problem.memory_limit }}MB</abbr> &nbsp;
									<abbr title="Solved"><i class="ti-check"></i> {{ problem.solved }}</abbr> &nbsp;
									<abbr title="Submissions"><i class="ti-pencil"></i> {{ problem.submit }}</abbr> &nbsp;
									<!--
                  TODO: badge
                  <span v-if="{{ problem.solved }}" class="tag label label-success"><i class="ti-check"></i> Accept</span>
                  -->
								</div>
								<div class="pull-right margin-bottom">
									<div class="btn-group">
										<a class="btn btn-warning btn-fill btn-move-left" href="#submitModal" data-toggle="modal"><i class="ti-cloud-up"></i> Submit Code</a>
									</div>
									<div class="btn-group">
										<a class="btn btn-success" href="/yzoix/problems/statistic/1105"><i class="ti-pie-chart"></i> Summary</a>
										<a class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
											<span class="caret"></span>
										</a>
										<ul class="dropdown-menu">
											<li><a href="/yzoix/problems/statistic/1105"><i class="fa fa-fw fa-bar-chart"></i> Statistic</a></li>
											<li><a href="/yzoix/status?pid=1105"><i class="fa fa-fw fa-legal"></i> Status</a></li>
											<li><a href="/yzoix/status?pid=1105&amp;uname=xaero"><i class="fa fa-fw fa-user"></i> My Submission</a></li>
										</ul>
									</div>
									<div class="btn-group">
										<a class="btn btn-info" href="#"><i class="ti-comments"></i> Discuss</a>
										<a class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
											<span class="caret"></span>
										</a>
										<ul class="dropdown-menu">
											<li><a href="/yzoix/topics/list?pid=1105"><i class="fa fa-fw fa-comments"></i> Discuss</a></li>
											<li><a href="/yzoix/topics/list/solution?pid=1105"><i class="fa fa-fw fa-paste"></i> Solution</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    <div class="row">
      <div class="col-lg-8 col-md-7">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title"><i class="ti-info-alt"></i> Problem Description</h4>
          </div>
          <div class="card-content">
              {{ problem.description }}
          </div>
        </div>
				<div class="card">
					<div class="card-header">
						<h4 class="card-title"><i class="ti-layers"></i> Input / Output Sample</h4>
					</div>
					<div class="card-content">
            <pre class="alert alert-info">{{ problem.sample_input }}
            </pre>
            <pre class="alert alert-info">{{ problem.sample_output }}
            </pre>
					</div>
				</div>
							<div class="card">
								<div class="card-header">
									<h4 class="card-title"><i class="ti-light-bulb"></i> Hint</h4>
								</div>
								<div class="card-content">
                  <pre>{{ problem.hint }}
                  </pre>
								</div>
							</div>
	                    </div>
						<div class="col-lg-4 col-md-5">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title"><i class="ti-world"></i> Source</h4>
								</div>
								<div class="card-content">
									<div class="nav-tabs-navigation">
										<div class="nav-tabs-wrapper">
											<ul id="tabs" class="nav nav-tabs" data-tabs="tabs">
												<li class="active"><a href="#home" data-toggle="tab">Source</a></li>
												<li><a href="#profile" data-toggle="tab">Tags</a></li>
											</ul>
										</div>
									</div>
									<div id="my-tab-content" class="tab-content text-center">
										<div class="tab-pane active" id="home">
											<p>YZOI</p>
										</div>
										<div class="tab-pane" id="profile">
											<p>Here is your profile.</p>
										</div>
									</div>
								</div>
							</div>
							<div class="card">
								<div class="card-header">
									<h4 class="card-title"><i class="ti-cup"></i> Best Solutions</h4>
								</div>
								<div class="card-content">
									<ul class="list-unstyled team-members">
										<li>
											<div class="row">
												<div class="col-xs-3">
													<div class="avatar avatar48">
														<img src="assets/img/faces/face-0.jpg" alt="Circle Image" class="img-circle img-no-padding img-responsive">
													</div>
												</div>
												<div class="col-xs-7">
													DJ Khaled
													<br>
													<span class="text-muted"><small>Offline</small></span>
												</div>
												<div class="col-xs-2 text-right rank">
													<span class="badge">1</span>
												</div>
											</div>
										</li>
										<li>
											<div class="row">
												<div class="col-xs-3">
													<div class="avatar avatar48">
														<img src="assets/img/faces/face-1.jpg" alt="Circle Image" class="img-circle img-no-padding img-responsive">
													</div>
												</div>
												<div class="col-xs-7">
													Creative Tim
													<br>
													<span class="text-success"><small>Available</small></span>
												</div>
												<div class="col-xs-2 text-right rank">
													<span class="badge">2</span>
												</div>
											</div>
										</li>
										<li>
											<div class="row">
												<div class="col-xs-3">
													<div class="avatar avatar48">
														<img src="assets/img/faces/face-3.jpg" alt="Circle Image" class="img-circle img-no-padding img-responsive">
													</div>
												</div>
												<div class="col-xs-7">
													Flume
													<br>
													<span class="text-danger"><small>Busy</small></span>
												</div>
												<div class="col-xs-2 text-right rank">
													<span class="badge">3</span>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
	                </div>
  </div>
</template>

<script>
import Problems from '../api/problems'

export default {
  props: ['id'],
  data: function () {
    return {
      problem: {}
    }
  },
  created: function () {
    this.fetch(this.id)
  },
  methods: {
    fetch(id) {
      Problems.fetch(id)
      .then(({ data }) => {
        this.problem = data
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
