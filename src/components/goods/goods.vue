<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="(item,index) in goods" :key="index" class="menu-item">
          <span class="text border-1px">
            <bg-icon v-show="item.type>0" class="icon" width="12" height="12" flag="3" :type="item.type"></bg-icon>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper"></div>
  </div>
</template>
<script>
const ERROK=0;
import bgIcon from "@/components/bgIcon/bgIcon"
export default {
  name:'goods',
  props:{
    seller:{
      type:Object
    }
  },
  components:{
    bgIcon
  },
  data(){
    return {
      goods:[]
    }
  },
  created(){
    this.$axios.get('api/goods').then(res=>{
      res=res.data;
      if(res.code==ERROK){
        this.goods=res.data;
      }
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin"
.goods
  display flex
  position absolute
  top 174px
  bottom 46px
  width 100%
  overflow hidden
  .menu-wrapper
    flex 0 0 80px
    width 80px
    background #f3f5f7
    .menu-item
      display table
      width 56px
      height 54px
      line-height 14px
      padding 0 12px
      .icon
        margin-right 2px
      .text
        display table-cell
        width 56px
        vertical-align middle
        font-size 12px
        border-1px(rgba(7,17,27,.1))
  .foods-wrapper
    flex 1
</style>

