<template>
    <div id="homepage">

            <el-menu
                :default-active="activeIndex1"
                class="el-menu-demo"
                mode="horizontal"
                background-color="black"
                text-color="#fff"
                active-text-color="#ffd04b">

            <el-menu-item index="1">在线考试</el-menu-item>
            <el-menu-item> <i class="el-icon-user"></i>考生：<span>{{ name }}</span></el-menu-item>
            <el-menu-item><i class="el-icon-info"></i>学号：<span>{{ Cid }}</span></el-menu-item>
            <el-menu-item index="2" > <router-link to="/home" style="text-decoration: none;">主页</router-link> </el-menu-item>
            <el-menu-item index="3" ><router-link to="/" style="text-decoration: none;">退出</router-link></el-menu-item>
        </el-menu>

    </div>
</template>


<script>
import transmit from '../transmit.js'

export default {
    name:'homepage',
    data() {
        return {
            activeIndex1: '1',
            name:'',
            id:''
        }
    },
    computed:{
        Cid() {
            // 同级组件间的传值  来自login的传递
            transmit.$on('id' , value => {
                this.id = value
            })
            return this.id
        }
    }
  
}
</script>

<style scoped>

</style>