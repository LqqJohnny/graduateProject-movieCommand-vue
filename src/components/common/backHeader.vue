<template lang="html">
    <mu-appbar title="Title" style="padding-left:40px;">
        <i  @click="goBack()" class=" back material-icons">navigate_before</i>
        <span style="font-size:inherit;">{{title}}</span>
        <i  @click="goHome()" class=" home material-icons">home</i>
    </mu-appbar>
</template>

<script>
export default {
    name:"backHeader",
    props:{
        title:{
            type:String
        }
    },
    methods:{
        goBack:function(){
            this.$router.go(-1);
        },
        goHome:function(){
            this.$router.push({path:"/"});
        }
    }

}
</script>

<style lang="css">
.mu-appbar{
    font-size: 20px;
}
.mu-appbar-title{
    font-size:inherit !important;
}
.back{
    font-size: 35px;
    line-height:60px;
    width: 50px;
    height: 55px;
    position: absolute;
    top:0;
    left:0;
}
.home{
    font-size: 25px;
    line-height:60px;
    width: 50px;
    height: 55px;
    position: absolute;
    top:0;
    right:0;

}
</style>
