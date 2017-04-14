<template>
    <div class="">
        <MUheader></MUheader>
        <div class="container">
            <Loader style="margin-top:20px;" v-if="koubeiMovData.length==0"></Loader>
            <Lunbo v-if="koubeiMovData.length>0" :time="5000" :propsList="koubeiMovData"></Lunbo>

<!-- 最新影讯 -->
            <div class="newestMov">
                <div class="title">最新上映</div>
                <Loader v-if="newestMovData.length==0"></Loader>
                <div  v-if="newestMovData.length>0" class="newestList clearfix">
                    <div class="movie float-l" v-for="movie,index in newestMovData"
                     v-if="index<8"
                     v-on:click="showMovDetail(movie.id)">
                        <img :src="movie.images.small" alt="">
                    </div>
                </div>
            </div>
<!-- 即将上应 -->
            <div class="comingMov ">
                <div class="title">即将上映</div>
                <Loader v-if="comingMovData.length==0"></Loader>
                <div  v-if="comingMovData.length>0"  class="comingList clearfix">
                    <div class="movie float-l" v-for="movie,index in comingMovData"
                     v-if="index<8"
                     v-on:click="showMovDetail(movie.id)">
                        <img :src="movie.images.small" alt="">
                    </div>
                </div>
            </div>
<!-- 猜你喜欢 -->
            <div class="mayLike">
                <div class="title">
                    猜你喜欢
                    <div class="changeBtn">
                        <mu-icon value="cached" color="#333" style="font-size:20px;vertical-align:middle;" class="dis_inline_b"/>
                        <span class="dis_inline_b">换一批</span>
                    </div>
                </div>
                <Loader v-if="comingMovData.length==0"></Loader>

                <div  v-if="comingMovData.length>0"  class="mayLikeList clearfix" >
                    <div class="movie float-l" v-for="movie,index in comingMovData"
                     v-if="index<8"
                     v-on:click="showMovDetail(movie.id)">
                        <img :src="movie.images.small" alt="">
                    </div>
                </div>
            </div>
        </div>

         <MUfooter :tabValue="tabValue"></MUfooter>
    </div>
</template>

<script>
import MUheader from './common/header.vue'
import MUfooter from './common/footer.vue'
import Lunbo from './common/lunbo.vue'
import Loader from './common/loader.vue'
export default {
    name:"hello",
    data:function(){
        return{
            tabValue:"one",
            koubeiMovData: [],
            newestMovData:[],
            comingMovData:[]
        }
    },
    methods:{
        showMovDetail:function(movID){
            const id="/movie/"+movID;
            this.$router.push({path:id});
        }
    },
    components:{
        MUheader,MUfooter,Lunbo,Loader
    },
    mounted:function(){
        // return;
        const $this = this;
        // 口碑榜
        this.$http.jsonp('https://api.douban.com/v2/movie/weekly?apikey=0b2bdeda43b5688921839c8ecb20399b&start=1&count=20')
        .then(function(response){
            var movie=[];
            // 循环获得 电影剧照
             for(var i =0; i<2;i++){
                    var kbMov=response.body.subjects[i].subject;
                    this.$http.jsonp('https://api.douban.com/v2/movie/subject/'+kbMov.id+'/photos?apikey=0b2bdeda43b5688921839c8ecb20399b')
                    .then(function(res){
                        var resbody=res.body;
                        movie.push({title:resbody.subject.original_title,genres:kbMov.genres.join("、"),image:resbody.photos[2].image.replace(/img[1-9]/,"img1")})
                    })
             }
             $this.koubeiMovData=movie;
        })
        .catch(function (response) {
          console.log(response)
        })

// return;
        //  正在上映
        this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b')
        .then(function(response){
             this.newestMovData = response.body.subjects;
        })
        .catch(function (response) {
          console.log(response)
        })
// return;
        // 即将上映
        this.$http.jsonp('https://api.douban.com/v2/movie/coming_soon?apikey=0b2bdeda43b5688921839c8ecb20399b')
        .then(function(response){
             this.comingMovData = response.body.subjects;
        })
        .catch(function (response) {
          console.log(response)
        })
        //猜你喜欢

    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
.container{
    width:100%;
    position: fixed;
    bottom:56px;
    top:56px;
    overflow:auto;
}
.movie img{
    width:100%;
    height: 100%;
}
.title{
    text-indent: 10px;
    font-size:16px;
    text-align: left;
    margin-top:20px;
}
.movie{
    border:1px solid #03A9F4;
    width:20%;
    height:130px;
    margin:10px 2.5%;
}
.mayLike{
    position:relative;
}
.changeBtn{
    position:absolute;
    right:20px;
    top:0;
    font-size: 14px;
    line-height: 20px;
}
.dis_inline_b{
    display: inline-block;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
