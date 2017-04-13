<template lang="html">
  <div>
    <backHeader :title="movieTitle"></backHeader>
    <Loader style="margin-top:200px;" v-if="movieInfo==''"></Loader>
    <div class="content" v-if="movieInfo!=''">
        <div class="baseInfo clearfix">
            <div class="float-l image"><img :src="movieInfo.images.medium" alt=""></div>
            <div class="info float-l">
                <p> 导演：
                    <span v-for="daoyan in movieInfo.directors">{{daoyan.name}}</span>
                </p>
                <p>主演：
                    <span  v-for="actor in movieInfo.casts">{{actor.name}}</span>
                </p>
                <p>标签：
                    <span class="tag" v-for="genres in movieInfo.genres">{{genres}}</span>
                </p>
            </div>
        </div>
        <div class="people">
            <p class="movInfoTitle">导演</p>
            <div class="directors clearfix">
                <div class="director float-l" v-for="director in movieInfo.directors"
                @click="showDirectorInfo(director.id)">
                    <img :src="director.avatars.small" alt="">
                    <div class="img_title">{{director.name}}</div>
                </div>
            </div>


            <p class="movInfoTitle">主演阵容</p>
            <div class="actors clearfix">
                <div class="actor float-l" v-for="actor in movieInfo.casts"
                @click="showActorInfo(actor.id)">
                    <img :src="actor.avatars.small" alt="">
                    <div  class="img_title">{{actor.name}}</div>
                </div>
            </div>

        </div>
<!-- 电影简介 -->

        <div class="movSummary">
            <p class="movInfoTitle">剧情简介</p>
            <div class="summary">
                {{movieInfo.summary}}
            </div>
        </div>
<!-- 标签 -->

<!-- 热门剧照    -->
        <div class="hotPhotos">
            <p class="movInfoTitle">热门剧照</p>
            <div class="photosContainer">
                <div class="photos" id="photos">
                    <div class="photo" v-for="photo in movieInfo.photos">
                        <span class="image_kill_referrer" :data-img="photo.thumb.replace(/img[1-9]/,'img1')"></span>
                        <!-- <img :src="photo.thumb.replace(/img[1-9]/,'img1')" alt=""> -->
                    </div>
                </div>
            </div>
        </div>
<!-- 热门评论 -->
        <div class="hotShort">
            <p class="movInfoTitle">热门评论</p>
            <div class="shorts">
                <div class="shortComment" v-for="comment in movieInfo.popular_reviews">
                    <div class="author">
                        <img :src="comment.author.avatar" alt="">
                        <span>{{comment.author.name}}</span>
                    </div>
                    <p style="font-size:15px;padding:0;margin:0;font-weight:bold;">{{comment.title}}</p>
                    <div class="commentSummary">
                        {{comment.summary}}
                    </div>
                </div>
            </div>
        </div>

    <dataFrom></dataFrom>
    </div>
  </div>
</template>

<script>
import backHeader from './common/backHeader.vue'
import Loader from './common/loader.vue'
import dataFrom from './common/dataFrom.vue'
export default {
    components:{
        backHeader,Loader,dataFrom
    },
    data:function(){
        return{
            movieInfo:"",
            movieTitle:""
        }
    },
    mounted:function(){
        const _this=this;
        const id = 'https://api.douban.com/v2/movie/subject/' + this.$route.params.id + '?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=something&udid=dddddddddddddddddddddd'
        this.$http.jsonp(id)
        .then(function(response){
            _this.movieInfo=response.body;
            _this.movieTitle=response.body.title;
            // console.log(JSON.stringify(response.body));
             _this.$nextTick(function(){
                 var killer_imgs= document.getElementsByClassName('image_kill_referrer');
                 for(var i =0; i<killer_imgs.length;i++){
                    killer_imgs[i].innerHTML = ReferrerKiller.imageHtml(killer_imgs[i].getAttribute('data-img'));
                 }


             })

        })
        .catch(function(response){
            console.log(response);
        })

    },
    methods:{
        showDirectorInfo:function(id){

        },
        showActorInfo:function(id){

        },
    },
	// activated(){
	// 	this.guodu=true;
	// 	this.getnews();
	// }

}
</script>

<style lang="css" scoped>
body,html{
    min-width:300px;
}
.content{
    position:fixed;
    top:56px;
    bottom:0px;
    width:100%;
    margin:0;
    overflow: auto;
    overflow-x: hidden;
}
.baseInfo{
    width:100%;
    min-height:180px;
    min-width:300px;
    background-color: #ddd;
}
.image{
    margin:20px 20px;
}
.info {
    min-height:140px;
    margin:20px 0 20px 0;
    min-width:200px;
}
.info p{
    margin:10px 0;
    text-align: left;
    width:200px;
    word-wrap: break-word;
    word-break: break-all;
}
.info span{
    margin:4px 3px;
}
.people{
    padding:10px;
}
.movInfoTitle{
    text-align: left;
    position: relative;
    font-size: 16px;
    padding:0 5px;
}
.actor,.director{
    margin:0 10px;
    position: relative;
}
.movSummary{
    padding:10px;
}
.summary{
    padding: 0 20px;
    text-align: left;
}
.movInfoTitle:before{
    content: "";
    display: block;
    position: absolute;
    width: 7px;
    height:24px;
    left:-5px;;
    top:0;
    background-color: #2196f3;
}
.hotShort{
    padding:10px;
    text-align: left;
}
.shortComment{
    border-bottom: 1px solid #2196f3;
    padding:20px 0 ;
}
.commentSummary{
    font-size:14px;
    color:#666;
}
.author{
}
.author img{
    border-radius:50%;
}
.author span{
    line-height:48px;
    display: inline-block;
    height:48px;
    vertical-align: top;
    margin-left:10px;
}
.hotPhotos{
    padding:10px;
    position:relative;
    height:200px;
}
.photos{
    padding:10px;
    position:absolute;
    white-space: nowrap;
}
.photosContainer{
    height:120px;
    width:95%;
    overflow: auto;
    position: absolute;
}
.photo{
    display: inline-block;
    height:90px;
    width:100px;
    overflow:hidden;
}
</style>
