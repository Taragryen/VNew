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

        <q-btn icon="search" color="primary" round flat>
          <q-popup-edit v-model="quest">
            <q-input
              v-model="quest"
              dense
              autofocus
              counter
              placeholder="search"
            />
          </q-popup-edit>
          <q-tooltip anchor="bottom middle" self="top middle" content-class="bg-primary" content-style="font-size: 13px;">search</q-tooltip>
        </q-btn>

        <type-list />

        <div>
          <q-toggle
            v-model="DarkMode"
            checked-icon="check"
            color="primary"
            unchecked-icon="clear"
            class="text-primary"
          >
            <q-icon name="fas fa-moon" />
            <q-tooltip anchor="bottom middle" self="top middle" content-class="bg-primary" content-style="font-size: 13px;">Dark Mode</q-tooltip>
          </q-toggle>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <CardSkeleton v-if="isLoading"/>
      <router-view v-else/>

      <q-page-scroller
        position="bottom-right"
        :scroll-offset="150"
        :offset="[18, 18]"
        :duration="10"
      >
        <q-btn fab icon="keyboard_arrow_up" color="primary" />
      </q-page-scroller>
    </q-page-container>

    <q-space />

  </q-layout>
</template>

<script>
import TypeList from "components/TypeList.vue";
import CardSkeleton from "components/CardSkeleton.vue"
import {mapGetters, mapActions} from "vuex";

export default {
  name: "MainLayout",
  data() {
    return {
      DarkMode: false,
      quest: ""
    };
  },
  components: {
    TypeList,
    CardSkeleton
  },
  methods: {
    toPageTop: function() {},
    ...mapActions(["setIsLoading"])
  },
  watch: {
    DarkMode: function(val) {
      this.$q.dark.toggle();
    }
  },
  computed: {
    ...mapGetters({
      isLoading: 'getIsLoading'
    })
  },
};
</script>
