<template lang="html">
    <mu-appbar title="Title" style="padding-left:40px;">
        <i  @click="goBack()" class=" back material-icons">navigate_before</i>
        {{title}}
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
             window.history.go(-1);
        }
    }

}
</script>

<style lang="css">

.back{
    font-size: 35px;
    line-height:60px;
    width: 50px;
    height: 55px;
    position: absolute;
    top:0;
    left:0;
}
</style>
