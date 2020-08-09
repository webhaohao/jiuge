<template>
    <div class="modal-type" v-show="visible">
        <div class="item" v-for="item in list" :key="item.name" @click="itemClick()">
            {{item.name}}
        </div>
    </div>
</template>
<script>
export default {
  name: "modalType",
  props:{
      visible:{
         type:Boolean,
         default:false 
      }
  },
  data () {
    return {
        list:[
            {
                name:'绝句'
            },
            {
                name:'风格绝句' 
            },
            {
                name:'藏头诗'
            },
            {
                name:'律诗' 
            },
            {
                name:'集句诗'
            }
        ]
    };
  },
  methods:{
      itemClick(){
          this.$emit('closeModal',false);
      }
  }
}
</script>
<style lang="scss" scoped>
    .modal-type{
        width:100%;
        height:100%;
        position:fixed;
        top:0;
        left:0;
        background:rgba(255,255,255,.6);
        z-index:999;
        display:flex;
        justify-content:center;
        align-items:center;
        .item{
            width:180px;
            height:180px;
            border-radius:50%;
            background:#d5c27e;
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:27px;
            color:#fff;
            margin-right:80px;
            cursor: pointer;
            &:last-child{
                margin-right:0;
            }
        }
    }
</style>