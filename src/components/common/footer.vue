<template>
    <mu-bottom-nav style="position: fixed;" :value="bottomNav" shift @change="handleChange">
      <mu-bottom-nav-item value="movies" title="首页" icon="home"/>
      <mu-bottom-nav-item value="music" title="发现" icon="search"/>
      <mu-bottom-nav-item value="books" title="我的" icon="person pin"/>
    </mu-bottom-nav>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'movies',
      bottomNavColor: 'movies'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>

<style lang="css">
.mu-bottom-nav{
    bottom:0;
}
.mu-bottom-nav-shift{
    background-color: #2196f3;
}
</style>
