<template>
  <div class="login_wrap">
     <div class="login_c">
      <img src="@/assets/logo.png" class="logo">
      <div class="login_box">
          <div class="login_L">
             <img src="@/assets/img1.png" width="560"> 
          </div>
         <div class="login_R">
            <span class="login_title">赢商会-会务管理系统</span>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" >
                <el-form-item label="" prop="name" class="form-item">
                    <el-input
                     v-model="ruleForm.name"
                     prefix-icon="el-icon-user"
                     autocomplete="off"
                     placeholder="请输入用户名"
                     ></el-input>
                </el-form-item>
               <el-form-item label="" prop="pass" class="form-item">
                    <el-input 
                     v-model="ruleForm.pass"
                      prefix-icon="el-icon-lock"
                    autocomplete="off"
                    placeholder="请输入密码"
                    show-password
                     ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button
                    @click="login" 
                    class="sub">登 录</el-button>
                </el-form-item>
            </el-form>
          </div>
      </div>
     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm:{
          name:'',
          pass:''
      },
      rules:{
         name:[{
              required: true,
              type: 'string',
              message: '请输入用户名',
              trigger: ['blur', 'change']
         }],
         pass:[
             {
               required: true,
               message: '请输入密码',
               trigger: ['blur', 'change']
             }
         ]
      }
    };
  },
  methods: {
    login:function(){
        let self = this;
        this.$refs['ruleForm'].validate((vaild)=>{
            if(vaild){
                self.$router.push('/home')
            }else{
                //  alert('失败')
                 return false;
            }
        })
    }
  },
};
</script>
<style lang="scss" scoped>
 .login_wrap{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    background:url(~@/assets/login_bg.jpg) no-repeat;
    background-size: cover;
    background-attachment: fixed;
 }
 .login_c{
    border-radius: 5px;
    background: #fff;
    width: 1100px;
    margin: 0 auto;
    height: 542px;
    position: relative;

    margin-left: -550px;
    top: 130px;
    left: 50%;
 }
 .login_c .logo{
	position: absolute;
	top: -48px;
	text-align: center;
	width:100px;
	left:50%;
	margin-left:-50px;
 }
 .login_box{
    width: 1000px;
	margin: 0 auto;
	overflow: hidden;
	padding: 80px 0 50px 0;
 }
 .login_L{
	width: 560px;
	float: left;
}
.login_R{
	float: left;
    margin-top: 50px;
    margin-left: 100px;
    width: 300px;
}
.login_title{
    display: block;
	letter-spacing: 3px;
	font-size: 24px;
    color: #313131;
    margin-bottom: 20px;
}
.sub{
   width: 100%;
	font-size: 18px;
	color:#fff;
	background: #f29c03;
	border: 1px solid transparent; 
}
.form-item{
    margin: 30px 0;
}
</style>