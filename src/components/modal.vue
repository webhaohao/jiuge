<template>
    <div class="jiuge-modal" v-show="visible">
        <div class="jiuge-modal-bg"></div>
        <div class="jiuge-modal-main">
            <div class="close" @click="modalClose">
                <img src="../images/close-btn.png" alt="">
            </div>
            <div class="jiuge-modal-content">
                <slot></slot>
            </div>
            <div class="right-bar" v-show="isShowBar">
                <ul>
                    <li>去评价</li>
                    <li>分享诗歌</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "modal",
  props:{
      visible:{
         type:Boolean,
         default:false 
      },
      isShowBar:{
         type:Boolean,
         default:false 
      }
  },
  data () {
    return {
    };
  },
  methods:{
      modalClose(){
          this.$emit('handleModalClose',false)
      }
  }
}
</script>
<style lang="scss" scoped>
    .jiuge-modal{
       .jiuge-modal-bg{
            width:100%;
            height:100%;
            position:fixed;
            top:0;
            left:0;
            background:rgba(255,255,255,.52);
            z-index:99;
       } 
       &-main{
           width:1305px;
           min-height:665px;
           position: absolute;
           background:#fff;
           top:50%;
           left:50%;
           transform:translate(-50%,-50%);
           z-index:999;
           border-radius:10px;
           .right-bar{
               position: absolute;
               right:0;
               top:50%;
               transform:translateY(-50%);
               width:56px;
               font-size:24px;
               ul{
                   li{
                       height:190px;
                       background:#bfd6df;
                       padding:0 18px;
                       display:flex;
                       align-items:center;
                       justify-content:center;
                       color:#fff;
                       border-radius:5px 0 0 5px;
                       cursor: pointer;
                       &:first-child{
                           margin-bottom:58px;
                       }
                   }
               }
           }
       }
       .close{
           position: absolute;
           top:20px;
           right:20px;
           cursor: pointer;
           &:hover{
               opacity:.7;
           }
       }
    }
</style>