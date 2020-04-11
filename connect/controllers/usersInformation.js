var dbConfig = require('../mysql/dbsql');


// 获取到mysql 的users表
getuser = (req , res) => {

    var sql = "select * from users";
    var sqlArr = [];

    var callBack = (err , data) => {

        if(err) {
            console.log('连接出错')
        }
        else {
            console.log(data)
            res.send(data)
        }

    }

    dbConfig.sqlConnect(sql , sqlArr , callBack)

}

// 学生登录接口
login = (req , res) => {
    
    let name = req.body.username    //  获取前端post的数据 账号和密码
    let pass = req.body.password
    let sql = `select * from userStudents where id=${name}`    // 查询mysql数据库里的用户的账号和密码

    let callBack = (err , data) => {
        if(err) {
            console.log(err)
        }
        else{

            let state = {}
            //   把post过来的数据与 mysql里的信息匹配 如果一样返回1 不一样返回0
            if(data[0].id == name && data[0].password == pass){
                state.state = 1
                res.json(state)
                console.log('成功')
            }
            else{
                state.state = 0
                res.json(state)
                console.log('失败')
            }

            console.log(data)
        }

    }

    console.log(name , pass)
    // res.send(data)
    dbConfig.sqlConnect(sql , [name , pass], callBack)
    
}


// 学生注册接口
register = (req , res) => {

    let id = req.body.id
    let name = req.body.name
    let spcailty = req.body.spcailty
    let password = req.body.password
    let sqlArr = []

    let sql = `insert into userStudents value (${id},'${name}','${spcailty}',${password})`

    let callBack = ( err , data ) => {
        if(err) throw err

        console.log('注册成功' , data.protocol41)

        let state = {}
        if(data.protocol41 == true) {
            state.state = 1
            res.json(state)
        }
        else {
            state.state = 0
            res.json(state)
        }
    }


    dbConfig.sqlConnect(sql , sqlArr , callBack)
}

// 主页考试入口
test = (req , res) => {
    let sql = `select * from 考试信息`
    let sqlArr = []

    let callBack = (err , data) => {
        if(err) throw err

        res.send(data)
    }

    dbConfig.sqlConnect(sql , sqlArr , callBack)
}

//开始考试接口
startTest = (req , res) => {
    let sql = `select * from 试卷一`
    let sqlArr = []

    let callBack = (err , data) => {
        if(err) throw err

        res.send(data)
    }

    dbConfig.sqlConnect(sql , sqlArr , callBack)
}

// 试题库
warehouse = (req , res) => {
    let sql = `select * from subject`
    let sqlArr = []
    
    let callBack = (err , data) => {
        if(err) throw err

        res.send(data)
    }

    dbConfig.sqlConnect(sql , sqlArr , callBack)
}


// 拿到前台的出题选项 ， 如考试科目，题目数量 进行随机出题
startPractice = (req , res) => {
    let subject = req.body.subject
    let num = req.body.num
    let sqlArr = []
    let sql = `select * from SubjectRadio where sub_id=${subject} order by rand() limit ${num}`    // 拿到前台提交的选择的题型和题目数量进行查询

    let callBack = (err , data) => {
        if (err) throw err

        console.log('出题成功')
        res.send(data)
    }
    dbConfig.sqlConnect(sql , sqlArr , callBack)
}

module.exports = {
    getuser,login,register,test,startTest,warehouse,startPractice
}