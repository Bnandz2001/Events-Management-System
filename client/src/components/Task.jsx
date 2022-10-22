import React,{useEffect,useState} from 'react';
import Nav from './Nav';
import {useParams} from 'react-router-dom';
import axios from "axios";
import ShowTasks from "./ShowTasks";


const Task = ()=>{
    const [taskname,tname] = useState('')
    const [username,Uuser] = useState('')
    const [taskdescr,tdescr] = useState('')
    const [atype, updateType] = useState('danger')
    const [message, umessage] = useState('')
    const [alert, ualert] = useState({display: 'none'})
    let {event_id} = useParams();
    const [task,setTask] = useState({});


    useEffect(()=>{
        axios.get(`/api/getTask/${event_id}`).then((response) => {
            setTask(response.data)
        });
    });
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
            if(data.status) {sendMessage(data.message,'success');
                tname('');tdescr('');Uuser('')}
            else sendMessage(data.message)
        })
    }   
    return (
    <>
        <Nav/>
            <div className="row">
                <div className="col-sm-6">
                        <div className="card mx-4 mt-4">
                            <div className="card-body">
                                <h4 className="text-center">{task.title}</h4>
                                <p className="fs-6">Event Head: {task.rootuser}</p>
                                <p className="card-text">{task.descr}</p>
                                
                            </div>
                        </div>
                    </div>
                {/* <ShowTasks/> */}
                <div className="col-sm-6">
                <div className={`alert alert-${atype}`} style={alert} role="alert">
                    {message}
                </div>
                    <div className="card mx-5 mt-4">
                        <div className="card-body">
                            <h5 className="card-title">Add Volunteers</h5>
                            <div className="mb-3">
                                <label htmlFor="taskname"className="form-label">Task Name</label>
                                <input type="text" className="form-control" id="taskname" onChange={
                                    e => tname(e.target.value)}></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username"className="form-label">Username</label>
                                <input type="text" className="form-control" id="username" onChange={
                                    e => Uuser(e.target.value)}></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tdescr"className="form-label">Task Descrription</label>
                                <textarea className="form-control" id="tdescr" rows="3" value={taskdescr} onChange={
                                    e => tdescr(e.target.value)}> </textarea>
                            </div>
                            <button onClick={e=>submit(e)} className="btn btn-primary">Add Event</button>
                        </div>
                    </div>
                </div>
            </div>
    </>)
}
export default Task;