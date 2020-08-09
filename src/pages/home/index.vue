<template>
  <div class="jiuge-home" :style="{backgroundImage:`url(${selectedBg})`}">
      <Header></Header>  
      <div class="jiuge-items">
           <div :class="{selected:selectedValue === item.key}" 
                class="item" 
                v-for="(item,index) in items" 
                :key="item.name"
                @click="itemClick(index)"
            >
                <span>{{item.name}}</span>
                <img :src="item.imgUrl"/>
                <i></i>
            </div> 
            <img @click="$router.push('/')" src="../../images/logo.png" alt="">
      </div>
      <div class="type-t">
        <div class="type-title">
            <div class="type-title-content">
                藏头诗
            </div>
            <img src="../../images/type-title-bg.png" alt="" class="title-decorate-left">
            <img src="../../images/type-title-bg.png" alt="" class="title-decorate-right">
        </div> 
      </div>  
      <subTitleType></subTitleType> 
      <CategorySelect></CategorySelect>
      <div class="search-box">
            <div class="search-input">
                <input type="text">
            </div>
            <div class="search-right">
                <div class="search-options">
                    <div class="close-btn">
                        <img src="../../images/close.png" alt="">
                    </div>
                    <div class="line"></div>
                    <div class="camera">
                        <img src="../../images/camera.png" />
                    </div>
                </div>
                <div class="search-btn" @click="onSearch">
                    <span>九歌一下</span> 
                </div>  
            </div>  
      </div>
      <modalType :visible="modaTypelVisible" @closeModal="modalTypeClose">
      </modalType>
      <Modal :visible="modalVisible" @handleModalClose="modalClose">
            <poetryDetail></poetryDetail>
      </Modal>
  </div>
</template>

<script>
import subTitleType from '@/components/subTitleType.vue';
import modalType from '@/components/modalType.vue';
import Header from '@/components/header.vue';
import Modal from '@/components/modal.vue';
import CategorySelect from '@/components/categorySelect.vue';
import poetryDetail from '@/components/poetryDetail.vue';
export default {
  components:{
      subTitleType,
      modalType,
      Header,
      Modal,
      CategorySelect,
      poetryDetail
  },  
  data () {
      return {
          selectedValue:'',
          selectedBg:require('@/images/index_bg.png'),
          modaTypelVisible:false,
          modalVisible:false
      }
  },
  mounted(){
      console.log(this.$route.query)
      const {key} = this.$route.query;
      this.selectedValue = key;
      if(key === "poetry"){
          this.modaTypelVisible = true;
      }
  },
  computed:{
      navList(){
          return [
              {
                  name:this.$t('language'),
                  key:'language',
                  path:'',
                 
              },
              {
                  name:this.$t('help'),
                  key:'help',
                  path:'',
              },
              {
                  name:this.$t('download'),
                  key:'download',
                  path:''
              },
              {
                  name:'九歌旧版1.0',
                  key:'oldversion',
                  path:'',
              }
          ]
      },
    items(){
        return [
            {
                name:'诗',
                path:'',
                key:'poetry',
                imgUrl:require('../../images/item-1.png'),
                bg:require('@/images/index_bg.png')
            },
            {
                name:this.$t("item-2"),
                path:'',
                key:'word',
                imgUrl:require('../../images/item-2.png'),
                bg:require('@/images/index_bg_2.png')
            },
            {
                name:'对联',
                path:'',
                key:'couplet',
                imgUrl:require('../../images/item-3.png'),
                bg:require('@/images/index_bg_3.png')
            },
            {
                name:'检索',
                path:'',
                key:'search',
                imgUrl:require('../../images/item-4.png'),
                bg:require('@/images/index_bg_4.png')
            }
        ]
    }
  },    
  methods:{
    itemClick(index){
        this.selectedValue = this.items[index].key;
        this.selectedBg = this.items[index].bg;
        if(this.items[index].key === "poetry"){
            this.modaTypelVisible = true;
        }
    },
    modalTypeClose(visible){
        this.modaTypelVisible = visible;
    },
    modalClose(visible){
        this.modalVisible = visible;
    },
    onSearch(){
        this.modalVisible = true;
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .jiuge-home{
        background-image:url('~@/images/index_bg.png');
        background-repeat:no-repeat;
        width:100%;
        background-size:cover;
        height:100vh;
    }
    .jiuge-home{
       padding:0px 240px;
    }
   
    .jiuge-items {
        display:flex;
        justify-content:center;
        position: relative;
        .item{
            width:172px;
            height:172px;
            border-radius:50%;
            display:flex;
            justify-content:center;
            align-items:center;
            margin-right:40px;
            margin-top:26px;
            flex-shrink:0;
            font-size:40px;
            color:#0b1137;
            cursor: pointer;
            position: relative;
            overflow:hidden;
            &.selected{
                i{
                  background:rgba(183,125,104, .7);  
                }
            }
            img{
                position: absolute;
                width:176px;
            }
            span{
                position: absolute;
                top:50%;
                left:50%;
                transform:translate(-50%,-50%);
                z-index:50;
            }
            i{
                position: absolute;
                width:100%;
                height:100%;
                background:rgba(213,194,126, .6);
            }
        } 
        .item:nth-child(2){
            margin-right:170px;
        }
        .item:nth-child(3){
            margin-left:170px;
        }
        .item:last-child{
            margin-right:0;
        }
        &>img{
            height:146px;
            position:absolute;
            left:50%;
            top:50%;
            transform:translate(-50%,-50%);
            cursor: pointer;
        }
    }
    .type-t{
        height:88px;
        display:flex;
        margin-bottom:25px;
        justify-content:center;
        .type-title{
            position: relative;
            height:100%;
            display:flex;
            align-items:center;
        }
        .title-decorate-left,.title-decorate-right{
            position: absolute;
            top:0;
            width:16px;
        }
        .title-decorate-left{
             left:-2px;    
        }
        .title-decorate-right{
            right:-2px;
        }
        .type-title-content{
            height:72px;
            width:300px;
            background:#fff;
            font-size:26px;
            color:#c7b268; 
            justify-content:center;
            align-items:center;
            display:flex;
        }
    }
    .search-box{
        border:5px solid #fff;
        border-radius:10px;
        height:80px;
        margin:24px 40px 0 40px;
        display:flex;
        .search-input{
            width:80%;
            padding:0 20px;
            &>input{
                border:none;
                background:transparent;
                width:100%;
                height:100%;
                outline:none;
            }
        }
        .search-right{
            display:flex;
            flex:1;
            justify-content:space-between;
        }
        .search-btn{
            height:100%;
            justify-content:center;
            align-items:center;
            flex:1;
            display:flex;
            width:90%;
            background:#c47452;
            margin-left:20px;
            border-radius:10px;
            cursor: pointer; 
            span{
                color:#fff;
                font-size:24px;
            }
        }
        .search-options{
            display:flex;
            align-items:center;
            height:100%;
            .line{
                width:5px;
                height:60%;
                background:#fff;
                border-radius:5px;
                margin:0 23px;
            }
            .close-btn{
                &>img{
                    width:41px;
                }
            }
            .camera{
                &>img{
                    width:38px;
                }
            }
            img{
                display:block;
            }
        }
    }
</style>
