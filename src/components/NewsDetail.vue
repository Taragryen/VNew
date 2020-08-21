<template>
  <!-- <div class="q-pa-md q-gutter-sm">
    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card>

        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Close icon</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup @click="close"/>
        </q-card-section>

        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none" v-html="content"> </q-card-section>
      </q-card>
    </q-dialog>
  </div> -->
  <div>
    <q-dialog v-model="childDialog" full-height @hide="close">
      <q-card>
        <q-card-section>
          <span class="text-h6">官方推特分享反犹内容？FBI被“围攻”后回应</span>
          <span class="text-h7 q-pr-md absolute-bottom-right">环球娱乐</span>
        </q-card-section>

        <q-separator />

         <q-card-section style="max-height: 80vh" class="scroll" v-html="content">
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
    content: {
      type: String,
      required: true
    }
  },
   data() {
    return {
      childDialog: false,
      maximizedToggle: true,
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
  },
};
</script>

<style>
.art_img_tit {
  font-size: 0.8rem;
  line-height: 1.5rem;
}

.art_img_mini_img {
  max-width: 100%;
}
</style>
