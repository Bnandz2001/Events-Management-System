const jwt = require('jsonwebtoken')
const db = require('../routes/db-config')

const userTasks = (req,res) => {
    
    if(!req.cookies.logUser) return res.json({ status:0 })
    const user = jwt.verify(req.cookies.logUser,process.env.JWT_SECRET,(err,id) => {
        if(err) return null; else return id })
    if (user == null) return res.json({status:0})
    db.query('select * from task where user_id=? and completed =0',[user.id],(err,result)=>{
        if(err) throw err
        return res.json({status:1, message:result })
        
    })
}

module.exports = userTasks