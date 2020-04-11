<template>
    <div id="Practice">
        <div id="content">

            <div id="head">单选题</div>

            <div v-for="(item,index) in GetTable" :key="item.Rad_id">
                <ul>
                    <li> {{ index+1 }}.{{ item.Rad_name }} </li>
                    <hr>
                    <li>
                        <el-radio-group v-model="radio[index]" @change="handle2(item.Rad_id , radio , index)">
                            <el-radio :label="'A'">A.{{ item.option_A }}</el-radio><br>
                            <el-radio :label="'B'">B.{{ item.option_B }}</el-radio><br>
                            <el-radio :label="'C'">C.{{ item.option_C }}</el-radio><br>
                            <el-radio :label="'D'">D.{{ item.option_D }}</el-radio><br>
                        </el-radio-group>
                    </li>
                </ul>
            </div>

            <div style="width:100px; margin:10px auto">
                <el-button type="primary" @click="submit">交卷</el-button>
            </div>

        </div>


        <div id="AnswerCard">
          
            <div id="CardHead">
                <el-tag type="success" style="width:100%;">答题卡</el-tag>
            </div>

            <div style="width:100% ;margin-top:10px; padding:5px;">

                <div style=" width:80%; margin: 0px auto">
                    <span>单选题</span>
                    <span>共{{ amount }}题</span>
                </div>

                <hr style="width:90%;margin:5px auto">

                <div class="answerSheet">
                    <ul>
                        <li v-for="(item,index) in GetTable" :key="index" :class="{ achieve: add.includes(item.Rad_id) }">{{ index+1 }}</li>
                    </ul>
                </div>
            </div>

        </div>

    </div>
</template>


<script>
import transmit from '../../transmit'

export default {
    name:'Practice',
    data() {
        return {
            radio:[],
            add: [],
            answer:[],
            tableData:[],
            score:0,
            obj:{},
            n:0
            
        }
    },

    methods:{
        handle2(Rad_id , value , index )  {
            this.add.push(Rad_id)
            // 在答题卡的add里用includes方法 查找数组里面有没有传进去的这个Rad_id 有就返回true ，返回true则添加一个calss渲染答题卡
            this.n = this.n + 1

            this.obj = {
                id : Rad_id ,    
                choiceAnswer : value[index] ,
                rightAnswer : this.GetTable[index].answer
            }

            this.answer.push(this.obj)      // 点击当前选项 把选项的答案对象添加到数组里
            // console.log(this.answer)
            
           
            if( this.answer.length == index+1 ) {     // 判断当数组里只有当前索引值的个数时，index也就是题目的序号第几题，
                console.log('数据不重复')
            }
            else {
                //当重复点击了某一题的答案选项后，选项的Rad_id 是唯一的，所以重复点击会出现一题多个答案都在数组里
                if(this.answer[index].id == this.answer[index+1].id ) {      

                    let arr = this.answer.lastIndexOf(this.answer[index])   // 找到前一次点击的选项的索引
                    console.log('数据重复')
                    this.answer.splice(arr , 1 )            // 删除当前题目答案数组里前一次点击的选项
                }
            }
        

        },
        submit() {
            console.log(this.answer)
            this.answer.forEach((value , index) => {
               
               if( value.choiceAnswer  == value.rightAnswer ) {
                   this.score++
               }
               console.log(value)
            });

            console.log(this.score)  //  计算得分
        }

    },
    computed:{
        amount() {
            return this.GetTable.length
        },
        GetTable(){
            // 踩坑：组件之间传值，如果要渲染道data里  返回值不能用this
            transmit.$on('Array', (val) =>{
                // console.log(val)
                transmit.tableData = val
                // console.log(transmit.tableData)
            })
            return transmit.tableData
        }
    }
}
</script>



<style scoped>
#content {
    width: 60%;
    border: 1px solid #CCC;
    margin-left: 5%;
    margin-top: 20px;
    float: left;
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
    margin-right: 10%;
    margin-top: 20px;
    float: right;

}
#CardHead {
    width: 100%;
}
#CardHead span {
    text-align: center;
    font-size: 25px;
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