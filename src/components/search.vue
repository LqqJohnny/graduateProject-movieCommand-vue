<template lang="html">
<div>
    <backHeader :title="title" style="font-size:16px;"></backHeader>
    <!-- 搜索词：{{this.$route.params.id}} -->
    <!-- 搜索框 -->
    <div class="searchArea">
        <i  @click="searchMov()" class=" search_icon material-icons">search</i>
        <input type="text" v-model="searchword"  @keydown.enter="searchMovie()">
    </div>
    <Loader style="margin-top:200px;" v-if="wait==true"></Loader>
    <div class="content" v-if="wait==false">
        <div class="star-movie-wrap">
          <div class="star-movie clearfix" @click="movieMsg(item.id)" v-for="item in searchMov">
            <div class="float-l">
              <img  :src="item.images.small">
            </div>
            <div class="float-l textInfo" >
              <div>
                <p>片名：{{item.title}}</p>
                <p>上映年份：{{item.year}}</p>
              </div>
              <div>
                {{item.rating.average}}分
                <br>
                {{item.collect_count}}人评价
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
</template>

<script>
import backHeader from './common/backHeader.vue'
import Loader from './common/loader.vue'
export default {
    data:function(){
        return{
            title:'"'+this.$route.params.id+'"的搜索结果',
            wait:true,
            searchMov:[],
            searchword:this.$route.params.id
        }
    },
    components:{
        backHeader,Loader
    },
    // mounted:function(){
    //     this.getSearchMov();
    // },
    methods:{
        searchMovie:function(){
            this.wait=true;
            this.searchMov=[];
            this.title="";
            this.$router.push({path:"/search/"+this.searchword});
            this.getSearchMov();
        },
        movieMsg:function(movID){
            const id="/movie/"+movID;
            this.$router.push({path:id});
        },
        getSearchMov:function(){
            const _this=this;
            const id = 'https://api.douban.com/v2/movie/search?q='+_this.$route.params.id+'&apikey=0b2bdeda43b5688921839c8ecb20399b&udid=dddddddddddddddddddddd'
            this.$http.jsonp(id)
            .then(function(res){
                _this.searchMov=res.body.subjects;
                console.log(res.body);
                _this.wait=false;
            })
            .catch(function(res){
                console.log(res);
            })
        }
    },
    activated:function(){
        this.searchword=this.$route.params.id;
        this.title='"'+this.$route.params.id+'"的搜索结果',
        this.wait=true;
        this.movieTitle="";
		this.getSearchMov();
	}
}
</script>

<style lang="css" scoped>
.searchArea{
    margin-top:70px;
}
.content{
    width:100%;
    position: fixed;
    bottom:5px;
    top:106px;
    overflow:auto;
}
p{
    margin:0;
}

.star-movie{
    width:100%;
    padding:20px;
    border-bottom:1px solid #ccc;
    text-align: left;
}
.star-movie img{
    margin-right:20px;
}
.star-movie p{
    padding:0;
    margin:0;
}
.textInfo{
    position:relative;
    padding-left:120px;
    width:100%;
    position: absolute;
    right:20px;
}
</style>
