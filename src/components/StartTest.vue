<template>
    <div id="StartTest">
        <div id="content">

            <div id="head">单选题</div>

            <div v-for="(item,index) in tableData" :key="item.id">
                <ul>
                    <li> {{ item.id }}.{{ item.题目名称 }} </li>
                    <hr>
                    <li>
                        <el-radio-group v-model="item[index]" @change="handle2(index)">
                            <el-radio :label="1">{{ item.选项A }}</el-radio><br>
                            <el-radio :label="2">{{ item.选项B }}</el-radio><br>
                            <el-radio :label="3">{{ item.选项C }}</el-radio><br>
                            <el-radio :label="4">{{ item.选项D }}</el-radio><br>
                        </el-radio-group>
                    </li>
                </ul>
            </div>

        </div>

        <div id="AnswerCard">
            <div id="CardHead">
                <el-tag type="success" style="width:100%;">答题卡</el-tag>
            </div>
            <div id="CardHead2">
                <button @click="handle()">{{ content }}</button>
            </div>

            <div style="width:100%; height:30px;margin-top:35px; padding:5px;">
                <span>单选题</span>
                <span>共{{ amount }}题</span>

                <hr style="width:90%;margin:5px auto">

                <div class="answerSheet">
                    <ul>
                        <li v-for="(item,index) in tableData" :key="index" :class="{ achieve: add[index] === index }">{{ index+1 }}</li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
export default {
    name:'StartTest',
    data() {
        return {
            radio:'',
            add: [],
            clcok:'null',
            date: 3600,
            content:'开始考试',
            tableData:[],
        }
    },
    methods:{
        handle() {
            clearInterval(this.clock)
            this.clock = setInterval(()=> {
                this.date--
                this.content = this.date+'s后结束考试'
            },1000)
        },
        handle2(value) {
            
            this.add.push(this.tableData[value].id - 1)

        },

        datatest() {
            this.$axios.get("http://localhost:3000/exam")
                .then((res)=> {
                    this.tableData = res.data
                    console.log(res)
                    console.log(this.tableData)
                })
                .catch((res)=>{
                    console.log(res)
                })
        },
    },
    computed:{
        amount() {
            return this.tableData.length
        }
    },
    created() {
        this.datatest()
    },


}
</script>



<style scoped>
#content {
    width: 60%;
    height: 800px;
    border: 1px solid #CCC;
    margin-left: 5%;
    margin-top: 20px;
}
#head {
    font-size: 15px;
    padding: 10px;
    margin-top: 10px;
    background: #CCC;
}

#content ul {
    list-style: none;
    border-bottom: 1px solid #CCC;
    padding: 20px;
}
#content ul li {
    margin: 10px;
}
#content ul li label.el-radio{
    margin-top: 10px;
}

#AnswerCard {
    width: 23%;
    height: 300px;
    border: 1px solid #CCC;
    margin-top: -802px;
    margin-right: 10%;
    float: right;

}
#CardHead {
    width: 50%;
    float: left;
}
#CardHead span {
    text-align: center;
    font-size: 20px;
}
#CardHead2 {
    width: 50%;
    height: 30px;
    float: right;
}
#CardHead2 button {
    width: 100%;
    height: 32px;
    text-align: center;
    font-size: 20px;
    float: left;
}

.answerSheet ul {
    list-style: none;
    padding: 10px;
    text-align: left;
}
.answerSheet ul li {
    display: inline-block;
    margin: 3px 3px;
    height: 30px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #e4e4e4;
}

.achieve {
    background: #5d9cec;
    color: #FFF;
}

</style>