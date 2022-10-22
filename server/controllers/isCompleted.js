const db = require("../routes/db-config");

const isCompleted = (req,res)=>{
    const taskname = req.body.taskname
    db.query('update task set completed = 1 where taskname = ?',[taskname],(err,result)=>{
        if(err) throw err
        return res.json({status:1,message:'Task has been completed'})
    })

}
module.exports = isCompleted