<template>
    <div class="poetry-detail">
        <div class="poetry-detail-content">
            <div class="title">静夜思</div>
            <div>
                <p>床前明月光</p>
                <p>疑是地上霜</p>
                <p>举头望明月</p>
                <p>低头思故乡</p>
            </div>
            <div class="again-btn"><span>再来一首</span></div>
        </div>
        <div class="poetry-detail-tool">
            <div class="level">
                <div class="item">
                    <div class="lv">A</div>
                    <div class="text">诗态修改</div>
                </div>
            </div>
            <div class="options">
                <div class="item" v-for="(item,index) in options" :key="index">{{item.label}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "poetryDetail",
  data () {
    return {
        options:[
            {
                label:'修改推荐'
            },
            {
                label:'古人相似诗作'
            },
             {
                label:'分享诗歌'
            },
            {
                label:'去评价'
            }
        ]
    };
  }
}
</script>
<style lang="scss" scoped>
.poetry-detail{
    padding:92px 0;
    display:flex;
    &-content{
        width:50%;
        justify-content:center;
        align-items:center;
        display:flex;
        flex-direction:column;
        border-right:2px solid rgba(221,206,151,.6);
        .title{
            font-size:44px;
            color:#737A7C;
            margin-bottom:30px;
        }
        p{
            margin:0;
            font-size:44px;
            color:#737A7C;
            line-height:76px;
        }
        .again-btn{
            font-size:28px;
            color:#fff;
            background:#ddce97;
            justify-content:center;
            align-items:center;
            display:flex;
            width:180px;
            height:51px;
            margin-top:65px;
            border-radius:5px;
        }
    }
    &-tool{
        width:50%;
        padding:24px 0;
        .level{
            padding:0 68px;
            .item{
                width:97px;
                margin-right:40px;
                &:last-child{
                    margin-right:0;
                }
            }
            .lv{
                width:97px;
                height:97px;
                border-radius:50%;
                border:1px solid #ddce97;        
                color:#ddce97;
                display:flex;
                justify-content:center;
                align-items:center;
                font-size:32px;
            }
            .text{
                font-size:24px;
                color:#737A7C;
                margin-top:24px;
            }
        }
        .options{
            display:flex;
            justify-content:center;
            padding:96px 118px 0 118px;
            flex-wrap: wrap;
           .item{
               width:180px;
               height:94px;
               background:#bfd7e0;
               display:flex;
               justify-content:center;
               align-items:center;
               color:#fff;
               border-radius:5px;
               margin-right:36px;
               margin-bottom:26px;
               cursor: pointer;
               &:nth-child(even){
                   margin-right:0;
                   margin-bottom:0;
               }
           } 
        }
    }
}
</style>