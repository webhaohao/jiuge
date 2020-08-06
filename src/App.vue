<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
*{
  box-sizing:border-box;
}
body{
  margin:0;
  font: 14px/1.5 "Lucida Grande","Helvetica Neue",Helvetica,Arial,'PingFang SC',"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei","WenQuanYi Microhei","Heiti SC","STHeiti","Noto Sans CJK SC","Source Han Sans CN",sans-serif;
}
ul,li{
   margin:0;
   padding:0;
   list-style:none;
}
</style>
