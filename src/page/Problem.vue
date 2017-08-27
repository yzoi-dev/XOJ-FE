<template>
  <div>
    Problem {{ id }}
    {{ problem.description }}
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
