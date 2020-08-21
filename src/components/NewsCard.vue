<template>
  <div class="q-pa-md row items-start q-gutter-lg justify-around">
    <q-intersection
      v-for="(item, index) in NewsList"
      :key="index"
      transition="scale"
      class="fixed-hw"
    >
      <q-card class="my-card suspension-transition col-xs-12 col-sm-6 col-md-3" @click="openNewsDetail(item.content)">
        <q-img
          :src="item.imgUrl"
          spinner-color="primary"
          spinner-size="70px"
          style="height:180px"
        >
          <template v-slot:error>
            <div class="absolute-full flex flex-center bg-negative text-white">
              Cannot load image
            </div>
          </template>
        </q-img>

        <q-card-section>
          <div class="text-h6" style="transform: translate3d(0,0,0)">
            {{ item.title }}
          </div>
          <div class="text-subtitle2" style="transform: translate3d(0,0,0)">
            {{ item.time }}
          </div>
        </q-card-section>

        <q-card-actions>
          <div class="col" align="center">
            <q-btn flat round color="red" icon="favorite" />
          </div>
          <div class="col" align="center">
            <q-btn flat round color="teal" icon="bookmark" />
          </div>
          <div class="col" align="center">
            <q-btn flat round color="primary" icon="share" />
          </div>
        </q-card-actions>
      </q-card>
    </q-intersection>
      <NewsDetail :dialog.sync="dialog" :content="content" v-on:closeNewsDetail="closeNewsDetail"></NewsDetail>
  </div>
</template>

<script>
import NewsDetail from "components/NewsDetail.vue";

