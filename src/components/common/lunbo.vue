<template lang="html">
    <div class="lunbo" id="lunbo">
        <div class="gridlist-demo-container">
            <mu-grid-list class="gridlist-inline-demo">
              <mu-grid-tile v-for="koubei, index in propsList" :key="index"
                            v-show='index==showIndex' style="width:100%;padding:0;" @click="al()" class="anim_fade_image list">
                <!-- <img :src="koubei.image"/> -->
                <!-- 点击iframe中的东西没反应 用一个mask来覆盖iframe -->
                <div class="mask" @click="showMovDetail(koubei.id)"></div>
                <span class="image_kill_referrer" :data-img="koubei.image.replace(/img[1-9]/,'img1')"></span>
                <span slot="title">{{koubei.title}} ({{koubei.genres}})</span>
                <span slot="subTitle"><b></b></span>
              </mu-grid-tile>
            </mu-grid-list>
         </div>
    </div>
</template>

<script>
// props:
//      propsList  轮播展示的图片数组
//      time       轮播间隔时间
export default {
    name:"Lunbo",
    props:{
        time:{
            type:Number
        },
        propsList:{
             type: Array,
             default: function () {
               return []
             }
        }
    },
    data:function(){
        return {
            showIndex:0
        }
    },
    methods:{

        showMovDetail:function(movID){
            const id="/movie/"+movID;
            this.$router.push({path:id});
        },
        killImg:function(i){

                var killer_imgs= document.getElementsByClassName('image_kill_referrer');
                console.log(killer_imgs[i].innerHTML);
                var lunbo= document.getElementById("lunbo");
                var iframeStyle={
                    style:'width:'+lunbo.width+';'
                };
                if(killer_imgs[i].innerHTML==""){
                    killer_imgs[i].innerHTML = ReferrerKiller.imageHtml(killer_imgs[i].getAttribute('data-img'),null,iframeStyle);
                }
        }
    },
    created:function(){
        var $this=this;
            setInterval(function(){
                if($this.showIndex>=$this.propsList.length-1){
                    $this.showIndex=0;

                }else{
                    $this.showIndex++;
                }
            },$this.time);
    },
    updated:function(){
        var killer_imgs= document.getElementsByClassName('image_kill_referrer');
        var iframeStyle={
            // style:'width:'+lunbo.width+';'
        };
        for(var i =0; i<killer_imgs.length;i++){
           killer_imgs[i].innerHTML = ReferrerKiller.imageHtml(killer_imgs[i].getAttribute('data-img'),null,iframeStyle);
        }
    }

}
</script>

<style lang="css">
.lunbo{
    width:100%;
    height: 180px;
    overflow:hidden;
}
.lunbo .list{
    height:100%;
    width:100%;
    position:absolute;
    top:0;
    left:0;
}
.lunbo .list img{
    width:100%;
    height:100%;
}
.gridlist-demo-container{
    width:100%;
    height:100%;
}
.mu-grid-list{
    width:100%;
    height:100%;
}
.anim_fade_image{
    -webkit-animation-name: fadeInOut;
   -webkit-animation-timing-function: ease-in-out;
   -webkit-animation-duration: 1s;
   -webkit-animation-direction: alternate;
}
.mu-grid-tile-titlebar{
    height:30px !important;
}
.mu-grid-tile-title-container{
    text-align: left;
}
@-webkit-keyframes fadeInOut {
    0% {
        opacity:0;
     }
    25% {
        opacity:0.25;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity:1;
    }
}
.mask{
    width:100%;
    height:100%;
    z-index:10000;
    background-color:#ccc;
    position:absolute;
    opacity: 0;
}
</style>
