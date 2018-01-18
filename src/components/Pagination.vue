<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-content text-center">
          <!--<ul class="pagination pagination-danger">
            <li><a href="#pdp"><i class="ti-angle-double-left" aria-hidden="true"></i></a></li>
            <li class="active"><a href="#pdp">1</a></li>
            <li><a href="#pdp">2</a></li>
            <li><a href="#pdp">3</a></li>
            <li><a href="#pdp">4</a></li>
            <li><a href="#pdp">5</a></li>
            <li><a href="#pdp">88</a></li>
            <li><a href="#pdp"><i class="ti-angle-double-right" aria-hidden="true"></i></a></li>
          </ul>-->

            <ul class="pagination pagination-danger">
              <li class="page-item" :class="{ disabled: page == 1 }">
                <router-link class="page-link" :to="{ name: routeName, params: { page: previousPage } }">
                  <span>&#10094;</span>
                </router-link>
              </li>
              <li v-for="i in pageCount" class="page-item">
                <router-link :to="{ name: routeName, params: { page: i } }" class="page-link">{{ i }}</router-link>
              </li>
              <li class="page-item" :class="{ disabled: page == pageCount }">
                <router-link class="page-link" :to="{ name: routeName, params: { page: nextPage } }">
                  <span>&#10095;</span>
                </router-link>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>

  <!--<div class="row">
<div class="col-sm-12">
<div class="text-center">

  <nav>
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: page == 1 }">
        <router-link class="page-link" :to="{ name: routeName, params: { page: previousPage } }">
          <span>&#10094;</span>
        </router-link>
      </li>
      <li v-for="i in pageCount" class="page-item">
        <router-link :to="{ name: routeName, params: { page: i } }" class="page-link">{{ i }}</router-link>
      </li>
      <li class="page-item" :class="{ disabled: page == pageCount }">
        <router-link class="page-link" :to="{ name: routeName, params: { page: nextPage } }">
          <span>&#10095;</span>
        </router-link>
      </li>
    </ul>
    </nav>
  </div>
</div>
</div>-->
</template>

<script>
export default {
  props: ['pageCount', 'page', 'routeName'],
  computed: {
    previousPage() {
      return this.page > 1 ? this.page - 1 : 1
    },
    nextPage() {
      return this.page < this.pageCount ? this.page + 1 : this.page
    }
  }
}
</script>
