const jwt = require('jsonwebtoken')
const db = require('../routes/db-config')

const getTasks = (req,res) => {
    if(!req.cookies.logUser) return res.json({ status:0 })
    const user = jwt.verify(req.cookies.logUser,process.env.JWT_SECRET,(err,id) => {
        if(err) return null; else return id })
    if (user == null) return res.json({status:0})
    db.query('select user from userinfo where id=?',[user.id],async(stop,chkuser)=>{
        if(stop) throw stop
        const root = await chkuser[0].user
        db.query('select * from task where username=?',[root],(err,result)=>{
            if(err) throw err
            
            return res.json({status:1, message:result })
        })
    })
}

module.exports = getTasks