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
                <!-- <span class="tag" @click="searchByTag(tag.name)" v-for="tag in hotTags">{{tag.name}}</span> -->
                 <mu-raised-button :key="tag.id" :label="tag.name" mu-chip @click="searchByTag(tag.name)" v-for="tag in hotTags" class="demo-raised-button"/>
            </div>
<!-- 我的标签 -->
            <div class="myTags">
                    <div class="title">我的标签
                        <mu-raised-button v-if="deleteTagMode" label="添加关注" style="margin-top:20px;" href="#/addLike" class="addLike demo-raised-button" primary/>
                        <div class="toggleDel" v-if="likeTags.length>0" @click="toggleDelMode()">{{manageBtnText}}</div>
                    </div>
                    <div v-if="haslogin">
                        <Loader v-if="likeWait"></Loader>
                        <div class="tags" v-if="!likeWait&&likeTags.length>0">
                            <!-- 正常显示我的标签 未进入删除模式 -->
                            <mu-chip v-if="!deleteTagMode" :key="tag.id" mu-chip @click="searchByTag(tag.tagname)"  v-for="(tag,index) in likeTags" class="demo-chip">
                             {{tag.tagname}}
                            </mu-chip>
                            <!-- 点击了管理-->
                            <mu-chip v-if="deleteTagMode" :key="tag.id" v-for="(tag,index) in likeTags"  class="demo-chip"  @delete="deleteTag(tag.id,index)" showDelete>
                               {{tag.tagname}}
                            </mu-chip>
                        </div>

                        <!-- 无喜欢的标签 点击去添加 -->
                        <div class="addLiketags" v-if="!likeWait&&likeTags.length==0">
                            你还没有关注的标签
                            <br>
                            <mu-raised-button label="添加关注" style="margin-top:20px;" href="#/addLike" class="demo-raised-button" primary/>
                        </div>
                    </div>
                    <!-- 未登录 -->
                    <div class="loginTip" v-if="!haslogin">
                          <mu-raised-button label="请先登陆" style="margin-top:30px;" href="#/login" class="demo-raised-button" primary/>
                    </div>

            </div>
        </div>
      <MUfooter  :tabValue="tabValue"></MUfooter>
  </div>
</template>

<script>
import MUheader from './common/header.vue'
import MUfooter from './common/footer.vue'
import Loader from './common/loader.vue'
import host from '../apiConfig.js'
export default {
    activated:function(){
        this.likeWait=true;
        this.likeTags=[];
        this.manageBtnText="管理";
        this.deleteTagMode=false;
        this.getLikeTags();
    },
    data:function(){
        return{
            likeWait:true,
            likeTags:[],
            manageBtnText:"管理",
            deleteTagMode:false,
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
            },{
                name:"经典"
            },{
                name:"华语"
            },{
                name:"欧美"
            },{
                name:"韩国"
            },{
                name:"日本"
            },{
                name:"动作"
            },{
                name:"喜剧"
            },{
                name:"治愈"
            },{
                name:"青春"
            },{
                name:"励志"
            },{
                name:"运动"
            },{
                name:"成长"
            },{
                name:"冒险"
            },{
                name:"赛车"
            },{
                name:"浪漫"
            },]
        }
    },
    mounted(){
        if(this.$store.state.userid!=""){
            this.getLikeTags();
        }
    },
    computed:{
        haslogin:function(){
            if(this.$store.state.userid=="" || this.$store.state.userid==null){
                return false;
            }else{
                return true;
            }
        }
    },
    methods:{
        getLikeTags(){
            var _this= this;
            this.$http.get(host.apiHost+'getLikeTags.do?userid='+this.$store.state.userid)
            .then(function(res){
                console.log(res.body);
                _this.likeTags=res.body;
                _this.likeWait=false;
            })
            .catch(function(){
                console.log(res.body);
            })
        },
        toggleDelMode(){
            if(this.manageBtnText=="管理"){
                this.manageBtnText="完成";
            }else{
                this.manageBtnText="管理";
            }
            this.deleteTagMode=!this.deleteTagMode;
        },
        deleteTag(id,index){
            var _this= this;
            this.$http.get(host.apiHost+'delLikeTags.do?liketagId='+id)
            .then(function(res){
                console.log(res.body);
                if(res.body==1){
                    _this.likeTags.splice(index,1);
                }
            })
            .catch(function(){
                console.log(res.body);
            })
        },
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
    margin:5px;

}
.demo-raised-button{
    width:20%;
}
.search_icon{
    font-size: 26px;
    position: absolute;
    right:25px;
    color:#2196f3;
    line-height:30px;

}
.myTags .title{
    font-size:16px;
    text-align: left;
    margin:15px;
    position: relative;
}
.myTags .title:before{
    content:"";
    position:absolute;
    background-color: #2196f3;
    width:5px;
    height: 20px;
    left:-10px;

}
.myTags .title .addLike{
    height:25px;
    line-height:25px;
    font-size:14px;
    width:40px;
    position: absolute;
    right:50px;
    top:0;
    margin-top:0!important;
}
.myTags .title .mu-raised-button-label{
    padding:0;
}
.myTags .demo-chip{
    margin:5px 10px;
}
.toggleDel{
    position: absolute;
    right:10px;
    top:0;
    font-size:14px;
    color:#2196f3;
}
</style>
