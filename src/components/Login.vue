<template>
    <div id="login">

        <div id="denglu">

            <h3>在线考试系统登录入口</h3>

            <div id="div1">
              <form @submit="userInformation">
                <div id="login">
                  <label for="">学号</label>
                  <el-input v-model="username" placeholder="请输入学号"></el-input>
                  <label for="">密码</label>
                  <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
                </div>

                <div id="loginBtn">
                  <el-button type="primary" native-type="submit">登录</el-button><br>
                  <el-button type="primary"> <router-link to="/register">注册</router-link> </el-button>
                </div>

              </form>
            </div>

        </div>

    </div>
</template>



<script>
import transmit from '../transmit.js'

export default {
    name:'login',
    data() {
      return {
        username:'',
        password:''
      }
    },
    methods:{
        userInformation(e) {

          e.preventDefault() 

          //同级组件的传值 ， 传递给主页
          transmit.$emit('id' , this.username)
          

          let users = {
            username : this.username,
            password : this.password,
          }

          this.$axios.post("http://localhost:3000",users)
            .then((res) => {
              // console.log(res)

              if( res.data.state == 1 ) {
                this.$router.push( { path:"/home" } )
              } 
              else {
                alert('用户名或密码错误')
              }
            }) 
            .catch((err)=> {
              console.log(err)
            })

        }
       
    }
    
}
</script>


<style scoped>
#denglu {
    width: 500px;
    border: 1px solid black;
    margin: 200px auto;
    padding: 10px;
    background: #171717
}
#denglu h3 {
    display: inline-block;
    font-size: 20px;
    color: white;
    padding: 2px;
    margin-left:150px; 
}

#div1 {
    width: 80%;
    margin: 15px auto;
}
#login {
    width: 80%;
    margin: 10px auto;
    padding: 5px;
}
#login label {
  color: white;
}

#login div.el-input {
  width: 80%;
  margin: 5px;
}

#loginBtn button.el-button{
    width: 200px;
    margin: 5px 25%;
}
#loginBtn button.el-button a {
  display: inline-block;
  width: 150px;
  text-decoration: none;
  color: white;
}
</style>