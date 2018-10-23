<template>
 <div class="bg-icon" :style="{width:width+'px',height:height+'px'}">
    <span class="icon" :class="type|classMap(flag)"></span>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  props:["type","flag","width","height"],
  data() {
    return {
      
    }
  },
  filters:{
    classMap:function(v,params){
      v=parseInt(v);
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
        case 5:result="brand";
          break;
        case 6:result="bulletin";
          break;
        default:result="decrease";
          break;
      }
      if(params){
        result=result+'_'+params;
      }
      return result
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../common/stylus/mixin.styl"
.bg-icon
  display: inline-block
  vertical-align: top
  .icon
    display: inline-block
    width 100%
    height 100%
    background-size:100% 100%
    background-repeat no-repeat
    &.decrease_1
      bg-image('decrease_1')
    &.discount_1
      bg-image('discount_1')
    &.guarantee
      bg-image('guarantee_1')
    &.invoice_1
      bg-image('invoice_1')
    &.special_1
      bg-image('special_1')
    &.decrease_2
      bg-image('decrease_2')
    &.discount_2
      bg-image('discount_2')
    &.guarantee_2
      bg-image('guarantee_2')
    &.invoice_2
      bg-image('invoice_2')
    &.special_2
      bg-image('special_2')
    &.decrease_3
      bg-image('decrease_3')
    &.discount_3
      bg-image('discount_3')
    &.guarantee_3
      bg-image('guarantee_3')
    &.invoice_3
      bg-image('invoice_3')
    &.special_3
      bg-image('special_3')
    &.decrease_4
      bg-image('decrease_4')
    &.discount_4
      bg-image('discount_4')
    &.guarantee_4
      bg-image('guarantee_4')
    &.invoice_4
      bg-image('invoice_4')
    &.special_4
      bg-image('special_4')
    &.brand
      bg-image('brand')
    &.bulletin
      bg-image('bulletin')
</style>



