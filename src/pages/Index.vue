<template>
  <div class="q-pa-md row items-start q-gutter-lg justify-around">

    <news-card 
      v-for="(item, index) in NewsList"
      :key="index"
      v-bind="item"
    />

  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import NewsCard from "components/NewsCard.vue";

export default {
  name: "PageIndex",
  components: {
    NewsCard
  },
  data() {
    return {
      slide: "style"
    };
  },
  computed: {
    ...mapGetters({
      NewsList: 'getNewsList'
    })
  }
};
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}

.example-item {
  height: 56px;
}

.suspension-transition {
  transition: 0.75s;
}
</style>
