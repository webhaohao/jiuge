<template>
    <div class="version-page">
        <Header></Header>
        <div class="version-page-content">
            <div class="item" v-for="(item,index) in items" :key="index">
                <div class="item-c">
                    <div class="date">2017年</div>
                    <div class="title">九歌1.0版本问世</div>
                    <div class="version-btn">版本体验</div>
                    <div class="join-people-btn">参与人员</div>
                </div>
                <div class="item-c">
                    <div class="date">2017年</div>
                    <div class="title">九歌1.0版本问世</div>
                    <div class="version-btn">版本体验</div>
                    <div class="join-people-btn">参与人员</div>
                </div>
            </div>
        </div>
    </div>   
</template>
<script>
import Header from '@/components/header.vue';
export default {
  name: "version",
  components:{
      Header
  },
  data () {
    return {
        items:[
            {
                date:'2017年',
                title:'九歌1.0版本问世'
            },
            {
                date:'2017年',
                title:'九歌1.0版本问世'
            },
            {
                date:'2017年',
                title:'九歌1.0版本问世'
            },
            {
                date:'2017年',
                title:'九歌1.0版本问世'
            }
        ]
    };
  }
}
</script>
<style lang="scss" scoped>
.version-page{
    padding:0px 240px 90px;
    background:url('~@/images/version_bg.png') no-repeat;
    min-height:100vh;
    background-size:cover;
    
    &-content{
        padding:90px 0;
        margin-top:90px;
        position: relative;
        &:after{
            content:"";
            position: absolute;
            width:4px;
            height:100%;
            background:#fff;
            left:50%;
            top:0;
            transform:translateX(-50%);
        }
        .item{
            display:flex;
            padding-bottom:90px;
            position: relative;
            &:nth-child(odd){
                .item-c:nth-child(even){
                    visibility: hidden;
                }
            }
             &:nth-child(even){
                .item-c:nth-child(odd){
                    visibility: hidden;
                }
            }
            &:before{
                content:"";
                position: absolute;
                width:60px;
                height:60px;
                border:4px solid #fff;
                border-radius:50%;
                background:#ddce97;
                left:50%;
                bottom:0;
                transform:translate(-50%);
                z-index:99;
            }
            &:last-child:before{
                content:"";
                visibility:hidden;
            }
        }
        
        .item-c{
            width:50%;
            display: flex;
            flex-direction:column;
            .date{
                font-size:80px;
                color:#737A7C;
            }
            .title{
                font-size:35px;
                color:#737A7C;
            }
            .version-btn,.join-people-btn{
                font-size:35px;
                color:#737A7C;
                display:flex;
                justify-content:center;
                align-items:center;
                border:1px solid #fff;
                border-radius:4px;
                width:232px;
                height:78px;
                margin-top:30px;
            }
            &:first-child{
                padding-right:141px;
                align-items:flex-end;
            }
            &:last-child{
                padding-left:141px;
                align-items:flex-start;
            }
        }  
    }
}
</style>