<template>
  <div class="container">
    Contest {{ id }}
    {{ contest.title }}
  </div>
</template>

<script>
import Contests from '../api/contests'

export default {
  props: ['id'],
  data: function () {
    return {
      contest: {},
      problems: {}
    }
  },
  created: function () {
    this.fetch(this.id)
  },
  methods: {
    fetch(id) {
      Contests.fetch(id)
      .then(({ data }) => {
        this.contest = data
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
