<template>
  <div>
    <q-btn-dropdown color="primary" flat :label="currentChannel" no-caps>
      <q-list padding class="text-primary">
        <q-scroll-area
          :thumb-style="thumbStyle"
          :bar-style="barStyle"
          style="height: 290px; max-width: 300px;"
        >
          <q-item
            clickable
            v-close-popup
            @click="changeChannel(channel)"
            v-for="(channel, index) in channelList"
            :key="index"
          >
            <q-item-section class="full-width">
              <q-item-label>{{ channel }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-scroll-area>
      </q-list>
    </q-btn-dropdown>
    <q-tooltip anchor="bottom middle" self="top middle" content-class="bg-primary" content-style="font-size: 13px;">channel</q-tooltip>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"

export default {
  name: "TypeList",
  data() {
    return {
      channelList: [
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
      ]
    };
  },
  methods: {
    changeChannel: function(channel) {
      this.setChannel(channel);
    },
    ...mapActions(['setNewsList', 'setChannel', 'setIsLoading'])
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
    },

    ...mapGetters({
      currentChannel: 'getChannel'
    })
  },
  watch: {
    currentChannel: function(val) {
      this.setIsLoading(true);
      this.setChannel(val);
      this.setNewsList(val);
    }
  },
};
</script>
