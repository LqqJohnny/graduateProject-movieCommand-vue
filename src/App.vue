<template>
  <div id="app">
    <keep-alive>
            <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app',
  // data(){
  //   return{
  //       transitionName:"slideright"
  //   }
  // },
  // watch: {
  // '$route' (to, from) {
  //   const toDepth = to.path.split('/').length
  //   const fromDepth = from.path.split('/').length
  //   this.transitionName = toDepth < fromDepth ? 'slideright' : 'slideleft'
  // }

}
</script>

<style>
    .slideright-enter-active, .slideright-leave-active {
      transition: all .5s;
    }
    .slideright-enter, .slideright-leave-to{
      opacity: 0;
      transform: translateX(100px);
    }
body{
    position:relative;
    left:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
.tag{
    padding:2px 5px ;
    background: #0a73ad;
    color:#fff;
    border-radius:3px;
    display: inline-block;
}
.img_title{
    width:100%;
    padding:0 5px;
    height: 20px;
    line-height:20px;
    color:#fff;
    background-color: #444;
    opacity: 0.7;
    position: absolute;
    bottom: 6px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
}
.noData{
    font-size: 20px;
    margin-top:100px;
}
</style>
