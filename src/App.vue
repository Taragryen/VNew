<template>
  <div id="q-app">
    <router-view />
    <!-- <q-ajax-bar position="bottom" size="5px" color="primary" /> -->
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex';

export default {
  data() {
    return {
      platform: this.$q.platform.is.desktop,
    }
  },
  //平台检测
  // mounted() {
  //   if (!this.$q.platform.is.desktop){
  //     this.$router.push("/limit");
  //   }
  // }
  watch: {
    "$q.dark.isActive"(val) {
      console.log(val ? "On dark mode" : "On light mode");
    },
    platform: function(val) {
      if(!val)
      {
        this.$router.push("/limit");
      }
    }
  },
  methods: {
    ...mapActions(["setNewsList"])
  },
  created() {
    this.setNewsList(this.$store.state.module.channel);
  }
};
</script>
