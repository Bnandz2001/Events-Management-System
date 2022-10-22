const db = require("../routes/db-config");

const deleteEvent = () => {
    if(!req.cookies.logUser) return res.join({status:0,message:'Please Login'})
    const user = jwt.verify(req.cookies.logUser,process.env.JWT_SECRET,(err,id) => {
        if(err) return null; else return id })
    if (user == null) return res.json({status:0,message:'login in again'})
    const{ id }=req.body
    db.query('DELETE FROM event WHERE event_id=?',[id],(err,result) =>{
        if(err) throw err
        return res.json({status:1,message:'Event deleted!'})
    })
}

module.exports = deleteEvent