<template>
  <div id="detail">

    <detail-nav-bar class="detail-nav"/>
    <scroll class="content">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shopInfo"/>
      <detail-goods-info :detail-info="detailInfo"/>
      <detail-param-info :param-info="paramInfo"/>
      <detail-comment-info :comment-info="commentInfo"/>
      <goods-list :goods="recommendList" />
    </scroll>
  </div>
</template>

<script>
  import DetailNavBar from "./childComponens/DetailNavBar";
  import DetailSwiper from "./childComponens/DetailSwiper";
  import DetailBaseInfo from "./childComponens/DetailBaseInfo";
  import DetailShopInfo from "./childComponens/DetailShopInfo";
  import DetailGoodsInfo from "./childComponens/DetailGoodsInfo";
  import DetailParamInfo from "./childComponens/DetailParamInfo";
  import DetailCommentInfo from "./childComponens/DetailCommentInfo";
  import GoodsList from "../../components/content/goods/GoodsList";

  import Scroll from "../../components/common/scroll/Scroll";

  import {getDetail,getRecommends ,GoodsInfo, Shop, GoodsParam} from "../../network/detail";

  export default {
    name: "Detail",
    components: {
      GoodsList,
      DetailSwiper,
      DetailNavBar,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shopInfo: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommendList: []
      }
    },
    created() {
      this.iid = this.$route.params.iid;
      /**
       获取商品信息
       */
      getDetail(this.iid).then(res => {
        const data = res.result;
        this.topImages = data.itemInfo.topImages;
        this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services);
        this.shopInfo = new Shop(data.shopInfo);
        this.detailInfo = data.detailInfo
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0];
        }
      });
      /**
       * 获取推荐商品信息
       */
      getRecommends().then(res => {
        console.log(res);
        this.recommendList = res.data.list;
      })
    }

  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;

  }

  .content {
    height: calc(100% - 44px);
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
    padding-top: 20px;
  }


</style>
