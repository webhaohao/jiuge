<template>
   <div class="poetry-detail">
        <div class="poetry-detail-content">
            <div class="title">静夜思</div>
            <div>
                <p v-for="(item,index) in poetryList" :key="index">
                  <span :class="selectedParentIndex === index && selectedItemIndex === i ? 'active':''" v-for="(o,i) in item" :key="i" @click="handlePoetryListItem(index,i)">{{o}}</span>
                </p>
            </div>
            <div class="again-btn"><span>再来一首</span></div>
        </div>
        <div class="poetry-detail-tool">
          <div class="type-t">
            <div class="type-title">
              <div class="type-title-content">
                  修改推荐
              </div>
              <img src="../images/type-title-bg.png" alt="" class="title-decorate-left">
              <img src="../images/type-title-bg.png" alt="" class="title-decorate-right">
            </div> 
          </div>
          <div class="edit-list">
            <div class="edit-list-item" 
                :class="selectedEditIndex === index ? 'active':''" 
                v-for="(item,index) in editList" 
                :key="index" 
                @click="editItemClick(index)"
            >
              <i></i>
              <span >
              {{item}}
              </span>
            </div>
          </div>
           <div class="type-t">
            <div class="type-title">
              <div class="type-title-content">
                  修改模式
              </div>
              <img src="../images/type-title-bg.png" alt="" class="title-decorate-left">
              <img src="../images/type-title-bg.png" alt="" class="title-decorate-right">
            </div> 
          </div>
          <div class="poetry-status-list">
            <div class="poetry-status-item" v-for="(item,index) in poetryStatusList" :key="index">
                <i></i>
                <span>{{item}}</span>
            </div>
          </div>
          <div class="poetry-btn-group">
            <span>重置</span>
            <span>确认</span>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "poetryDetailEdit",
  data () {
    return {
      editList:['诗','林','嘉','吴','张','郭','彪','王'],
      selectedEditIndex:-1,
      poetryStatusList:['诗态修改','诗态修改','诗态修改'],
      selectedParentIndex:-1,
      selectedItemIndex:-1,
      poetry:[
        '床前明月光',
        '疑是地上霜',
        '举头望明月',
        '低头思故乡'
      ]
    };
  },
  computed:{
    poetryList(){
      return this.poetry.map(item=>[...item]);
    }
  },
  methods:{
    editItemClick(index){
      this.selectedEditIndex = index;
    },
    handlePoetryListItem(index,i){
        console.log(i);
        this.selectedParentIndex = index;
        this.selectedItemIndex = i;
    }
  }
}
</script>
<style lang="scss" scoped>
.poetry-detail{
    padding:92px 0;
    display:flex;
    &-content{
        width:50%;
        justify-content:center;
        align-items:center;
        display:flex;
        flex-direction:column;
        border-right:2px solid rgba(221,206,151,.6);
        .title{
            font-size:44px;
            color:#737A7C;
            margin-bottom:30px;
        }
        p{
            margin:0;
            font-size:44px;
            color:#737A7C;
            span{
              border:2px solid transparent;
              padding:2px;
              display:inline-block;
            }
            span.active{
              border:2px solid #ddcd96;
              border-radius:50%;
            }
        }
        .again-btn{
            font-size:28px;
            color:#fff;
            background:#ddce97;
            justify-content:center;
            align-items:center;
            display:flex;
            width:180px;
            height:51px;
            margin-top:65px;
            border-radius:5px;
        }
    }
    &-tool{
        width:50%;
        padding:0 68px;
        .level{
            padding:0 68px;
            display:flex;
            cursor: pointer;
            .item{
                width:97px;
                margin-right:40px;
                &:last-child{
                    margin-right:0;
                }
            }
            .lv{
                width:97px;
                height:97px;
                border-radius:50%;
                border:1px solid #ddce97;        
                color:#ddce97;
                display:flex;
                justify-content:center;
                align-items:center;
                font-size:32px;
            }
            .text{
                font-size:24px;
                color:#737A7C;
                margin-top:24px;
            }
        }
        .options{
            display:flex;
            justify-content:center;
            padding:96px 118px 0 118px;
            flex-wrap: wrap;
           .item{
               width:180px;
               height:94px;
               background:#bfd7e0;
               display:flex;
               justify-content:center;
               align-items:center;
               color:#fff;
               border-radius:5px;
               margin-right:36px;
               margin-bottom:26px;
               cursor: pointer;
               &:nth-child(even){
                   margin-right:0;
                   margin-bottom:0;
               }
           } 
        }
        .poetry-btn-group{
            display:flex;
            margin-top:40px;
            justify-content:center;
            span{
              width:180px;
              color:#fff;
              height:56px;
              display:flex;
              align-items:center;
              justify-content:center;
              background:#ddce97;
              border-radius:8px;
              font-size:26px;
              cursor: pointer;
              &:first-child{
                margin-right:88px;
              }
            }
        }
    }
    .type-t{
        height:68px;
        display:flex;
        margin-bottom:25px;
        justify-content:flex-start;
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
             height:68px;    
        }
        .title-decorate-right{
            right:-2px;
            height:68px;
        }
        .type-title-content{
            height:56px;
            width:186px;
            background:#f5f6f8;
            font-size:26px;
            color:#c7b268; 
            justify-content:center;
            align-items:center;
            display:flex;
        }
    }
    .edit-list{
       display:flex;
       align-items:center;
       flex-wrap:wrap;
       margin-left:-10px;
       margin-right:-10px;
       margin-bottom:66px;
      .edit-list-item{
        display:flex;
        align-items:center;
        padding:5px 10px;
        cursor: pointer;
        &.active{
          i{
            background:#ddcd97;
          }
        }
      }
      span{
        font-size:30px;
        color:#737A7C;
      }
      i{
        width:27px;
        height:27px;
        border:3px solid #ddcd97;
        border-radius:5px;
        margin-right:11px;
      }
    }
    .poetry-status-list{
      display:flex;
      margin-left:-10px;
      margin-right:-10px;
      .poetry-status-item{
        display:flex;
        padding:0 10px;
        align-items:center;
          i{
            width:27px;
            height:27px;
            border:3px solid #ddcd97;
            border-radius:5px;
            margin-right:11px;
          }
          span{
            font-size:30px;
            color:#737A7C;
          }
      }
    }
}
</style>