<template>
    <div class="version-page">
        <Header></Header>
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
    };
  }
}
</script>
<style lang="scss" scoped>
.version-page{
    padding:0px 240px;
    background:url('~@/images/version_bg.png') no-repeat;
    min-height:100vh;
    background-size:cover;
}
</style>