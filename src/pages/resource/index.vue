<template>
    <div class="resource-page">
        <Header></Header>
        <div class="resource-table">
            <table>
                <thead>
                    <tr>
                        <th>资源名称</th>
                        <th>大小</th>
                        <th>更新时间</th>
                        <th>下载</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>九歌一些材料</td>
                        <td>557KB</td>
                        <td>2020.7.1</td>
                        <td><img src="../../images/download-icon.png"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import Header from '@/components/header.vue';
export default {
  name: "resource",
  components:{
      Header
  },
  data () {
    return {
    };
  }
}
</script>
<style lang="scss" scoped>
.resource-page{
    padding:0 240px;
    background:url('~@/images/resource-bg.png') no-repeat;
    min-height:100vh;
    background-size:cover;
}
.resource-table{
    width:100%;
    padding:48px 0;
    table{
        width:100%;
        border-collapse:collapse; 
        thead{
            border:5px solid #fff;
            border-radius:10px;
        }
        thead th{
            font-size:36px;
            color:#fff;
            padding:24px 0;
            font-weight:normal;
        }
        tbody td{
           font-size:28px; 
           color:#737A7C;
           padding:15px 0;
        }
        tbody td img{
            vertical-align:middle;
            cursor: pointer;
        }
    }
}
</style>