<template>
    <mu-bottom-nav style="position: fixed;" :value="bottomNav">
      <mu-bottom-nav-item value="one" exact="true" replace="true" title="首页" icon="home" href="#/" />
      <mu-bottom-nav-item value="two" exact="true"  replace="true" title="发现" icon="search" href="#/discovery" />

      <mu-bottom-nav-item v-if="haslogin" value="three" exact="true" replace="true" title="我的" icon="person pin"
      href="#/user" />
      <mu-bottom-nav-item v-if="!haslogin" value="three" exact="true" replace="true" title="我的" icon="person pin"
      href="#/login" />

    </mu-bottom-nav>
</template>

<script>
export default {
  data () {
    return {
    //   bottomNav:"one",
      bottomNavColor: 'one',
    }
  },
  props:{
      tabValue:{
          type:String
      }
  },
  computed:{
      bottomNav:function(){
          return this.tabValue;
      },
      haslogin:function(){
          if(this.$store.state.userid=="" || this.$store.state.userid==null){
              return false;
          }else{
              return true;
          }
      }
  },
  methods: {
        handleChange (val) {
          this.bottomNav = val;
      }
  }
}
</script>



<style lang="css">
.mu-bottom-nav{
    bottom:0;
}
.mu-bottom-nav{
    background-color: #2196f3;
}
</style>
