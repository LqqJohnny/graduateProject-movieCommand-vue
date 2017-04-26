<template lang="html">
    <mu-appbar title="Title" style="padding:15px 40px 0;">
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

<style lang="css" scoped>
.mu-appbar{
    font-size: 20px;
}
.mu-appbar .mu-appbar-title{
    font-size:inherit !important;
    padding-right:40px  !important;
}
.back{
    font-size: 35px;
    line-height:60px;
    width: 50px;
    height: 55px;
    position: absolute;
    top:5px;
    left:0;
}
.home{
    font-size: 25px;
    line-height:60px;
    width: 50px;
    height: 55px;
    position: absolute;
    top:5px;
    right:0;

}
</style>
