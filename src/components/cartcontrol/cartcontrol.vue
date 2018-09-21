<template>
 <div class="cartcontrol">
   <transition name="move">
    <div class="cart-decrease" v-show="food.count>0" @click.stop="decreaseCount($event)">
      <span class="inner icon-remove_circle_outline"></span>
    </div>
   </transition>
   <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
   <div class="cart-add icon-add_circle" @click.stop="addCount($event)"></div>
 </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
export default {
  props:{
    food:{
      type:Object
    }
  },
  methods:{
    addCount(ev){
      if(!ev._constructed){
        return;
      }
      if(this.food.count){
        this.food.count++;
      }else{
        Vue.set(this.food,'count',1);
        this.food.count=1;
      }
      this.$emit('cart-add',ev.target);
    },
    decreaseCount(ev){
      if(!ev._constructed){
        return;
      }
      if(this.food.count){
        this.food.count--;
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../common/stylus/mixin"
.cartcontrol
  font-size 0
  .cart-decrease
    display inline-block
    padding 6px
    &.move-enter-active,&.move-leave-active
      opacity 1
      transform translate3d(0,0,0)
      transition all .4s linear 
      .inner
        transition all .4s linear
        transform rotate(0)
    &.move-enter,&.move-leave-to
      opacity 0
      transform translate3d(24px,0,0)  
      .inner
        transform rotate(180deg) 
    .inner
      display inline-block
      font-size 24px
      line-height 24px
      color rgb(0,160,220)
  .cart-count
    display inline-block
    vertical-align top
    width 12px
    padding-top 6px
    line-height 24px
    text-align center
    font-size 10px
    color rgb(147,153,159)
  .cart-add
    display inline-block
    padding 6px
    font-size 24px
    line-height 24px
    color rgb(0,160,220) 
</style>

