<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <div class="panel">
          <div class="panel-body">
            <table class="table table-hover table-striped">
              <thead>
                <tr>
                  <th width="70">№</th>
                  <th>User</th>
                  <th width="80">PID</th>
                  <!--<th width="70">Score</th>-->
                  <th width="140">Result</th>
                  <th width="70">Memory</th>
                  <th width="70">Time</th>
                  <!--<th width="110">Language</th>-->
                  <th width="70">Length</th>
                  <th width="90">Submit Time</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="submissions" v-for="submission in submissions">
                  <td>{{ submission.id }}</td>
                  <td>{{ submission.user }}</td>
                  <td>{{ submission.problems_id }}</td>
                  <td>{{ submission.result }}</td>
                  <td>{{ submission.memory }}</td>
                  <td>{{ submission.time }}</td>
                  <td>{{ submission.code_length }}</td>
                  <td>{{ submission.judgetime }}</td>
                  <!--<td>{{ submission.problems_id }}</td>
                  <td>{{ submission.problems_id }}</td>-->
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Submissions from '../api/submissions'
import Pagination from '../components/Pagination.vue'

export default {
  components: {
    Pagination
  },
  props: ['page'],
  data: function () {
    return {
      submissions: []
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
      Submissions.fetchPage(this.page)
        .then(({ data }) => {
          this.submissions = data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
