<template>
    <div class="category-select">
        <div class="category-select-content">
            <div class="label">词牌</div>
            <div class="swiper">
                <swiper ref="mySwiper" :options="swiperOptions">
                    <swiper-slide>
                        <div class="swiper-slide-item">归子遥</div>
                    </swiper-slide>
                     <swiper-slide>
                        <div class="swiper-slide-item">归子遥</div>
                    </swiper-slide>
                     <swiper-slide>
                        <div class="swiper-slide-item">归子遥</div>
                    </swiper-slide>
                   <swiper-slide>
                        <div class="swiper-slide-item">归子遥</div>
                    </swiper-slide>
                     <swiper-slide>
                        <div class="swiper-slide-item">归子遥</div>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="swiper-button">
                <div class="prev-btn" @click="handlePrev"></div>
                <div class="next-btn" @click="handleNext"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "categorySelect",
  computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
  },
  data () {
    return {
         swiperOptions: {
            pagination: {
                el: '.swiper-pagination'
            },
          // Some Swiper option/callback...
        }
    };
  },
  methods:{
      handlePrev(){
          this.swiper.slidePrev();
      },
      handleNext(){
          this.swiper.slideNext();
      }
  }
}
</script>
<style lang="scss" scoped>
.category-select{
    margin:16px 0;
    &-content{
        display:flex;
        height:94px;
        border:1px dashed #999;
        align-items:center;
        .label{
           width:170px;
           font-size:25px;
           color:#fff;
        }
        .swiper{
           width:calc(100% - 170px - 188px);
        }
        .swiper-slide-item{
           width:104px;
           height:44px;
           background:#fff;
           border-radius:5px; 
           display:flex;
           justify-content:center;
           align-items:center;
           color:#C7B268;
           font-size:16px;
        }
    }
    .swiper-button{
        display:flex;
        flex:1;
        justify-content:center;
    }
    .prev-btn{
        width: 0;
        height: 0;
        border-top: 12px solid transparent;
        border-right: 24px solid #c47452;
        border-bottom: 12px solid transparent;
        margin-right:17px;
        cursor: pointer;
    }
    .next-btn{
        width: 0;
        height: 0;
        border-top: 12px solid transparent;
        border-left: 24px solid #c47452;
        border-bottom: 12px solid transparent;
        cursor: pointer;
    }
}
</style>