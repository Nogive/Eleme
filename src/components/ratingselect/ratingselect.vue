<template>
  <div class="ratingselect">
    <div class="rating-type border-1px">
      <span @click="select(2,$event)" class="block positive" :class="{'active':ratingInfo.selectType===2}">{{ratingInfo.desc.all}}
        <span class="count">{{ratings.length}}</span>
      </span>
      <span  @click="select(0,$event)" class="block positive" :class="{'active':ratingInfo.selectType===0}">{{ratingInfo.desc.positive}}
        <span class="count">{{positives.length}}</span>
      </span>
      <span  @click="select(1,$event)" class="block negative" :class="{'active':ratingInfo.selectType===1}">{{ratingInfo.desc.negative}}
        <span class="count">{{negatives.length}}</span>
      </span>
    </div>
    <div @click="toggleContent($event)" class="switch" :class="{'on':ratingInfo.onlyContent}">
      <i class="icon-check_circle"></i>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
const POSITIVE=0;
const NEGATIVE=1;
const ALL=2;

export default {
  props:{
    ratings:{
      type:Array,
      default(){
        return [];
      }
    },
    ratingInfo:{
      type:Object,
      default:{
        selectType:{
          type:Number,
          default:ALL
        },
        onlyContent:{
          type:Boolean,
          default:false
        },
        desc:{
          type:Object,
          default(){
            return {
              all:'全部',
              positive:'满意',
              negative:'不满意' 
            }
          }
        }
      }
    }
  },
  data() {
    return {
      
    }
  },
  computed:{
    positives(){
      return this.ratings.filter((rating)=>{
        return rating.rateType===POSITIVE;
      })
    },
    negatives(){
      return this.ratings.filter((rating)=>{
        return rating.rateType===NEGATIVE;
      })
    }
  },
  methods:{
    select(type,event){
      if(!event._constructed){
        return;
      }
      this.ratingInfo.selectType=type;
      this.$emit('getRatingType',type);
    },
    toggleContent(event){
      if(!event._constructed){
        return;
      }
      this.ratingInfo.onlyContent=!this.ratingInfo.onlyContent;
      this.$emit('showContent',this.ratingInfo.onlyContent);
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../common/stylus/mixin"
.ratingselect
  .rating-type
    padding 18px 0
    margin 0 18px
    border-1px(rgba(7,17,27,.1))
    font-size 0
    .block
      display inline-block
      padding 8px 12px
      border-radius 1px
      margin-right 8px
      line-height 16px
      color rgb(77,85,93)
      font-size 12px
      &.active
        color #ffffff
      .count
        font-size 8px
        margin-left 2px
      &.positive
        background rgba(0,160,220,.2)
        &.active
          background rgb(0,160,220)
      &.negative
        background rgba(77,85,93,.2) 
        &.active
          background rgb(77,85,93)
  .switch
    padding 12px 18px
    line-height 24px
    font-size 0
    border-bottom 1px solid rgba(7,17,27,.1)
    color rgb(147,153,159)
    &.on
      .icon-check_circle
        color #00c850
    .icon-check_circle
      display inline-block
      vertical-align top
      font-size 24px
      margin-right 4px
    .text
      display inline-block
      vertical-align top
      font-size 12px
</style>
