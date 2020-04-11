

import Login from './components/Login.vue'     //  登录框页面
import Register from './components/Register.vue'    //注册页面
// import HomePage from './components/HomePage.vue'         
import PersonalDetails from './components/PersonalDetails.vue'
import StartTest from './components/StartTest.vue'


//学生模块路由
import studentTest from './components/student/studentTest.vue'
import Practice from './components/student/Practice.vue'

import TestRecord from './components/student/TestRecord.vue'
import SelectGrade from './components/student/SelectGrade.vue'
import Emendation from './components/student/Emendation.vue'






export default [
    { path:"/" , component:Login },
    { path:"/register" , component:Register },
    { path:"/home" , component:PersonalDetails },
    { path:"/exam" , component:StartTest },


    // 学生模块
    { path:"/student", component: studentTest },
    { path:"/practice" , component:Practice },
    { path:"/record", component: TestRecord },
    { path:"/grade", component: SelectGrade },
    { path:"/change", component: Emendation },
]