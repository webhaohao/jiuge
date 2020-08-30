<template>
    <div class="couplet-detail">
        <div class="left">
            <div class="content">
                <div class="label">上联</div>
                <div class="value">静坐常思已过</div>
            </div>
            <div class="content">
                <div class="label">下联</div>
                <div class="value">闲谈莫论人非</div>
            </div>
        </div>
        <div class="right">
            <img src="../images/couplet.png" alt="">
            <img src="../images/couplet.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
  name:"coupletDetail",
  data () {
    return {

    };
  }
}
</script>
<style lang="scss" scoped>
.couplet-detail{
    display:flex;
    align-items:center;
    height:665px;
    justify-content:center;
    .left{
        .content{
            display:flex;
            align-items:center;
            margin-bottom:56px;
            &:last-child{
                margin-bottom:0;
            }
        }
        .label{
            font-size:60px;
            color:#B4725A;
            margin-right:60px;
        }
        .value{
            font-size:36px;
            color:#040000;
            width:546px;
            padding-right:30px;
            text-align:left;
        }
    }
    .right{
        img{
            width:106px;
        }
    }
}
</style>