<template>
<div>
    <backHeader :title="title"></backHeader>
    <div class="log_reg_form">
          <mu-tabs :value="activeTab" @change="handleTabChange" lineClass="blue-line">
            <mu-tab value="tab1" title="登录" lineClass="blue-line"/>
            <mu-tab value="tab2" title="注册" lineClass="blue-line"/>
            <!-- <mu-tab value="tab3" @active="handleActive" title="TAB ACTIVE"/> -->
          </mu-tabs>
          <div v-if="activeTab === 'tab1'">
            <mu-text-field label="用户名" hintText="请输入用户名" :errorText="name_error" v-model="login_name" labelFloat/><br/>
            <mu-text-field label="密码" hintText="请输入密码" :errorText="pass_error" type="password" v-model="login_pass" labelFloat/><br/>
             <mu-flat-button label="登录" class="login-btn" primary  @click="login()"/>
          </div>
          <div v-if="activeTab === 'tab2'">
                 <mu-text-field label="手机号码" hintText="请输入手机号码" :errorText="reg_phone_error" v-model="reg_phone" labelFloat/><br/>
              <mu-text-field label="用户名" hintText="请输入用户名" :errorText="reg_name_error" v-model="reg_name" labelFloat/><br/>
              <mu-text-field label="密码" hintText="请输入密码" :errorText="reg_pass_error" type="password" v-model="reg_pass" labelFloat/><br/>
               <mu-text-field label="确认密码" hintText="请再次输入密码" :errorText="reg_passAgain_error" type="password" v-model="reg_pass_sure" labelFloat/><br/>
                 <mu-flat-button label="注册" class="reg-btn" primary @click="register()"/>

          </div>
  </div>
  <!-- 提示框 -->
  <mu-dialog v-if="dialog" :open="dialog" :title="dialogTitle" @close="close">
    {{dialogContent}}
    <mu-flat-button label="确定" slot="actions" primary @click="close()"/>
  </mu-dialog>


</div>
</template>

<script>
import backHeader from './common/backHeader.vue'
import host from '../apiConfig.js'
export default {
    components:{
        backHeader
    },
  data () {
    return {
        name_error:"",
        pass_error:"",
        reg_phone_error:'',
        reg_name_error:"",
        reg_pass_error:"",
        reg_passAgain_error:"",
        dialog:false,
        dialogTitle:'',
        dialogContent:'',
        title:"",
        activeTab: 'tab1',
        login_name:'',
        login_pass:'',
        reg_name:'',
        reg_phone:'',
        reg_pass:'',
        reg_pass_sure:'',

    }
  },
  activated:function(){
      this.name_error="",
      this.pass_error="",
      this.reg_phone_error='',
      this.reg_name_error="",
      this.reg_pass_error="",
      this.reg_passAgain_error="",
      this.dialog=false
      this.dialogTitle='',
      this.dialogContent='',
      this.title="",
      this.activeTab='tab1',
      this.login_name='',
      this.login_pass='',
      this.reg_name='',
      this.reg_phone='',
      this.reg_pass='',
      this.reg_pass_sure=''
  },
  methods: {
    open () {
        this.dialog = true
    },
    close () {
        this.dialog = false;
    },
    handleTabChange (val) {
      this.activeTab = val
    },
    handleActive () {
    },
    register (){
        var _this =this;
        if(_this.reg_pass!==_this.reg_pass_sure){
            _this.reg_passAgain_error="两次输入密码不一致"
            return;
        }
        _this.$http.get(host.apiHost+'addUser.do?phone='+_this.reg_phone+'&username='+_this.reg_name+'&password='+_this.reg_pass)
        .then(function(res){
            console.log(res.body);
            if(res.body!=0){
                // 注册成功
                _this.$store.state.userid = res.body.userid ;
                _this.$store.state.username = res.body.username;
                _this.$router.push({path:"/user"});
            }else{
                // 注册失败
                _this.reg_phone="注册失败，请确认之后重试";
            }

        })
        .catch(function(res){
            console.log(res);
            _this.dialog=true;
            _this.dialogTitle="服务器繁忙";
        })
    },
    login(){
        var _this=this;
        this.$http.get(host.apiHost+'login.do?phone='+this.login_name+'&password='+this.login_pass)
        .then(function(res){
            console.log(res);
            if(res.body=="wrong"){
                _this.pass_error="密码错误"
                _this.name_error=""
            }else if(res.body=="no-user"){
                _this.pass_error=""
                _this.name_error="此账号未注册"
            }else{
                _this.pass_error="";
                _this.name_error="";
                this.$store.state.userid = res.body.userid;
                this.$store.state.username = res.body.username;
                window.history.go(-1);
            }

        })
        .catch(function(res){
            console.log(res);
            _this.dialog=true;
            _this.dialogTitle="服务器繁忙";
        })
    }
  }
}
</script>
<style lang="scss" >

.log_reg_form{
    width:80%;
    margin:100px auto;
    .mu-tabs{
        background-color: #fff;
        margin-bottom: 30px;
        .mu-tab-link{
            color:#2196f3;
            font-size: 20px;
        }
        .mu-tab-link-highlight{
        background-color: #2196f3;
        }
    }

}
.mu-text-field{
    margin-bottom: 20px !important;
}
.login-btn ,.reg-btn,.mu-flat-button-label{
    background-color: #2196f3;
    color:#fff;
    width:256px;
    border-radius:5px;
}
.mu-dialog-wrapper .mu-dialog{
    width:60%;
    font-size:15px;
}
.mu-dialog-wrapper .mu-flat-button-label{
    width:60px;
    line-height:25px;
    height:25px;
}

.blue-line {
    background-color: #2196f3;
}


</style>
