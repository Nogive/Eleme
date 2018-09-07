<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="(item,index) in goods" :key="index" class="menu-item">
          <span class="text border-1px">
            <span v-show="item.type>0" class="icon" :class="item.type | classMap"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper"></div>
  </div>
</template>
<script>
const ERROK=0;
export default {
  name:'goods',
  props:{
    seller:{
      type:Object
    }
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
  },
  filters:{
    classMap:function(v){
      var result="decrease";
      switch(v){
        case 1:result="discount";
          break;
        case 2:result="special";
          break;
        case 3:result="invoice";
          break;
        case 4:result="guarantee";
          break;
        default:result="decrease";
          break;
      }
      return result;
    }
  },
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
        display inline-block
        vertical-align top
        width 12px
        height 12px
        margin-right 2px
        background-size 12px 12px
        background-repeat no-repeat
        &.decrease
          bg-image("decrease_3")
        &.discount
          bg-image("discount_3")
        &.guarantee
          bg-image("guarantee_3")
        &.invoice
          bg-image("invoice_3")
        &.special
          bg-image("special_3")
      .text
        display table-cell
        width 56px
        vertical-align middle
        font-size 12px
        border-1px(rgba(7,17,27,.1))
  .foods-wrapper
    flex 1
</style>

