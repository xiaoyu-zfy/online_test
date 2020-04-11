<template>
    <div id="myTest">
        <div id="table">
            <h4 style="color:red">目前老师已发布的所有考试信息有：</h4>

            <hr>

            <el-table
                :data="tableData"
                style="width: 100%">

                <el-table-column
                prop="考试名称"
                label="考试名称"
                width="">
                </el-table-column>

                <el-table-column
                prop="考试时间"
                label="考试时间"
                width="200">
                </el-table-column>

                <el-table-column
                prop="考试科目"
                label="考试科目">
                </el-table-column>

                <el-table-column
                prop="考试时长"
                label="考试时长">
                </el-table-column>

                <el-table-column
                prop="试卷总分"
                label="试卷总分">
                </el-table-column>

                <el-table-column
                prop="考试类型"
                label="考试类型">
                </el-table-column>

                <el-table-column
                prop=""
                label="选择">
                <el-button type="text"> <router-link to="/exam" >开始考试</router-link> </el-button>
                </el-table-column>

            </el-table>

        </div>
    </div>
</template>


<script>
export default {
    name:'myTest',
    data() {
        return {
            tableData:[]
        }
    },
    created() {
        this.datatest()
    },
 
    methods:{
        datatest() {
            this.$axios.get("http://localhost:3000/home")
                .then((res)=> {
                    this.tableData = res.data
                    // console.log(res)
                })
                .catch((err)=>{
                    console.log(err)
                })
        }
    },
}
</script>



<style scoped>
#myTest {
    width: 100%;
    margin: 5% auto;
}

#table {
    width: 100%;
    margin: 50px auto;
}

#table button a {
    text-decoration: none;
}
</style>