export default {
  name: "NewsCard",
  components: {
    NewsDetail
  },
  data() {
    return {
      dialog: false,
      content: "",
      NewsList: [
        {
          imgUrl: "https://p0.ssl.img.360kuai.com/t014ae073c85824271b.jpg",
          title: "cba十冠王广东队的历届冠军争夺史！",
          time: "2020-08-17 11:11:24",
          content: "<p class=\"art_p\">原标题：官方推特分享反犹内容？FBI被“围攻”后回应：系统自动发布的</p>\n<p class=\"art_p\" cms-style=\"font-L\">[环球网报道 记者 张晓雅]官方推特分享反犹文件遭网友“围攻”，FBI给出这么一番解释……</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/594/w423h171/20200820/20b6-iyaiihk3144282.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">综合“今日俄罗斯”（RT）及英国《卫报》报道，当地时间19日，FBI信息管理部（FBI InformationManagement Division）官方推特发布的一条推文引起网友注意——这条有关《锡安长老议定书》（Protocolsof the Elders of Zion）的推文只列出文件标题和一个PDF链接，并没有其他附加内容。然而多家外媒指出，这是一本有上百年历史、措辞恶毒的反犹太小册子。↓</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/707/w453h254/20200820/7d34-iyaiihk3144281.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">RT介绍称，《锡安长老议定书》是1903年出版的反犹太小册子，旨在描述“犹太人征服世界的规划”，其内容还获得过纳粹德国元首希特勒等反犹太人物的称赞。有资料显示，它还被视为当今几乎所有阴谋论的“鼻祖”。</p>\n<p class=\"art_p\" cms-style=\"font-L\">推文发出后引发不少愤怒和批评声。有网友认为，这条推特显然是FBI对反犹内容的认可。</p>\n<p class=\"art_p\" cms-style=\"font-L\">反犹主义研究员大卫·科利尔（David Collier）指责FBI：“绝对是疯了。FBI在没有任何提示的情况下分享这本议定书。看起来他们像是在推广它。通常他们（的推文）会被一些人转发。这条推文在网上疯传。太不负责任了。”↓</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/605/w399h206/20200820/6703-iyaiihk3144502.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">自由经济学家戴维·罗斯柴尔德（David Rothschild）则调侃称：“FBI的推特账户被Q黑了？”文中的“Q”指的正是“匿名者Q”（QAnon）——美国右翼群体中存在的阴谋论。</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider20200820/621/w483h138/20200820/379b-iyaiihk3146100.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">还有人愤怒表示：“为什么FBI发布反犹太宣传册！？太危险且太不像话了。”</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/618/w518h100/20200820/f0a2-iyaiihk3145142.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">甚至有人严厉指责道：“FBI一再揭露他们自己是右翼仇恨组织。”</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/648/w564h84/20200820/4e0f-iyaiihk3145141.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">《卫报》称，推文发布几小时后， FBI一名发言人作出声明称，这条推特系通过“自动程序”发布。</p>\n<p class=\"art_p\" cms-style=\"font-L\">声明还对“自动程序”解释说，根据《信息自由法》，FBI将3个或3个以上请求者所申请的记录发布在位于FBI网站的电子信息自由阅览室“Vault”上，以供公众查阅。根据《信息自由法》程序，有关材料可供发布且系自动发布。而 FBI信息管理部推特会自动将Vault网站上的消息发推。</p>\n<p class=\"art_p\" cms-style=\"font-L\">“令我们感到遗憾的是，这次发布可能无意中在我们服务的社区里造成困扰。”FBI称。</p>\n<p class=\"art_p\" cms-style=\"font-L\">截至目前，该推文仍未删除。↓</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/531/w385h146/20200820/0997-iyaiihk3145257.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">这不是FBI信息管理部官方推特第一次引发舆论愤怒。2016年美国总统大选前夕，该账号发布有关故事很传奇且又备受争议的大宗商品交易商——马克•里奇的信息，以及关于总统候选人特朗普父亲的材料，引发一些活动人士投诉。</p>"
        },
        {
          imgUrl: "https://p0.ssl.img.360kuai.com/t014ae073c85824271b.jpg",
          title: "cba十冠王广东队的历届冠军争夺史！",
          time: "2020-08-17 11:11:24",
          content: "<p class=\"art_p\">原标题1：官方推特分享反犹内容？FBI被“围攻”后回应：系统自动发布的</p>\n<p class=\"art_p\" cms-style=\"font-L\">[环球网报道 记者 张晓雅]官方推特分享反犹文件遭网友“围攻”，FBI给出这么一番解释……</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/594/w423h171/20200820/20b6-iyaiihk3144282.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">综合“今日俄罗斯”（RT）及英国《卫报》报道，当地时间19日，FBI信息管理部（FBI InformationManagement Division）官方推特发布的一条推文引起网友注意——这条有关《锡安长老议定书》（Protocolsof the Elders of Zion）的推文只列出文件标题和一个PDF链接，并没有其他附加内容。然而多家外媒指出，这是一本有上百年历史、措辞恶毒的反犹太小册子。↓</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/707/w453h254/20200820/7d34-iyaiihk3144281.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">RT介绍称，《锡安长老议定书》是1903年出版的反犹太小册子，旨在描述“犹太人征服世界的规划”，其内容还获得过纳粹德国元首希特勒等反犹太人物的称赞。有资料显示，它还被视为当今几乎所有阴谋论的“鼻祖”。</p>\n<p class=\"art_p\" cms-style=\"font-L\">推文发出后引发不少愤怒和批评声。有网友认为，这条推特显然是FBI对反犹内容的认可。</p>\n<p class=\"art_p\" cms-style=\"font-L\">反犹主义研究员大卫·科利尔（David Collier）指责FBI：“绝对是疯了。FBI在没有任何提示的情况下分享这本议定书。看起来他们像是在推广它。通常他们（的推文）会被一些人转发。这条推文在网上疯传。太不负责任了。”↓</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/605/w399h206/20200820/6703-iyaiihk3144502.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">自由经济学家戴维·罗斯柴尔德（David Rothschild）则调侃称：“FBI的推特账户被Q黑了？”文中的“Q”指的正是“匿名者Q”（QAnon）——美国右翼群体中存在的阴谋论。</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider20200820/621/w483h138/20200820/379b-iyaiihk3146100.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">还有人愤怒表示：“为什么FBI发布反犹太宣传册！？太危险且太不像话了。”</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/618/w518h100/20200820/f0a2-iyaiihk3145142.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">甚至有人严厉指责道：“FBI一再揭露他们自己是右翼仇恨组织。”</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/648/w564h84/20200820/4e0f-iyaiihk3145141.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">《卫报》称，推文发布几小时后， FBI一名发言人作出声明称，这条推特系通过“自动程序”发布。</p>\n<p class=\"art_p\" cms-style=\"font-L\">声明还对“自动程序”解释说，根据《信息自由法》，FBI将3个或3个以上请求者所申请的记录发布在位于FBI网站的电子信息自由阅览室“Vault”上，以供公众查阅。根据《信息自由法》程序，有关材料可供发布且系自动发布。而 FBI信息管理部推特会自动将Vault网站上的消息发推。</p>\n<p class=\"art_p\" cms-style=\"font-L\">“令我们感到遗憾的是，这次发布可能无意中在我们服务的社区里造成困扰。”FBI称。</p>\n<p class=\"art_p\" cms-style=\"font-L\">截至目前，该推文仍未删除。↓</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/531/w385h146/20200820/0997-iyaiihk3145257.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">这不是FBI信息管理部官方推特第一次引发舆论愤怒。2016年美国总统大选前夕，该账号发布有关故事很传奇且又备受争议的大宗商品交易商——马克•里奇的信息，以及关于总统候选人特朗普父亲的材料，引发一些活动人士投诉。</p>"
        },
        {
          imgUrl: "https://p0.ssl.img.360kuai.com/t014ae073c85824271b.jpg",
          title: "cba十冠王广东队的历届冠军争夺史！",
          time: "2020-08-17 11:11:24",
          content: "<p class=\"art_p\">原标题2：官方推特分享反犹内容？FBI被“围攻”后回应：系统自动发布的</p>\n<p class=\"art_p\" cms-style=\"font-L\">[环球网报道 记者 张晓雅]官方推特分享反犹文件遭网友“围攻”，FBI给出这么一番解释……</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/594/w423h171/20200820/20b6-iyaiihk3144282.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">综合“今日俄罗斯”（RT）及英国《卫报》报道，当地时间19日，FBI信息管理部（FBI InformationManagement Division）官方推特发布的一条推文引起网友注意——这条有关《锡安长老议定书》（Protocolsof the Elders of Zion）的推文只列出文件标题和一个PDF链接，并没有其他附加内容。然而多家外媒指出，这是一本有上百年历史、措辞恶毒的反犹太小册子。↓</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/707/w453h254/20200820/7d34-iyaiihk3144281.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">RT介绍称，《锡安长老议定书》是1903年出版的反犹太小册子，旨在描述“犹太人征服世界的规划”，其内容还获得过纳粹德国元首希特勒等反犹太人物的称赞。有资料显示，它还被视为当今几乎所有阴谋论的“鼻祖”。</p>\n<p class=\"art_p\" cms-style=\"font-L\">推文发出后引发不少愤怒和批评声。有网友认为，这条推特显然是FBI对反犹内容的认可。</p>\n<p class=\"art_p\" cms-style=\"font-L\">反犹主义研究员大卫·科利尔（David Collier）指责FBI：“绝对是疯了。FBI在没有任何提示的情况下分享这本议定书。看起来他们像是在推广它。通常他们（的推文）会被一些人转发。这条推文在网上疯传。太不负责任了。”↓</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/605/w399h206/20200820/6703-iyaiihk3144502.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">自由经济学家戴维·罗斯柴尔德（David Rothschild）则调侃称：“FBI的推特账户被Q黑了？”文中的“Q”指的正是“匿名者Q”（QAnon）——美国右翼群体中存在的阴谋论。</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider20200820/621/w483h138/20200820/379b-iyaiihk3146100.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">还有人愤怒表示：“为什么FBI发布反犹太宣传册！？太危险且太不像话了。”</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/618/w518h100/20200820/f0a2-iyaiihk3145142.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">甚至有人严厉指责道：“FBI一再揭露他们自己是右翼仇恨组织。”</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/648/w564h84/20200820/4e0f-iyaiihk3145141.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">《卫报》称，推文发布几小时后， FBI一名发言人作出声明称，这条推特系通过“自动程序”发布。</p>\n<p class=\"art_p\" cms-style=\"font-L\">声明还对“自动程序”解释说，根据《信息自由法》，FBI将3个或3个以上请求者所申请的记录发布在位于FBI网站的电子信息自由阅览室“Vault”上，以供公众查阅。根据《信息自由法》程序，有关材料可供发布且系自动发布。而 FBI信息管理部推特会自动将Vault网站上的消息发推。</p>\n<p class=\"art_p\" cms-style=\"font-L\">“令我们感到遗憾的是，这次发布可能无意中在我们服务的社区里造成困扰。”FBI称。</p>\n<p class=\"art_p\" cms-style=\"font-L\">截至目前，该推文仍未删除。↓</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/531/w385h146/20200820/0997-iyaiihk3145257.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">这不是FBI信息管理部官方推特第一次引发舆论愤怒。2016年美国总统大选前夕，该账号发布有关故事很传奇且又备受争议的大宗商品交易商——马克•里奇的信息，以及关于总统候选人特朗普父亲的材料，引发一些活动人士投诉。</p>"
        },
        {
          imgUrl: "https://p0.ssl.img.360kuai.com/t014ae073c85824271b.jpg",
          title: "cba十冠王广东队的历届冠军争夺史！",
          time: "2020-08-17 11:11:24",
          content: "<p class=\"art_p\">原标题3：官方推特分享反犹内容？FBI被“围攻”后回应：系统自动发布的</p>\n<p class=\"art_p\" cms-style=\"font-L\">[环球网报道 记者 张晓雅]官方推特分享反犹文件遭网友“围攻”，FBI给出这么一番解释……</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/594/w423h171/20200820/20b6-iyaiihk3144282.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">综合“今日俄罗斯”（RT）及英国《卫报》报道，当地时间19日，FBI信息管理部（FBI InformationManagement Division）官方推特发布的一条推文引起网友注意——这条有关《锡安长老议定书》（Protocolsof the Elders of Zion）的推文只列出文件标题和一个PDF链接，并没有其他附加内容。然而多家外媒指出，这是一本有上百年历史、措辞恶毒的反犹太小册子。↓</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/707/w453h254/20200820/7d34-iyaiihk3144281.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">RT介绍称，《锡安长老议定书》是1903年出版的反犹太小册子，旨在描述“犹太人征服世界的规划”，其内容还获得过纳粹德国元首希特勒等反犹太人物的称赞。有资料显示，它还被视为当今几乎所有阴谋论的“鼻祖”。</p>\n<p class=\"art_p\" cms-style=\"font-L\">推文发出后引发不少愤怒和批评声。有网友认为，这条推特显然是FBI对反犹内容的认可。</p>\n<p class=\"art_p\" cms-style=\"font-L\">反犹主义研究员大卫·科利尔（David Collier）指责FBI：“绝对是疯了。FBI在没有任何提示的情况下分享这本议定书。看起来他们像是在推广它。通常他们（的推文）会被一些人转发。这条推文在网上疯传。太不负责任了。”↓</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/605/w399h206/20200820/6703-iyaiihk3144502.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">自由经济学家戴维·罗斯柴尔德（David Rothschild）则调侃称：“FBI的推特账户被Q黑了？”文中的“Q”指的正是“匿名者Q”（QAnon）——美国右翼群体中存在的阴谋论。</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider20200820/621/w483h138/20200820/379b-iyaiihk3146100.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">还有人愤怒表示：“为什么FBI发布反犹太宣传册！？太危险且太不像话了。”</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/618/w518h100/20200820/f0a2-iyaiihk3145142.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">甚至有人严厉指责道：“FBI一再揭露他们自己是右翼仇恨组织。”</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/648/w564h84/20200820/4e0f-iyaiihk3145141.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">《卫报》称，推文发布几小时后， FBI一名发言人作出声明称，这条推特系通过“自动程序”发布。</p>\n<p class=\"art_p\" cms-style=\"font-L\">声明还对“自动程序”解释说，根据《信息自由法》，FBI将3个或3个以上请求者所申请的记录发布在位于FBI网站的电子信息自由阅览室“Vault”上，以供公众查阅。根据《信息自由法》程序，有关材料可供发布且系自动发布。而 FBI信息管理部推特会自动将Vault网站上的消息发推。</p>\n<p class=\"art_p\" cms-style=\"font-L\">“令我们感到遗憾的是，这次发布可能无意中在我们服务的社区里造成困扰。”FBI称。</p>\n<p class=\"art_p\" cms-style=\"font-L\">截至目前，该推文仍未删除。↓</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/531/w385h146/20200820/0997-iyaiihk3145257.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">这不是FBI信息管理部官方推特第一次引发舆论愤怒。2016年美国总统大选前夕，该账号发布有关故事很传奇且又备受争议的大宗商品交易商——马克•里奇的信息，以及关于总统候选人特朗普父亲的材料，引发一些活动人士投诉。</p>"
        },
        {
          imgUrl: "https://p0.ssl.img.360kuai.com/t014ae073c85824271b.jpg",
          title: "cba十冠王广东队的历届冠军争夺史！",
          time: "2020-08-17 11:11:24",
          content: "<p class=\"art_p\">原标题4：官方推特分享反犹内容？FBI被“围攻”后回应：系统自动发布的</p>\n<p class=\"art_p\" cms-style=\"font-L\">[环球网报道 记者 张晓雅]官方推特分享反犹文件遭网友“围攻”，FBI给出这么一番解释……</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/594/w423h171/20200820/20b6-iyaiihk3144282.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">综合“今日俄罗斯”（RT）及英国《卫报》报道，当地时间19日，FBI信息管理部（FBI InformationManagement Division）官方推特发布的一条推文引起网友注意——这条有关《锡安长老议定书》（Protocolsof the Elders of Zion）的推文只列出文件标题和一个PDF链接，并没有其他附加内容。然而多家外媒指出，这是一本有上百年历史、措辞恶毒的反犹太小册子。↓</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/707/w453h254/20200820/7d34-iyaiihk3144281.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">RT介绍称，《锡安长老议定书》是1903年出版的反犹太小册子，旨在描述“犹太人征服世界的规划”，其内容还获得过纳粹德国元首希特勒等反犹太人物的称赞。有资料显示，它还被视为当今几乎所有阴谋论的“鼻祖”。</p>\n<p class=\"art_p\" cms-style=\"font-L\">推文发出后引发不少愤怒和批评声。有网友认为，这条推特显然是FBI对反犹内容的认可。</p>\n<p class=\"art_p\" cms-style=\"font-L\">反犹主义研究员大卫·科利尔（David Collier）指责FBI：“绝对是疯了。FBI在没有任何提示的情况下分享这本议定书。看起来他们像是在推广它。通常他们（的推文）会被一些人转发。这条推文在网上疯传。太不负责任了。”↓</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/605/w399h206/20200820/6703-iyaiihk3144502.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">自由经济学家戴维·罗斯柴尔德（David Rothschild）则调侃称：“FBI的推特账户被Q黑了？”文中的“Q”指的正是“匿名者Q”（QAnon）——美国右翼群体中存在的阴谋论。</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider20200820/621/w483h138/20200820/379b-iyaiihk3146100.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">还有人愤怒表示：“为什么FBI发布反犹太宣传册！？太危险且太不像话了。”</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/618/w518h100/20200820/f0a2-iyaiihk3145142.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">甚至有人严厉指责道：“FBI一再揭露他们自己是右翼仇恨组织。”</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/648/w564h84/20200820/4e0f-iyaiihk3145141.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">《卫报》称，推文发布几小时后， FBI一名发言人作出声明称，这条推特系通过“自动程序”发布。</p>\n<p class=\"art_p\" cms-style=\"font-L\">声明还对“自动程序”解释说，根据《信息自由法》，FBI将3个或3个以上请求者所申请的记录发布在位于FBI网站的电子信息自由阅览室“Vault”上，以供公众查阅。根据《信息自由法》程序，有关材料可供发布且系自动发布。而 FBI信息管理部推特会自动将Vault网站上的消息发推。</p>\n<p class=\"art_p\" cms-style=\"font-L\">“令我们感到遗憾的是，这次发布可能无意中在我们服务的社区里造成困扰。”FBI称。</p>\n<p class=\"art_p\" cms-style=\"font-L\">截至目前，该推文仍未删除。↓</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  src='https://n.sinaimg.cn/spider2020820/531/w385h146/20200820/0997-iyaiihk3145257.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\" cms-style=\"font-L\">这不是FBI信息管理部官方推特第一次引发舆论愤怒。2016年美国总统大选前夕，该账号发布有关故事很传奇且又备受争议的大宗商品交易商——马克•里奇的信息，以及关于总统候选人特朗普父亲的材料，引发一些活动人士投诉。</p>"
        },
      ]
    };
  },
  methods: {
    openNewsDetail(content) {
      this.dialog = true;
      this.content = content;
    },
    closeNewsDetail(val) {
      this.dialog = val;
      console.log("父组件"+val);
    }
  },
};
</script>

<style scoped>
.suspension-transition {
  transition: all 0.75s;
}

.suspension-transition:hover {
  cursor: pointer;
  transform: perspective(1px) scale(1.06);
  transition: all 0.75s;
  /* z-index: 1000; */
}

.my-card {
  /* width: 100%; */
  width: 280px;
}

.fixed-hw {
  width: 280px;
  height: 360px;
}
</style>
