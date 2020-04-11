<template>
    <div id="detail">

        <div id="lie">
            <ul>
                <li style="background:#FF8247">考试中心</li>
                <li><el-link type="warning"> <router-link to="/student">我的考试</router-link> </el-link></li>
                <li><el-link type="warning"> <router-link to="/record">考试记录</router-link> </el-link></li>
                <li><el-link type="warning"> <router-link to="/grade">成绩查询</router-link> </el-link></li>

                <li style="background:#FF8247">个人信息</li>
                <li><el-link type="success"><router-link to="/change">修改密码</router-link> </el-link></li>
                <li><el-link type="success">账户信息</el-link></li>
            </ul>
        </div>

        <div id="lie2">
            <my-Test></my-Test>
        </div>
    </div>

</template>



<script>
import myTest from './myTest'

export default {
    name:'detail',
    components: {
        myTest
    },
    data() {
        return {

        }
    }
}
</script>



<style scoped>
#lie {
    width: 8%;
    height: 800px;
    background: black;
    margin: 0px 0px;
}

#lie ul {
    width: 100%;
    color: blanchedalmond;
}
#lie ul li {
    padding: 8px 20px;
}
#lie ul li a {
    text-decoration: none;
    color: white;
}

#lie2 {
    width: 80%;
    float: right;
    margin-right: 100px;
    margin-top: -50%;

}
</style>