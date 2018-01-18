<template>
  <div class="container-fluid">
  <Pagination :page="page" :pageCount="pageCount" routeName="problemList"></Pagination>
	<div class="row">
		<div class="col-md-12">
			<div class="card">
        <!--
				<div class="card-header">
					<h4 class="card-title">搜索：USACO</h4>
					<p class="category">共100题</p>
				</div>
        -->
				<div class="card-content table-responsive table-full-width">
					<table class="table table-striped">
						<thead>
              <tr>
    						<th>ID</th>
    						<th>Title</th>
    						<th>Source</th>
    						<th>Accepted</th>
    						<th>Submitted</th>
              </tr>
						</thead>
						<tbody>
  						<tr v-if="problems" v-for="problem in problems">
  							<td>{{ problem.id }}</td>
  							<td><router-link :to="'/problem/' + problem.id">{{ problem.title }}</router-link></td>
  							<td>{{ problem.sources }}</td>
  							<td>{{ problem.solved }}</td>
  							<td>{{ problem.submit }}</td>
  						</tr>
              <tr v-else>
                Loading...
              </tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
      </div>
  </div>
</template>

<script>
import Problems from '../api/problems'
import Pagination from '../components/Pagination.vue'

export default {
  components: {
    Pagination
  },
  props: ['page'],
  data: function () {
    return {
      problems: [],
      pageCount: 0
    }
  },
  watch: {
    page: function() { this.fetch() }
  },
  created: function () {
    this.fetch()
  },
  methods: {
    fetch() {
      Problems.fetchPageCount()
        .then (({ data }) => {
          this.pageCount = data.count
        })
      Problems.fetchPage(this.page)
        .then(({ data }) => {
          this.problems = data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
