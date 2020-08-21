<template>
  <div class="q-pa-md">
    <q-btn-dropdown color="primary" flat :label="type" no-caps>
      <q-list padding class="text-primary">
        <q-scroll-area
          :thumb-style="thumbStyle"
          :bar-style="barStyle"
          style="height: 100%; max-width: 300px;"
        >
          <q-item
            clickable
            v-close-popup
            @click="changeType(type)"
            v-for="(type, index) in typelist"
            :key="index"
          >
            <q-item-section>
              <q-item-label>{{ type }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-scroll-area>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script>
export default {
  name: "TypeList",
  data() {
    return {
      typelist: [
        "头条",
        "新闻",
        "国内",
        "国际",
        "政治",
        "财经",
        "体育",
        "娱乐",
        "军事",
        "教育",
        "科技",
        "NBA",
        "股票",
        "星座",
        "女性",
        "育儿",
        "健康",
        "自制"
      ],
      type: "头条"
    };
  },
  methods: {
    changeType: function(type) {
      this.type = type;
    }
  },
  computed: {
    thumbStyle() {
      return {
        right: "4px",
        borderRadius: "5px",
        backgroundColor: "#42b983",
        width: "5px",
        opacity: 0.75
      };
    },

    barStyle() {
      return {
        right: "2px",
        borderRadius: "9px",
        backgroundColor: "grey-2",
        width: "9px",
        opacity: 0.2
      };
    }
  }
};
</script>
