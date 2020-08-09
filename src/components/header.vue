<template>
    <header>
        <div class="logo" @click="$router.push('/')">
            <img src="@/images/logo.png" alt="">
        </div>
        <nav>
        <ul>
            <li v-for="(item,index) in navList" :key="item.name" @click="navClick(index)">
                {{item.name}}
            </li>
        </ul>
        </nav>    
    </header>  
</template>
<script>
export default {
  name: "Header",
  data () {
    return {
    };
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
                  path:'resource'
              },
              {
                  name:'九歌旧版1.0',
                  key:'oldversion',
                  path:'',
              }
          ]
      }
   },
   methods:{
       navClick(index){
        const {key} = this.navList[index]
      
        if(key === 'language'){
             console.log(key);
             console.log(this.$i18n.locale);
            if(this.$i18n.locale === 'zh_CN'){
                this.$i18n.locale = 'en_US';
            }else{
                this.$i18n.locale = 'zh_CN';
            }
        }
        else{
            this.navList[index].path && this.$router.push(this.navList[index].path)
        }
    }
   }
}
</script>
<style lang="scss" scoped>
    .logo img{
        width:24px;
    }
    header{
        display:flex;
        justify-content:space-between;
        padding:18px 0;
    }
    nav{
        overflow: hidden;
    }
    nav ul{
        display:flex;
        justify-content:center;
        align-items:center;
        height:100%;
        cursor: pointer;
    }
    nav ul li{
        margin-right:36px;
        color:#c7b268;
        &:last-child{
            margin-right:0;
        }
}
</style>