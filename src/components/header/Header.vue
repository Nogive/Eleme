<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" alt="">
      </div>
      <div class="content">
        <div class="title">
          <bg-icon width="30" height="18" type="5"></bg-icon>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <bg-icon class="icon" width="12" height="12" flag="1" :type="seller.supports[0].type"></bg-icon>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%" alt="">
    </div>
    <transition name="fade">
      <div v-show="detailShow" class="detail">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="name">{{seller.name}}</h1>
            <div class="star-wrapper">
              <star :size="48" :score="seller.score"></star>
            </div>
            <div class="title">
              <div class="line border-1px"></div>
              <div class="text">优惠信息</div>
              <div class="line border-1px"></div>
            </div>
            <ul class="supports" v-if="seller.supports">
              <li class="suppprt-item" v-for="(item,index) in seller.supports" :key="index">
                <bg-icon class="icon" width="16" height="16" flag="2" :type="item.type"></bg-icon>
                <span class="text">{{item.description}}</span>
              </li>
            </ul>
            <div class="title">
              <div class="line border-1px"></div>
              <div class="text">商家公告</div>
              <div class="line border-1px"></div>
            </div>
            <div class="bulletin">
              <p class="content">{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <div class="detail-close">
          <i class="icon-close" @click="hideDetail"></i>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import star from "@/components/star/star";
import bgIcon from "@/components/bgIcon/bgIcon"
export default {
  props:{
    seller:{
      type:Object
    }
  },
  data(){
    return {
      detailShow:false
    }
  },
  created(){
    //this.classMap=["decrease","discount","special","invoice","guarantee"];
  },
  components:{
    star,
    bgIcon
  },
  methods:{
    showDetail(){
      this.detailShow=true;
    },
    hideDetail(){
      this.detailShow=false;
    }
  }
}
</script>
<style lang="stylus">
@import "../../common/stylus/mixin"
.header
  color: #ffffff
  position: relative
  overflow hidden
  background: rgba(1,17,27,.5)
  .background
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: -1
    filter: blur(10px)
  .content-wrapper
    padding: 24px 12px 18px 24px
    font-size: 0
    position: relative
    .avatar 
      display: inline-block
      vertical-align: top
      img 
        border-radius: 2px
    .content
      display: inline-block
      margin-left: 16px
      .title
        margin: 2px 0 8px 0
        .name
          font-size: 16px
          margin-left: 6px
          line-height: 18px
          font-weight: bold
      .description
        margin-bottom: 10px
        line-height: 12px
        font-size: 12px
      .support
        .icon
          margin-right: 4px
        .text
          line-height: 12px
          font-size: 10px
    .support-count
      position: absolute
      right: 12px
      bottom: 14px
      padding: 0 8px
      height: 24px
      line-height: 24px
      border-radius: 14px
      background: rgba(0,0,0,.2)
      text-align: center
      .count
        font-size: 10px
        vertical-align: top
      .icon-keyboard_arrow_right
        font-size: 10px
        line-height: 24px
        margin-left: 2px
  .bulletin-wrapper
    height: 28px
    line-height: 28px
    padding: 0 22px 0 12px
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    position: relative
    background: rgba(7,17,27,.2)
    .bulletin-title
      display: inline-block
      width: 22px
      height: 12px
      background-size 22px 12px
      background-repeat no-repeat
      bg-image("bulletin")
      vertical-align: top
      margin-top: 8px
    .bulletin-text
      font-size: 10px
      font-weight: 200
      margin: 0 4px
      vertical-align: top
    .icon-keyboard_arrow_right
      position: absolute
      font-size: 10px
      right: 12px
      top: 8px
  .detail
    position fixed
    z-index 100
    top 0
    left 0
    width 100%
    height 100%
    overflow auto
    background rgba(7,17,27,.8)
    transition all .5s
    -webkit-backdrop-filter blur(10px)
    &.fade-enter-to,&.fade-leave 
      opacity 1
    &.fade-enter,&.fade-leave-to
      opacity 0
    .detail-wrapper
      min-height 100%
      width 100%
      .detail-main
        margin-top 64px
        padding-bottom 64px
        .name
          line-height 16px
          text-align center
          font-size 16px
          font-weight 700
        .star-wrapper
          margin-top 18px
          padding 2px 0
          text-align center
        .title
          display flex
          width 80%
          margin 28px auto 24px auto
          .line
            flex 1
            position relative
            top -6px
            border-1px(rgba(255,255,255,.2))
          .text
            padding 0 12px
            font-size 14px
            font-weight 700
        .supports
          width 80%
          margin 0 auto
          .suppprt-item
            padding 0 12px
            margin-bottom 12px
            font-size 0
            &:last-child
              margin-bottom 0
            .icon
              margin-right 16px
            .text
              line-height 16px
              font-size 12px
        .bulletin
          width 80%
          margin 0 auto
          .content
            padding 0 12px
            line-height 24px
            font-size 12px
    .detail-close
      position relative
      width 32px
      height 32px
      margin -64px auto 0 auto
      clear both
      font-size 32

</style>


