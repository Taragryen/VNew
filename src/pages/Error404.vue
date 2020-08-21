<template>
  <div class="fullscreen bg-red text-white text-center q-pa-md flex flex-center err">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2 errorBackgroundColor" style="opacity:.4">
        Oops. Nothing here...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="red"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>

