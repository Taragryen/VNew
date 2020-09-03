<template>
  <div class="q-pa-md row items-start q-gutter-lg justify-around">
    <q-intersection
      v-for="index in 8"
      :key="index" 
      class="fixed-hw"
    >
      <q-card class="my-card suspension-transition col-xs-12 col-sm-6 col-md-3">
        <q-skeleton height="180px" square />

        <q-item>
          <q-item-section>
            <q-item-label caption>
              <q-skeleton type="text" />
            </q-item-label>
            <q-item-label caption>
              <q-skeleton type="text" />
            </q-item-label>
            <q-item-label caption>
              <q-skeleton type="text" />
            </q-item-label>
            <q-item-label caption>
              <q-skeleton type="text" />
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-card-actions>
          <div class="col" align="center">
            <q-btn flat round color="grey-4" icon="favorite" />
          </div>
          <div class="col" align="center">
            <q-btn flat round color="grey-4" icon="bookmark" />
          </div>
          <div class="col" align="center">
            <q-btn flat round color="grey-4" icon="share" />
          </div>
        </q-card-actions>
      </q-card>
    </q-intersection>
  </div>
</template>

<script>
export default {
  name: "CardSkeleton"
};
</script>

<style scoped>
.my-card {
  /* width: 100%; */
  width: 280px;
  max-height: 360px;
}

.fixed-hw {
  width: 280px;
  height: 360px;
}

.suspension-transition {
  transition: all 0.65s;
}
</style>
