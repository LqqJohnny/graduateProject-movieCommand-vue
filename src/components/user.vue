<template lang="html">
<div>
    <MUheader></MUheader>
        <div>user</div>
    <MUfooter  :tabValue="tabValue"></MUfooter>
</div>
</template>

<script>
import MUheader from './common/header.vue'
import MUfooter from './common/footer.vue'
import Loader from './common/loader.vue'
export default {
    data:function(){
        return{
            tabValue:"three"
        }
    },
    components:{
        MUheader,MUfooter,Loader
    }

}
</script>

<style lang="css">
</style>
