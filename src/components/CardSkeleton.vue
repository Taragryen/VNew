<template>
  <div class="q-pa-md">
    <q-card class="my-card">

      <q-skeleton height="200px" square />

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
        </q-item-section>
      </q-item>

      <q-card-actions align="right" class="q-gutter-md">
        <q-skeleton type="QBtn" />
        <q-skeleton type="QBtn" />
      </q-card-actions>
    </q-card>
    
  </div>
</template>

<script>
export default {
  name: "CardSkeleton"
};
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 280px;
}
</style>
