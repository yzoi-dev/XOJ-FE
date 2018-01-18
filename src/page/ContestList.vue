<template>
  <div class="container-fluid">
  <Pagination :page="page" :pageCount="pageCount" routeName="contestList"></Pagination>
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<div class="card-content table-responsive table-full-width">
					<table class="table table-striped">
						<thead>
              <tr>
    						<th>ID</th>
    						<th>Title</th>
    						<th>Status</th>
              </tr>
						</thead>
						<tbody>
  						<tr v-if="contests" v-for="contest in contests">
  							<td>{{ contest.id }}</td>
  							<td><router-link :to="'/contest/' + contest.id">{{ contest.title }}</router-link></td>
  							<td>{{ contest.status }}</td>
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
import Contests from '../api/contests'
import Pagination from '../components/Pagination.vue'

export default {
  components: {
    Pagination
  },
  props: ['page'],
  data: function () {
    return {
      contests: [],
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
      Contests.fetchPageCount()
        .then (({ data }) => {
          this.pageCount = data.count
        })
      Contests.fetchPage(this.page)
        .then(({ data }) => {
          this.contests = data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
