<template>
  <div>
    Problems of page {{ page }}
    <ul>
      <li v-if="problems" v-for="problem in problems">
        {{ problem.id }}
        <router-link :to="'/problem/' + problem.id">{{ problem.title }}</router-link>
      </li>
      <span v-else>
        Loading...
      </span>
    </ul>
  </div>
</template>

<script>
import Problems from '../api/problems'

export default {
  props: ['page'],
  data: function () {
    return {
      problems: []
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
      return Problems.fetchPage(this.page)
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
