const jwt = require('jsonwebtoken');
const db = require('../routes/db-config');
const createEvent = (req,res) => {
    if(!req.cookies.logUser) return res.json({status:0,message:'Please Login'})
    const users = jwt.verify(req.cookies.logUser,process.env.JWT_SECRET,(err,id) => {
        if(err) return null; else return id })
    if (users == null) return res.json({status:0,message:'login in again'})
    const {title,descr} = req.body
   /* db.query('select user from userinfo where id = ?',[users.id],(err,res) =>{
        if(err) throw err ;else (root = res[0].user);
    })
    console.log(users);
    db.query('insert into event(title,user_id) values (?,?)',[title,users.id], (err, result) => {
        if(err) throw err
        return res.json({status: 1,message:'Event has benn aded'})
    })*/
    db.query('select user from userinfo where id = ?',[users.id], async(stop, chkuser) => {
        if (stop) throw stop
        const root =  await chkuser[0].user
        db.query('insert into event(title,user_id,rootuser,descr) values (?,?,?,?)',[title,users.id,root,descr], (err, result) => {
            if(err) throw err
            return res.json({status: 1,message:'Event has benn aded'})
        })
    })
}

module.exports = createEvent