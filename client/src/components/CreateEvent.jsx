import { useContext, useState } from "react"
import {userContext} from "./Home"
import './createevent.css'
const CreateEvent = ()=>{

    const {updateType,umessage,ualert,runEventUpdate} = useContext(userContext)
    const [title,Ueventname] = useState('')
    const [descr,Udescr] = useState('')
    const [task,Utask] = useState('')
    const [user,Uuser] = useState('')

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
        if(title.length<3 || descr.length <3 ) return sendMessage("PLease fill the form correctly")
        fetch('/api/createEvent',{method: 'POST' , body:JSON.stringify({title,descr}),headers:{ 'Content-Type' :'application/json'}}).then(res => res.json()).then(data =>{
            if(data.status) {sendMessage(data.message,'success');runEventUpdate(prev=>prev+1)
                Ueventname('');Udescr('')}
            else sendMessage(data.message)
        })
    }
    
    return(
            <div className="container">
                <br></br>
                <br></br>
                <h1 className="create">CREATE <span>EVENT</span></h1>
                <div className="card card1">
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="eventname"className="form-label">Event Title</label>
                                <input type="text" className="form-control" id="eventname" value={title} onChange={
                                    e => Ueventname(e.target.value)}></input>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Event Date</label>
                                <input type="date" className="form-control" ></input>
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="descr"className="form-label">Event descrription</label>
                                <textarea className="form-control" id="descr" roes="3" value={descr} onChange={
                                    e => Udescr(e.target.value)}> </textarea>
                            </div>
                            <button onClick={e=>submit(e)} className="btn btn-primary">Add Event</button>
                            {/* <hr/>
                            <div className="mb-3">
                                <label htmlFor="taskname"className="form-label">Task</label>
                                <input type="text" className="form-control" id="eventname" value={task} onChange={
                                    e => Utask(e.target.value)}></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="user"className="form-label">User</label>
                                <input type="text" className="form-control" id="eventname" value={user} onChange={
                                    e => Uuser(e.target.value)}></input>
                            </div>   
                            <button onClick={e=>submit(e)} className="btn btn-primary">Add Task</button> */}
                        </form>
                       
                    </div>

                </div>
               
            </div>
    )
}

export default CreateEvent