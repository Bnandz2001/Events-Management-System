const bcrypt = require('bcryptjs')
const db = require('../routes/db-config')
const register = async (req, res) =>{
    const {user,pass:rawPass,name,emailid} = req.body
    db.query('Select user from userinfo where user = ?',[user], async(stop, chkuser) => {
        if (stop) throw stop
        if (chkuser[0]) return res.json({status: 0,message:''})
        const pass =  await bcrypt.hash(rawPass,10)
        db.query('insert into userinfo(user,pass,name,emailid) values (?,?,?,?)',[user,pass,name,emailid], (err, result) => {
            if(err) throw err
            return res.json({status: 1,message:'User has been registered'})
        })
    })

}

module.exports = register