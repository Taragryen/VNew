<template>
  <div class="q-pa-md">

    <news-card />

  </div>
</template>

<script>
// import CardSkeleton from "components/CardSkeleton.vue";
import NewsCard from "components/NewsCard.vue";

export default {
  name: "PageIndex",
  components: {
    NewsCard
  },
  data() {
    return {
      slide: "style",
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo."
    };
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
