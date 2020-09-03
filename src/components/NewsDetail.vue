<template>
  <div style="display: none">
    <q-dialog
      v-model="childDialog"
      full-height
      @hide="close"
      transition-show="jump-up"
      transition-hide="jump-down"
      no-focus
    >
      <q-card>
        <q-card-section style="overflow:hidden">
          <span class="text-h6">{{title}}</span>
          <!-- <span class="text-h7 q-pr-md absolute-bottom-right">{{src}}</span> -->
        </q-card-section>

        <q-separator />

        <q-card-section
          style="max-height: 80vh;"
          class="scroll"
          v-html="content"
        >
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "NewsDetail",
  props: {
    dialog: {
      type: Boolean,
      required: true,
      default: false
    },
    title: {
      required: true,
      type: String
    },
    src: {
      required: true,
      type: String
    },
    content: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      childDialog: false,
      maximizedToggle: true
    };
  },
  methods: {
    close() {
      this.$emit("closeNewsDetail", false);
    }
  },
  watch: {
    dialog(newValue, oldValue) {
      this.childDialog = newValue;
    }
  }
};
</script>

<style>
.img_width {
  max-width: 100%;
}

.art_video_tit_solo {
  font-size: 1rem;
}

.art_img_tit {
  font-size: 0.8rem;
  line-height: 1.5rem;
}

.art_img_mini_img {
  max-width: 100%;
}

.art_p {
  line-height: 1.6rem;
  font-size: 1rem;
}

.card-title {
  transform: translate3d(0,0,0); 
  overflow: hidden;
  height: 60px
}

.photo {
  max-width: 100%;
}

img {
  max-width: 100%;
}
</style>
