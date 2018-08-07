<template>
  <div id="app">
    <mmheader></mmheader>
    <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评论</div>
      <div class="tab-item">商家</div>
    </div>
    <div class="main">
      container
      <!-- <router-view/> -->
    </div>
  </div>
</template>

<script>
import mmheader from "./components/header/Header.vue"
export default {
  name: 'App',
  components:{
    mmheader
  },
  mounted(){
    this.$axios('/api/seller').then(res=>{
      console.log(res);
    })
  }
}
</script>

<style>
#app .tab{
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.tab-item{
  flex: 1;
  text-align: center;
}
</style>
