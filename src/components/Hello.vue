<template>
    <div class="">
        <MUheader></MUheader>
        <div class="container">
            <Lunbo></Lunbo>



        </div>

        <MUfooter></MUfooter>
    </div>
</template>

<script>
import MUheader from './common/header.vue'
import MUfooter from './common/footer.vue'
import Lunbo from './common/lunbo.vue'
export default {
    name:"hello",
    data:function(){
        return{

        }
    },
    components:{
        MUheader,MUfooter,Lunbo
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
    width:100%;
    position: fixed;
    bottom:56px;
    top:56px;
    overflow:auto;
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
