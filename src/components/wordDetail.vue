<template>
    <div class="word-detail">
        <div class="content">
            <div class="list">
                <h5>上阙</h5>
                <p>林家之词</p>
                <p>林家之词</p>
                <p>林家之词</p>
                <p>林家之词</p>
                <p>林家之词</p>
                <p>林家之词</p>
            </div>
            <div class="list">
                <h5>下阙</h5>
                <p>林家之词</p>
                <p>林家之词</p>
                <p>林家之词</p>
                <p>林家之词</p>
                <p>林家之词</p>
                <p>林家之词</p>
            </div>
        </div>
        <div class="bottom">
            <span class="btn">再来一首</span>
        </div>
    </div>
</template>
<script>
export default {
  name: "wordDetail",
  data () {
    return {
    };
  }
}
</script>
<style lang="scss" scoped>
.word-detail{
    .content{
        display:flex;
        padding:0 100px;
        h5{
            color:#B4735B;
            font-size:60px;
            margin-bottom:58px;
        }
        .list{
            width:50%;
            p{
                font-size:40px;
                color:#000;
                margin:0 0 15px 0;
            }
        }
    }
    .bottom{
        display:flex;
        justify-content:center;
        align-items:center;
        margin:83px 0 43px 0;
        .btn{
            width:190px;
            height:68px;
            background:#ddcd96;
            display:flex;
            justify-content:center;
            align-items:center;
            color:#fff;
            border-radius:5px;
            font-size:27px;
        }
    }
}
</style>