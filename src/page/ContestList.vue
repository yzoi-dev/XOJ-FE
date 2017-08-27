<template>
  <div class="container">
    <template v-if="contests.length > 1">
      Contests of page {{ page }}
      <ul>
        <li v-for="contest in pagination[page - 1]">
          <router-link :to="{ name: 'contest', params: { id: contest.id } }">{{ contest.title }}</router-link>
        </li>
      </ul>

      <Pagination :page="page" :pageCount="pageCount" routeName="contestList"></Pagination>
    </template>
    <span v-else>
      Loading...
    </span>
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
      pagination: [],
      pageCount: 0
    }
  },
  computed: {
    previousPage() {
      return this.page > 1 ? this.page - 1 : 1
    },
    nextPage() {
      return this.page < this.pageCount ? this.page + 1 : this.page
    }
  },
  watch: {
    page: function() {  }
  },
  created: function () {
    this.fetch().then(this.paginate)
  },
  methods: {
    paginate() {
      const ITEMS_PER_PAGE = 50
      this.pageCount = Math.ceil(this.contests.length / ITEMS_PER_PAGE);
      [...Array(this.pageCount).keys()].forEach(pn => {
        this.pagination.push(this.contests.slice(pn * ITEMS_PER_PAGE, (pn + 1) * ITEMS_PER_PAGE))
      })
    },
    fetch() {
      return Contests.fetchAll()
        .then(({ data }) => {
          this.contests = data
        })
        .catch(error => {
          console.log(error)
        })
      // return Contests.fetchPage(this.page)
      //   .then(({ data }) => {
      //     console.log(data)
      //     this.contests = data
      //   })
      //   .catch(error => {
      //     console.log(error)
      //   })
    }
  }
}
</script>
