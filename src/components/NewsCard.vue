<template>
  <div class="q-pa-md row items-start q-gutter-lg justify-around">
    <q-intersection
      v-for="(item, index) in NewsList"
      :key="index"
      transition="scale"
      class="fixed-hw"
    >
      <q-card
        class="my-card suspension-transition col-xs-12 col-sm-6 col-md-3"
        @click="openNewsDetail(item.title, item.src, item.content)"
      >
        <q-img
          :src="item.pic"
          spinner-color="primary"
          spinner-size="70px"
          style="height: 180px; object-fit: cover"
        >
          <template v-slot:error>
            <div
              class="absolute-full flex flex-center bg-white text-black"
              style="font-size:16px"
            >
              Cannot load image
            </div>
          </template>
        </q-img>

        <q-card-section>
          <div class="text-h6 card-title">
            {{ item.title }}
          </div>
        </q-card-section>

        <q-card-actions>
          <div class="col" align="center">
            <q-btn flat round color="red" icon="favorite" />
          </div>
          <div class="col" align="center">
            <q-btn flat round color="teal" icon="bookmark" />
          </div>
          <div class="col" align="center">
            <q-btn flat round color="primary" icon="share" />
          </div>
        </q-card-actions>
      </q-card>
    </q-intersection>
    <NewsDetail
      :dialog.sync="dialog"
      :content="content"
      :title="title"
      :src="src"
      v-on:closeNewsDetail="closeNewsDetail"
    ></NewsDetail>
  </div>
</template>

<script>
import NewsDetail from "components/NewsDetail.vue";
import {mapGetters} from "vuex"

export default {
  name: "NewsCard",
  components: {
    NewsDetail
  },
  data() {
    return {
      dialog: false,
      content: "",
      src: "",
      title: ""
    };
  },
  methods: {
    openNewsDetail(title, src, content) {
      this.dialog = true;
      this.content = content;
      this.title = title;
      this.src = src;
    },
    closeNewsDetail(val) {
      this.dialog = val;
    }
  },
  computed: {
    ...mapGetters({
      NewsList: 'getNewsList'
    })
  }
};
</script>

<style scoped>
.suspension-transition {
  transition: all 0.65s;
}

.suspension-transition:hover {
  cursor: pointer;
  transform: perspective(1px) scale(1.03);
  transition: all 0.4s;
}

.my-card {
  /* width: 100%; */
  width: 280px;
}

.fixed-hw {
  width: 280px;
  height: 360px;
}
</style>
