<template>
  <div class="jiuge-index">
      <div class="jiuge-index-center">
          <div class="logo">
              <img src="../../images/logo.png" alt="">
          </div>
          <div class="version-intr" @click="$router.push('/version')">版本介绍</div>    
      </div>
      <div class="jiuge-items">
           <div class="item" v-for="(item,index) in items" :key="item.name" @click="itemClick(index)">
                <span>{{item.name}}</span>
                <img :src="item.imgUrl"/>
                <i></i>
            </div> 
      </div>    
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
        items:[
            {
                name:'诗',
                path:'',
                key:'poetry',
                imgUrl:require('../../images/item-1.png')
            },
            {
                name:'词',
                path:'',
                key:'word',
                imgUrl:require('../../images/item-2.png')
            },
            {
                name:'对联',
                path:'',
                key:'couplet',
                imgUrl:require('../../images/item-3.png')
            },
            {
                name:'检索',
                path:'',
                key:'search',
                imgUrl:require('../../images/item-4.png')
            }
        ]
    }
  },
  methods:{
      itemClick(index){
          const key = this.items[index].key
          this.$router.push({path:'/home',query:{key}});
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.jiuge-index{
    width:100%;
    height:100vh;
    background:url('~@/images/index_bg.png') no-repeat;
    background-size:cover;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
}
.version-intr{
    font-size:30px;
    color:#C37452;
    text-decoration:underline;
    cursor: pointer;
}
.jiuge-items {
    display:flex;
    width:100%;
    justify-content:center;
}
.jiuge-items .item{
    width:222px;
    height:222px;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:28px;
    margin-top:26px;
    flex-shrink:0;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    img{
        position: absolute;
        width:233px;
    }
    span{
        position: absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        z-index:50;
        font-size:40px;
    }
    i{
        position: absolute;
        width:100%;
        height:100%;
        background:rgba(213,194,126, .6);
    }
}
.jiuge-items .item:first-child,.jiuge-items .item:last-child{
    margin-top:-110px;
}
.jiuge-items .item:nth-child(2){
    margin-right:64px;
}
</style>
