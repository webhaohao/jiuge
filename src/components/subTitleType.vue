<template>
    <div class="type-list">
        <ul>
            <li v-for="item in subTypelist" :key="item.name">{{item.name}}</li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "subTitleType",
  props:{
      subTypelist:{
          type:Array,
          default:()=>{
              return [
                  {
                    name:'五言律诗'
                  },
                  {
                    name:'七言律诗'  
                  }
              ]
          }
      }
  },
  data () {
    return {
    };
  }
}
</script>
<style lang="scss" scoped>
.type-list{
    ul{
        display:flex;
        justify-content:center;
        li{
            width:320px;
            background:#fff;
            height:62px;
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:24px;
            color:#c7b268;
            border-radius:15px;
            margin-right:120px;
            &:last-child{
                margin-right:0;
            }
        }
    }
}
</style>