<template>
    <div id="register">
        <div id="zhuce">

            <h2>学生用户注册</h2>
            
            <form @submit="register">
            <div id="userId">
                <label for="">学号</label>
                <el-input v-model="id" placeholder="请输入你的学号"></el-input>

                <label for="">姓名</label>
                <el-input v-model="name" placeholder="请输入你的名字"></el-input>

                <label for="">专业</label>
                <el-input v-model="spcailty" placeholder="请输入你的专业"></el-input>

                <label for="">密码</label>
                <el-input v-model="password" placeholder="请输入密码" show-password></el-input>
            </div>

            <div id="determine">
                    <el-button type="primary" native-type="submit">确认注册 </el-button>
                </div>
            </form>

        </div>

        <div id="alert" v-if="show">
             <el-alert
                title="注册成功"
                type="success"
                description="您好，您已成功注册本系统，赶紧登录参加考试吧！点击下方的返回按钮即可登录参加考试哦！"
                show-icon>
            </el-alert>

            <el-button type="primary"> <router-link to="/">返回主页</router-link> </el-button>
        </div>

    </div>
</template>


<script>
export default {
    name:'register',
    data() {
        return {
            id:'',
            name:'',
            spcailty:'',
            password:'',
            show: false,
        }
    },
    methods:{
        register(e) {
            e.preventDefault()

            let user = {
                id: this.id,
                name: this.name,
                spcailty: this.spcailty,
                password: this.password 
            }

            if(this.id == '' || this.name == ''|| this.spcailty == '' || this.password == ''){
                alert('请输入完整信息')
            }
            else {
                this.$axios.post("http://localhost:3000/register" , user)
                    .then((res) => {
                        console.log(res)

                        if( res.data.state == 1 ) {

                            this.show = true
                        }
                        else {
                            alert('请输入正确的信息')
                        }

                    })
                    .catch(err=>{
                        console.log(err)
                    })

            }
        }
    }
}
</script>



<style scoped>
#zhuce {
    width: 35%;
    background: #171717;
    margin: 50px auto;
}
#zhuce h2 {
    color: white;
    display: inline-block;
    margin-left: 35%;
    margin-top: 10px;
}

#zhuce div.el-input{
    width: 90%;
    margin-top: 20px;
}

#userId {
    padding: 20px;
}
#userId label {
    color: white;
    font-size: 20px;
}

#determine {
    width: 100%;
    padding: 10px;
}
#determine button.el-button {
    display: inline-block;
    margin-left: 35%;
}
#determine button.el-button a {
    display: inline-block;
    text-decoration: none;
    color: white;
    width: 150px;
}

#alert {
    width: 500px;
    height: 100px;
    margin: 20px auto;
}
#alert button.el-button {
    display: inline-block;
    margin-left: 36%;
    margin-top: 5px;
}
#alert button.el-button a {
    display: inline-block;
    text-decoration: none;
    color: white;
}

</style>