<template>
  <div>
    <q-intersection transition="scale" class="fixed-hw">
      <q-card
        class="my-card suspension-transition col-xs-12 col-sm-6 col-md-3"
        @click="openNewsDetail(title, src, content)"
      >
        <q-img
          class="test"
          :src="pic"
          spinner-color="primary"
          spinner-size="70px"
          style="height: 180px; object-fit: cover"
        >
          <div class="absolute-full text-subtitle1 text-left show">
            <p>{{ src }}</p>
            <p>{{ time }}</p>
          </div>
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
            {{ title }}
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
    >
    </NewsDetail>
  </div>
</template>

<script>
import NewsDetail from "components/NewsDetail.vue";
import { mapGetters } from "vuex";

export default {
  name: "NewsCard",
  components: {
    NewsDetail
  },
  data() {
    return {
      dialog: false
    };
  },
  props: {
    title: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    pic: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    }
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

.my-card:hover .test .show {
  transition: all 0.65s;
  display: block;
}

.show {
  transition: all 0.65s;
  display: none;
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
