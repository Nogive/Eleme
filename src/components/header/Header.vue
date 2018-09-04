<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="seller.supports[0].type|classMap(1)"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper"></div>
  </div>
</template>
<script>
export default {
  props:['seller'],
  data(){
    return {
      classMap:[]
    }
  },
  created(){
    //this.classMap=["decrease","discount","special","invoice","guarantee"];
  },
  filters:{
    classMap:function(v,param){
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
      return result+param;
    }
  }
}
</script>
<style>
.header{
  color: #ffffff;
  background: rgba(0,0,0,1);
}
.content-wrapper{
  padding: 24px 12px 18px 24px;
  font-size: 0;
}
.avatar{
  display: inline-block;
  vertical-align: top;
}
.avatar img{
  border-radius: 2px;
}
.content{
  display: inline-block;
  margin-left: 16px;
}
.title{
  margin: 2px 0 8px 0;
}
.brand{
  width: 30px;
  height: 18px;
  display: inline-block;
  background: url("./images/brand@2x.png") no-repeat center center /cover;
  vertical-align: top;
}
.name{
  font-size: 16px;
  margin-left: 6px;
  line-height: 18px;
  font-weight: bold;
}
.description{
  margin-bottom: 10px;
  line-height: 12px;
  font-size: 12px;
}
.support .icon{
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 4px;
  vertical-align: top;
}
.support .text{
  line-height: 12px;
  font-size: 12px;
}

/* 减 折 保 票 特 */
.decrease1{
  background: url(./images/decrease_1@2x.png) no-repeat center center /cover;
}
.decrease2{
  background: url(./images/decrease_2@2x.png) no-repeat center center /cover;
}
.decrease3{
  background: url(./images/decrease_3@2x.png) no-repeat center center /cover;
}
.decrease4{
  background: url(./images/decrease_4@2x.png) no-repeat center center /cover;
}
.discount1{
  background: url(./images/discount_1@2x.png) no-repeat center center /cover;
}
.discount2{
  background: url(./images/discount_2@2x.png) no-repeat center center /cover;
}
.discount3{
  background: url(./images/discount_3@2x.png) no-repeat center center /cover;
}
.discount4{
  background: url(./images/discount_4@2x.png) no-repeat center center /cover;
}
.guarantee1{
  background: url(./images/guarantee_1@2x.png) no-repeat center center /cover;
}
.guarantee2{
  background: url(./images/guarantee_2@2x.png) no-repeat center center /cover;
}
.guarantee3{
  background: url(./images/guarantee_3@2x.png) no-repeat center center /cover;
}
.guarantee4{
  background: url(./images/guarantee_4@2x.png) no-repeat center center /cover;
}
.invoice1{
  background: url(./images/invoice_1@2x.png) no-repeat center center /cover;
}
.invoice2{
  background: url(./images/invoice_2@2x.png) no-repeat center center /cover;
}
.invoice3{
  background: url(./images/invoice_3@2x.png) no-repeat center center /cover;
}
.invoice4{
  background: url(./images/invoice_4@2x.png) no-repeat center center /cover;
}
.special1{
  background: url(./images/special_1@2x.png) no-repeat center center /cover;
}
.special2{
  background: url(./images/special_2@2x.png) no-repeat center center /cover;
}
.special3{
  background: url(./images/special_3@2x.png) no-repeat center center /cover;
}
.special4{
  background: url(./images/special_4@2x.png) no-repeat center center /cover;
}


</style>


