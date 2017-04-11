<template lang="html">
    <div class="lunbo">
        <div class="gridlist-demo-container">
            <mu-grid-list class="gridlist-inline-demo">
              <mu-grid-tile v-for="tile, index in list" :key="index" v-show='index==showIndex' style="width:100%;" class="list">
                <img :src="tile.image"/>
                <span slot="title">{{tile.title}}</span>
                <span slot="subTitle">by <b>{{tile.author}}</b></span>
                <mu-icon-button icon="star_border" slot="action"/>
              </mu-grid-tile>
            </mu-grid-list>
         </div>
    </div>
</template>

<script>
export default {
    name:"Lunbo",
    data:function(){
        return {
            showIndex:0,
             list: [{
               image: '/static/images/breakfast.jpg',
               title: 'Breakfast',
               author: 'Myron',
               featured: true
             }, {
               image: '/static/images/burger.jpg',
               title: 'Burger',
               author: 'Linyu'
             }, {
               image: '/static/images/camera.jpg',
               title: 'Camera',
               author: 'ruolin'
             }, {
               image: '/static/images/hats.jpg',
               title: 'Hats',
               author: 'kakali'
             }, {
               image: '/static/images/honey.jpg',
               title: 'Honey',
               author: 'yuyang'
             }, {
               image: '/static/images/morning.jpg',
               title: 'Morning',
               author: 'mokayi',
               featured: true
             }, {
               image: '/static/images/vegetables.jpg',
               title: 'Vegetables',
               author: 'NUyyyyyyy'
             }, {
               image: '/static/images/water-plant.jpg',
               title: 'water',
               author: 'TDDyyyyyyy'
             }]
        }
    },
    computed:{
        showIndex:function(){
            var $this=this;
            setTimeout(function(){

                if($this.showIndex>=$this.list.length-1){
                    $this.showIndex=0;
                }else{
                    $this.showIndex++;
                }
            },2000)
        }
    }

}
</script>

<style lang="css">
.lunbo{
    width:100%;
    height: 280px;
    overflow:hidden;
}
.lunbo .list{
    height:100%;
    width:100%;
    position:absolute;
    top:0;
    left:0;
}
.lunbo .gridlist-inline-demo{

}
.gridlist-demo-container{
    width:100%;
    height:100%;
}
.mu-grid-list{
    width:100%;
    height:100%;
}

.gridlist-inline-demo{

}
</style>
