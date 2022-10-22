const jwt = require('jsonwebtoken');
const db = require('../routes/db-config');

const addVolunteer = (req,res) =>{
    const {taskname,taskdescr,username,event_id} = req.body
    db.query('select id from userinfo where user = ?',[username],async(stop,chkuser) =>{
        if (stop) throw stop
        const user_id =  await chkuser[0].id
        db.query('insert into task(taskname,taskdescr,username,event_id,user_id) values (?,?,?,?,?)',[taskname,taskdescr,username,event_id,user_id], (err, result) => {
            if(err) throw err
            return res.json({status: 1,message:'Task has been added'})
        })
    })
}

module.exports = addVolunteer;