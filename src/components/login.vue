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
            <mu-text-field label="用户名" hintText="请输入用户名" v-model="login_name" labelFloat/><br/>
            <mu-text-field label="密码" hintText="请输入密码" type="password" v-model="login_pass" labelFloat/><br/>
             <mu-flat-button label="登录" class="login-btn" primary  @click="login()"/>
          </div>
          <div v-if="activeTab === 'tab2'">
              <mu-text-field label="用户名" hintText="请输入用户名" v-model="reg_name" labelFloat/><br/>
              <mu-text-field label="密码" hintText="请输入密码" type="password" v-model="reg_pass" labelFloat/><br/>
               <mu-text-field label="确认密码" hintText="请再次输入密码" type="password" v-model="reg_pass_sure" labelFloat/><br/>
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
export default {
    components:{
        backHeader
    },
  data () {
    return {
        dialog:false,
        dialogTitle:'',
        dialogContent:'',
        title:"",
        activeTab: 'tab1',
        login_name:'',
        login_pass:'',
        reg_name:'',
        reg_pass:'',
        reg_pass_sure:'',

    }
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
        // alert(this.reg_name+","+this.reg_pass+","+this.reg_pass_sure)
    },
    login(){
        this.open();
        // alert(this.login_name+","+this.login_pass)
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
