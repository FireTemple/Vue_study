<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行','新款','精选']"
                 @tabClick="tabClick"
                 class="tab-control"
                 v-show="isFixed"
                 ref="topTabControl"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="showBackBtn"
            :pull-up-load="true"
    @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoaded.once="swiperImageLoaded"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="['流行','新款','精选']"
                   @tabClick="tabClick"
                   ref="tabControl"/>
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top  @click.native="backClick"   v-show="showBackButton"/>
  </div>
</template>

<script>
  import {getHomeMultiData, getHomeGoods} from "../../network/home";



  import NavBar from "../../components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";
  import TabControl from "../../components/content/tabControl/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";
  import Scroll from "../../components/common/scroll/Scroll";
  import BackTop from "../../components/content/backTop/BackTop";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    // 一般这里只写主要逻辑 不写细节 所以用methods封装
    created() {
      // 请求首页基本数据
      this.loadMultiData();
      // 请求首页goods数据
      this.loadHomeGoods('pop');
      this.loadHomeGoods('new');
      this.loadHomeGoods('sell');

    },
    methods:{

      /**
       *网络监听
      */
      loadMultiData(){
        getHomeMultiData().then(res => {
          // console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        });
      },
      loadHomeGoods(type){
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res => {
          console.log(res);
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1;
        })
      },
      /**
       * 事件监听
       */
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break
          case 1:
            this.currentType = 'new';
            break
          case 2:
            this.currentType = 'sell';
            break
        }
        this.$refs.topTabControl.currentIndex = index;
        this.$refs.tabControl.currentIndex = index;
      },
      backClick(){
        this.$refs.scroll.scrollTo(0,0,500);
      },
      showBackBtn(position){
        this.showBackButton = position.y < -1000;
        this.isFixed = position.y < - this.tabOffsetTop;
      },
      loadMore(){
        this.loadHomeGoods(this.currentType);
        this.$refs.scroll.finishedPullUp();
        // 刷新一下重新计算高度
        this.$refs.scroll.scroll.refresh();
      },
      swiperImageLoaded(){
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
      }
    },
    activated() {
      console.log('activated and Y:', this.HomeY);
      this.$refs.scroll.scrollTo(0, this.HomeY);
    },
    deactivated() {
      console.log('deactivated and y:' , this.HomeY);
      this.HomeY = this.$refs.scroll.scroll.y;
    },
    data(){
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list:[]},
          'new': {page: 0, list:[]},
          'sell': {page: 0, list:[]}
        },
        currentType: 'pop',
        showBackButton: false,
        tabOffsetTop: 0,
        isFixed: false,
        HomeY: 0
      }
    },
    computed: {
      showGoods(){
          return this.goods[this.currentType].list
      }
    },
    mounted() {
      // console.log(this.$refs.tabControl.$el);
    }
  }
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }


  .content{
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .tab-control{
    position: relative;
    z-index: 9;
  }




</style>
