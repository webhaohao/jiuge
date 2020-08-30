<template>
    <div class="type-list" :show="isShow">
        <ul>
            <li  v-for="(item,index) in list" 
                :class="selectedSubTitleKey === item.key ? 'active':''" 
                :key="index"
                @click="itemClick(item.key)"
            >{{item.label}}</li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "subTitleType",
  props:{
      list:{
          type:Array,
          default:()=>{
              return [
                  {
                    key:'1',
                    label:'五言律诗'
                  },
                  {
                    key:'2',  
                    label:'七言律诗'  
                  }
              ]
          }
      },
      selectedSubTitleKey:{
          type:Number,
          default:1
      }
  },
  watch:{
      list:{
          immediate:true,
          handler(value){
              this.isShow = value.length > 0;
          }
      }
  }, 
  methods:{
      itemClick(key){
          this.$emit('subTitleItemClick',key)
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
            cursor: pointer;
            &:last-child{
                margin-right:0;
            }
            &.active{
                background:#c37451;
                color:#fff;
            } 
        }
    }
}
</style>