<template lang="html">
    <div>
        <backHeader :title="actTitle"></backHeader>
        <Loader style="margin-top:200px;" v-if="wait==true"></Loader>
        <div class="content" v-if="wait==false">
            <div class="baseInfo clearfix">
                <div class="float-l image"><img :src="starMsg.avatars.medium" alt=""></div>
                <div class="info float-l">
                    <p> 姓名：{{starMsg.name}}
                    </p>
                    <p>出生地：
                        {{starMsg.born_place}}
                    </p>
                    <p>性别：
                        {{starMsg.gender}}
                    </p>
                </div>
            </div>
<!-- 个人图片 -->
            <div class="actImages" v-if="starphotos.length>0">
                    <p class="movInfoTitle">影星图片</p>
                    <div class="photosContainer">
                        <div class="photos" id="photos">
                            <div class="photo" v-for="photo in starphotos">
                                <span class="image_kill_referrer" :data-img="photo.thumb.replace(/img[1-9]/,'img1')"></span>
                            </div>
                        </div>
                    </div>
            </div>
<!-- 作品信息 -->
            <div class="worksInfo">
                <p class="movInfoTitle">代表作品</p>
                <div class="star-movie-wrap">
                  <div class="star-movie clearfix" @click="movieMsg(item.subject.id)" v-for="item in starMsg.works">
                    <div class="float-l">
                      <img  :src="item.subject.images.small">
                    </div>
                    <div class="float-l">
                      <div>
                        <p>片名：{{item.subject.title}}</p>
                        <p v-for="it in item.roles">角色：{{it}}</p>
                        <p>上映年份：{{item.subject.year}}</p>
                      </div>
                      <div>
                        {{item.subject.rating.average}}分
                        <br>
                        {{item.subject.collect_count}}人评价
                      </div>
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
            wait:true,
            starMsg:"",
            actTitle:"",
            starphotos:[]
        }
    },
    methods:{
        imageKill:function(){
            var killer_imgs= document.getElementsByClassName('image_kill_referrer');
            for(var i =0; i<killer_imgs.length;i++){
               killer_imgs[i].innerHTML = ReferrerKiller.imageHtml(killer_imgs[i].getAttribute('data-img'));
            }
        },
        movieMsg:function(id){
            this.$router.push({path:"/movie/"+id})
        },
        getMsg:function(){
            const _this=this;
             this.$http.jsonp('https://api.douban.com/v2/movie/celebrity/' + this.$route.params.id+'?apikey=0b2bdeda43b5688921839c8ecb20399b')
             .then(function (response) {
               _this.starMsg = response.body;
               _this.actTitle=response.body.name;
                //    console.log(JSON.stringify(response.body))
                _this.wait=false;

             })
             .catch(function (response) {
               console.log(response)
           });
        //    获取 明星 剧照 信息
            this.$http.jsonp('https://api.douban.com/v2/movie/celebrity/' + this.$route.params.id+'/photos?apikey=0b2bdeda43b5688921839c8ecb20399b')
                .then(function(res){
                    _this.starphotos=res.body.photos;
                    // console.log(JSON.stringify(res.body));
                    // 去掉请求头 破解图片防盗链
                    _this.$nextTick(function(){
                        var killer_imgs= document.getElementsByClassName('image_kill_referrer');
                        for(var i =0; i<killer_imgs.length;i++){
                           killer_imgs[i].innerHTML = ReferrerKiller.imageHtml(killer_imgs[i].getAttribute('data-img'));
                        }
                    })
                })


        },
    },
    mounted: function () {
        this.getMsg();
   },
   updated:function(){
       this.imageKill();
   },
   activated:function(){
       this.wait=true;
       this.actTitle="";
       this.getMsg();

   }
}
</script>

<style lang="css" scoped>
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
    min-height:130px;
    min-width:300px;
    background-color: #ddd;
}
.image{
    margin:0 20px 0 0;
    height: 200px;
}
.info {
    min-height:100px;
    margin:20px 0 20px 0;
    min-width:180px;
}
.info p{
    margin:10px 0;
    text-align: left;
    width:180px;
    word-wrap: break-word;
    word-break: break-all;
}
.info span{
    margin:4px 3px;
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
.worksInfo{
    padding: 0 10px;
}
.movInfoTitle{
    text-align: left;
    position: relative;
    font-size: 16px;
    padding:0 5px;
    margin:20px 0 0 0;
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
.actImages{
    height: 140px;
    padding: 0 8px ;
}
.photos{
    padding:10px;
    position:absolute;
    white-space: nowrap;
}
.photosContainer{
    height:130px;
    width:95%;
    overflow: auto;
    position: absolute;
}
.photo{
    display: inline-block;
    height:100px;
    width:100px;
    overflow:hidden;
}
</style>
