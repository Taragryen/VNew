<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated reveal class="bg-white" split no-wrap>
      <q-toolbar>

        <q-toolbar-title class="text-primary">
          VNews
          <q-badge transparent align="middle" color="primary">
            v1.0.0
          </q-badge>
        </q-toolbar-title>

        <type-list />

        <div>
          <q-toggle
            v-model="DarkMode"
            checked-icon="check"
            color="primary"
            label="Dark Mode"
            unchecked-icon="clear"
            class="text-primary"
          />
        </div>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />

      <q-page-scroller
        position="bottom-right"
        :scroll-offset="150"
        :offset="[18, 18]"
        :duration="10"
      >
        <q-btn fab icon="keyboard_arrow_up" color="primary"/>
      </q-page-scroller>
    </q-page-container>

    <!-- <div v-html="content"></div> -->
    <q-space />

  </q-layout>
</template>

<script>
import TypeList from 'components/TypeList.vue'

export default {
  name: "MainLayout",
  data() {
    return {
      DarkMode: false,
    };
  },
  components: { TypeList },
  methods: {
    toPageTop: function() {}
  },
  watch: {
    DarkMode: function(val) {
      this.$q.dark.toggle();
    }
  }
};
</script>

