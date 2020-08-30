<template>
    <div class="search-modal">
        <h5>曾经沧海难为水</h5>
        <div class="search-list">
            <div class="search-item">
                <div class="similarity">
                    <span class="label">相似度</span>
                    <span class="value">80%</span>
                </div>
                <div class="content">曾经沧海难为水</div>
                <div class="source">出处</div>
                <div class="title">《离思五首·其四》</div>
            </div>
            <div class="search-item">
                <div class="similarity">
                    <span class="label">相似度</span>
                    <span class="value">80%</span>
                </div>
                <div class="content">曾经沧海难为水</div>
                <div class="source">出处</div>
                <div class="title">《离思五首·其四》</div>
            </div>
            <div class="search-item">
                <div class="similarity">
                    <span class="label">相似度</span>
                    <span class="value">80%</span>
                </div>
                <div class="content">曾经沧海难为水</div>
                <div class="source">出处</div>
                <div class="title">《离思五首·其四》</div>
            </div>
             <div class="search-item">
                <div class="similarity">
                    <span class="label">相似度</span>
                    <span class="value">80%</span>
                </div>
                <div class="content">曾经沧海难为水</div>
                <div class="source">出处</div>
                <div class="title">《离思五首·其四》</div>
            </div>
            <div class="search-item">
                <div class="similarity">
                    <span class="label">相似度</span>
                    <span class="value">80%</span>
                </div>
                <div class="content">曾经沧海难为水</div>
                <div class="source">出处</div>
                <div class="title">《离思五首·其四》</div>
            </div>
        </div>
        <div class="bottom">
            <div class="next-btn">下一页</div>
        </div>
    </div>
</template>
<script>
export default {
  name: "searchDetail",
  data () {
    return {
    };
  }
}
</script>
<style lang="scss" scoped>
.search-modal{
    h5{
        font-size:48px;
        color:#B16447;
        margin:46px 0;
        font-weight:normal;
    }
    .search-list{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    }
    .search-item{
        display:flex;
        align-items:center;
        margin-bottom:13px;
        &:last-child{
            margin-bottom:0;
        }
    }
    .similarity{
        display:flex;
        flex-direction:column;
        width:72px;
        height:72px;
        border-radius:50%;
        border:4px solid #B16447;
        align-items:center;
        justify-content:center;
        margin-right:46px;
        .label,.value{
            font-size:16px;
            color:#B16447;
        }
    }
    .content{
        font-size:38px;
        color:#040000;
        margin-right:22px;
    }
    .source{
        width:60px;
        height:30px;
        border-radius:10px;
        background:#dece97;
        font-size:16px;
        color:#B16447;
        line-height:30px;
        text-align:center;
        margin-right:64px;
    }
    .title{
        color:#000;
        font-size:32px;
    }
    .bottom{
        display:flex;
        justify-content:center;
    }
    .next-btn{
        width:180px;
        height:54px;
        background:#dece97;
        line-height:54px;
        text-align:center;
        font-size:26px;
        color:#fff;
        border-radius:5px;
        margin:48px 0;
    }
}
</style>