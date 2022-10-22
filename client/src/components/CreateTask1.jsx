import { useContext, useState } from "react"
import {eventContext} from "./Task1"
import './createtask.css'
const CreateTask1 = ()=>{

    const {updateType,umessage,ualert,runTaskUpdate,event_id} = useContext(eventContext)
    const [taskname,tname] = useState('')
    const [username,Uuser] = useState('')
    const [taskdescr,tdescr] = useState('')

    const sendMessage = (text,type='danger',time=5) => {
        updateType(type);
        umessage(text);
        ualert({display: 'block'})
        setTimeout(()=>{
            ualert({ display: 'none'})
        },time*1000);
    }
    const submit=e=>{
        e.preventDefault()
        if(taskname.length<3 || taskdescr.length <3 ) return sendMessage("PLease fill the form correctly")
        fetch('/api/addVolunteer',{method: 'POST' , body:JSON.stringify({taskname,taskdescr,username,event_id}),headers:{ 'Content-Type' :'application/json'}}).then(res => res.json()).then(data =>{
            if(data.status) {sendMessage(data.message,'success');runTaskUpdate(prev=>prev+1)
                tname('');tdescr('');Uuser('');}
            else sendMessage(data.message)
        })
    }   
    
    return(
            <div className="container">
                <div className="card card5">
                    <div className="card-body">
                        <form>
                            <h4 className="text">Add Tasks</h4>
                            <div className="mb-3">
                                <label htmlFor="eventname"className="form-label">Task </label>
                                <input type="text" className="form-control" id="eventname" value={taskname} onChange={
                                    e => tname(e.target.value)}></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username"className="form-label">Username</label>
                                <input type="text" className="form-control" id="username" value={username} onChange={
                                    e => Uuser(e.target.value)}></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="descr"className="form-label">Task descrription</label>
                                <textarea className="form-control" id="descr" roes="3" value={taskdescr} onChange={
                                    e => tdescr(e.target.value)}> </textarea>
                            </div>
                            <button onClick={e=>submit(e)} className="btn btn-primary">Add Task</button>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default CreateTask1