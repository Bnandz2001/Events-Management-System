const db = require('../routes/db-config')


const getTask = (req,res)=>{
    const event_id = req.params.event_id
    db.query('select * from event where event_id=?',[event_id],(err,result)=>{
        if(err) throw err
        return res.json(result[0])
    }) 
}

module.exports = getTask