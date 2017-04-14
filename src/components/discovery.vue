<template lang="html">
  <div>
      <MUheader></MUheader>
        <div class="content">
            <!-- 搜索框 -->
            <div class="searchArea">
                <i  @click="searchMov()" class=" search_icon material-icons">search</i>
                <input type="text" v-model="searchword"  @keydown.enter="searchMov()">
            </div>
<!-- 热门标签 -->
            <div class="hotTags">
                <span class="tag" @click="searchByTag(tag.name)" v-for="tag in hotTags">{{tag.name}}</span>
            </div>

        </div>
      <MUfooter  :tabValue="tabValue"></MUfooter>
  </div>
</template>

<script>
import MUheader from './common/header.vue'
import MUfooter from './common/footer.vue'
import Loader from './common/loader.vue'
export default {
    data:function(){
        return{
            tabValue:"two",
            searchword:"",
            hotTags:[{
                name:"恐怖"
            },{
                name:"爱情"
            },{
                name:"悬疑"
            },{
                name:"科幻"
            },{
                name:"推理"
            },]
        }
    },
    methods:{
        searchByTag:function(name){
            this.$router.push({path:"/searchByTag/"+name});
        },
        searchMov:function(){
            this.$router.push({path:"/search/"+this.searchword});
        }
    },
    components:{
        MUheader,MUfooter,Loader
    }

}
</script>

<style lang="css">
.content{
    width:100%;
    position: fixed;
    bottom:56px;
    top:56px;
    overflow:auto;
}
.searchArea{
    position: relative;
}
.searchArea input{
    width:90%;
    margin:20px auto;
    outline:none;
    padding:0 20px;
    line-height:30px;
    height:30px;
    display:block;

    border-radius: 16px;
    border:1px solid #2196f3;
}
.tag{
    margin:0 5px;

}
.search_icon{
    font-size: 26px;
    position: absolute;
    right:25px;
    color:#2196f3;
    line-height:30px;

}
</style>
