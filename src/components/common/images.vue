<template lang="html">
<div class="iSliderImgs">
    <div id="imagesContainer" >
    </div>

</div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props:{
          imageList: Array,
    },
    methods:{

    },
    mounted(){
        console.log(this.imageList);
        var S = new iSlider(document.getElementById('imagesContainer'), this.imageList, {
            isOverspread: 1,
            animateTime: 800,
            //  animateType: 'flow',
              plugins: ['button']
        });

    }
}
</script>

<style lang="css">
.iSliderImgs{
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    padding-top:100px;
    background-color: rgba(55, 54, 54, 0.7);
}
iframe{
    width:100%;
    height:100%;
}

#imagesContainer{
    width:90%;
    margin:0 auto;
    height:90%;
}
.closeBtn{
    width:30px;
    height:30px;
    line-height: 30px;
    border-radius:50%;
    color:white;
    background-color: #989898;
    position: absolute;
    bottom:40px;
    right:30px;
}
.islider-btn-outer{
    background-color: transparent;
}

</style>
