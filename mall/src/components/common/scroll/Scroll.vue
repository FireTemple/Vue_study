<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "scroll",
    props:{
      probeType: {
        Number,
        default: 0,
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null,
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        pullUpLoad:this.pullUpLoad,
        click: true,
        probeType: this.probeType
      });

      this.scroll.on('pullingUp', ()=> {
        this.$emit('pullingUp');
      });

      this.scroll.on('scroll',(position) => {
        // console.log(position);
        this.$emit('scroll',position);
      })
    },
    methods: {
      scrollTo(x,y,duration){
        this.scroll.scrollTo(x,y,duration);
      },
      finishedPullUp(){
        this.scroll.finishPullUp();
      }
    }
  }
</script>

<style scoped>

</style>
