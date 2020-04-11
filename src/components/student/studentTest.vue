<template>
    <div id="sutdent_test_Informatin">
        <div id="table">
            <h4 style="color:red"> 目前题库已有的科目和考试如下 </h4>

                <el-tabs :tab-position="tabPosition" style="height: 200px;">
                    <el-tab-pane label="考试信息">
                        <el-table
                            :data="tableData1"
                            border
                            style="width: 100%">

                            <el-table-column
                            prop=""
                            label="考试名称"
                            width="">
                            </el-table-column>

                            <el-table-column
                            prop=""
                            label="考试时间"
                            width="200">
                            </el-table-column>

                            <el-table-column
                            prop=""
                            label="考试科目">
                            </el-table-column>

                            <el-table-column
                            prop=""
                            label="考试时长">
                            </el-table-column>

                            <el-table-column
                            prop=""
                            label="试卷总分">
                            </el-table-column>

                            <el-table-column
                            prop=""
                            label="考试类型">
                            </el-table-column>

                            <el-table-column
                            prop=""
                            label="选择">
                            <el-button type="text">开始考试</el-button>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>

                    <el-tab-pane label="题目练习">
                        <el-table
                            :data="tableData2"
                            border
                            style="width: 100%">

                            <el-table-column
                            prop="sub_id"
                            label="科目编号"
                            width="100">
                            </el-table-column>

                            <el-table-column
                            prop="sub_name"
                            label="科目名称"
                            width="200">
                            </el-table-column>

                            <el-table-column
                            prop=""
                            label="题型"
                            width="200">
                            单选题
                            </el-table-column>

                            <el-table-column
                            prop=""
                            label="选择"
                            width="200">
                            <el-button type="text" @click="show()"> 出题选项 </el-button>
                            </el-table-column>

                            <el-table-column
                            prop=""
                            label="说明"
                            width="200">
                            温馨提示：点击出题选项，就可以进行
                            出卷了哦
                            </el-table-column>
                        </el-table>


                        <div v-if="showDiv" id="edit">
                            <form @submit="startPractice"> 
                                <div>
                                    <label for="">出题科目:</label>
                                    <el-select v-model="value" placeholder="请选择">
                                        <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                                
                                <div>
                                    <label for="">出题题型:</label>
                                    <el-radio v-model="radio" label="1">单选题</el-radio>
                                </div>

                                <div>
                                    <label for="">出题数目:</label>
                                    <el-radio-group v-model="radio2">
                                        <el-radio :label="2">20道</el-radio>
                                        <el-radio :label="3">30道</el-radio>
                                        <el-radio :label="4">40道</el-radio>
                                        <el-radio :label="5">50道</el-radio>
                                    </el-radio-group>
                                </div>

                                <div>
                                    <label for="">测试时间:</label>
                                    <el-time-select
                                        placeholder="起始时间"
                                        v-model="startTime"
                                        :picker-options="{
                                        start: '08:30',
                                        step: '00:15',
                                        end: '18:30'
                                        }">
                                    </el-time-select>
                                    <el-time-select
                                        placeholder="结束时间"
                                        v-model="endTime"
                                        :picker-options="{
                                        start: '08:30',
                                        step: '00:15',
                                        end: '18:30',
                                        minTime: startTime
                                        }">
                                    </el-time-select>
                                </div>

                                <div style="width:80%">
                                    <el-alert
                                    title="选择完成后点击开始测试即可进行在线考试哦！"
                                    type="info">
                                </el-alert>
                                </div>
                            
                                <div>
                                    <el-button type="primary" native-type="submit"> 开始测试 </el-button>
                                </div>
                            </form>     
                        </div>

                    </el-tab-pane>
                </el-tabs>

        </div>

    </div>
</template>


<script>
import transmit from '../../transmit'

export default {
    name:'sutdent_test_Informatin',
    data() {
        return {
            tableData1:[],
            tableData2:[],
            tabPosition: 'top',
            showDiv:false,
            options:[
                {
                    value:1,
                    label:'数学'
                },
                {
                    value:2,
                    label:'语文'
                },
                {
                    value:3,
                    label:'英语'
                },
            ],
            value:'',
            radio:'1',
            radio2:'',
            startTime: '',
            endTime: '',
            arr:[]
        }
    },
    created(){
        this.practice()
    },
    methods:{
        practice() {
            this.$axios.get("http://localhost:3000/student")
                .then((res)=> {
                    this.tableData2 = res.data
                    // console.log(res)
                })
                .catch((err)=>{
                    console.log(err)
                })
        },
        show() {
            this.showDiv = true
        },

        startPractice(e) {

             e.preventDefault() 

            let select = {
                subject : this.value,
                num : this.radio2
            }

            this.$axios.post("http://localhost:3000/startPractice" , select)
                .then( res=> {
                    // console.log(res.data)
                    this.$router.push( { path:"/practice" } )
                    this.arr = res.data
                    transmit.$emit('Array'  , this.arr)
                    
                })
                .catch(err=>{
                    console.log(err)
                })

        }
    },
    
}
</script>




<style scoped>
#table {
    width: 90%;
    margin: 50px auto;
}

#edit {
    width: 60%;
    border: 1px solid #CCC;
    margin: 30px 0;
    padding: 5px;
}
#edit div {
    margin: 10px;
}
</style>