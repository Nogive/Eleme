<template>
  <div id="app">
    <mmheader :seller="seller"></mmheader>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import {urlParse} from "@/common/js/util"
import mmheader from "./components/header/Header.vue"
const ERR_OK=0;
export default {
  name: 'App',
  components:{
    mmheader
  },
  data(){
    return {
      seller:{
        id:(()=>{
          let queryParam=urlParse();
          console.log(queryParam);
          return queryParam.id; 
        })()
      }
    }
  },
  created(){
    this.$axios.get('/api/seller').then(res=>{
      let data=res.data;
      if(data.code===ERR_OK){
        this.seller=data.data;
      }
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./common/stylus/mixin.styl";
#app
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7,17,27,.1))
    .tab-item
      flex: 1;
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77,85,93)
        &.router-link-active
          color:rgb(240,20,20);
</style>
