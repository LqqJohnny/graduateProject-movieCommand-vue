<template lang="html">
<div>
        <div>
<!-- 用户头像 -->
            <div class="userHead">
                <div class="usericon"><img src="./src/img/icon.jpeg" alt=""></div>
                <div class="username">{{this.$store.state.username}}</div>
            </div>
<!-- 功能列表 -->
            <mu-list>
              <mu-list-item title="设置">
                <mu-icon slot="left" value="settings"/>
              </mu-list-item>
              <mu-list-item title="修改信息">
                <mu-icon slot="left" value="list"/>
              </mu-list-item>
              <mu-list-item title="反馈建议">
                <mu-icon slot="left" value="send"/>
              </mu-list-item>
              <mu-list-item title="退出登录" @click="logout">
                <mu-icon slot="left" value="power"/>
              </mu-list-item>
            </mu-list>
        </div>
    <MUfooter  :tabValue="tabValue"></MUfooter>
</div>
</template>

<script>
import MUfooter from './common/footer.vue'
import Loader from './common/loader.vue'
export default {
    data:function(){
        return{
            tabValue:"three"
        }
    },
    methods:{
        logout(){
            this.$store.state.userid="";
            this.$store.state.username="";
            this.$router.push({path:"/"})
        }
    },
    beforeCreate(){
        var userid = this.$store.state.userid;
        console.log("userid"+userid);
        if(userid==null || userid==""){
            this.$router.push({path:"/login"});
        }
    },
    components:{
        MUfooter,Loader
    }

}
</script>

<style lang="scss">
.userHead{
    width:100%;
    height:200px;
    background-color: #2196F3;
    position: absolute;
    top:0;
    .usericon{
        width:100px;
        height:100px;
        border-radius:50%;
        margin:30px auto 10px;
        background-color: #FFF;
        overflow: hidden;
        img{
            width:100%;
            height:100%;
        }
    }
    .username{
        font-size:20px;
        color:white;
    }
}
.mu-list{
    margin-top:200px;
    text-align: left;
    .mu-item-left{
        left:28px;
    }
}

</style>
