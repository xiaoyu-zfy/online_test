<template>
    <div id="emendation">

        <div id="change">

            <h3>修改密码</h3>
            
            <div id="inchange">
                <label for="">原始密码</label>
                <el-input v-model="password" placeholder="请输入原始密码" show-password></el-input><br>

                <label for="">新的密码</label>
                <el-input v-model="newpassword" placeholder="请输入新密码" show-password></el-input><br>

                <el-button type="primary"> 确定 </el-button>
                <el-button type="primary"> <router-link to="/home">返回</router-link> </el-button>
                
            </div>

            
        </div>

    </div>

    
</template>


<script>
export default {
    name:'emendation',
    data() {
        return {
            password:'',
            newpassword:''
        }
    }
    
}
</script>



<style scoped>
#change {
    width: 50%;
    margin: 50px auto;
    background: #171717;
}
#inchange {
    width: 80%;
    margin: 15px 20%;
    padding: 15px;
}
#inchange button.el-button {
    margin-left: 15%;
}
#inchange button.el-button a {
    text-decoration: none;
    color: white;
}
#change h3 {
    margin-left: 40%;
    padding: 10px;
    color: white;
}
#change label {
    color: white;
    margin-left: 1px;
}
#change div.el-input {
  width: 50%;
  margin: 10px;
  margin-left: 10px;
}
</style>