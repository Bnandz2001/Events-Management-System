import { useState } from "react";
import { useEffect,memo } from "react"
import Nav from './Nav';
//import axios from "axios";
import './todo.css'

const Todo = () => {
    const [dataa,udata] = useState([])
    const [atype, updateType] = useState('danger')
    const [message, umessage] = useState('')
    const [alert, ualert] = useState({display: 'none'})

    const sendMessage = (text,type='danger',time=5) => {
        updateType(type);
        umessage(text);
        ualert({display: 'block'})
        setTimeout(()=>{
            ualert({ display: 'none'})
            if(type === 'success') {document.location.replace('/todo')}
        },time*1000);
    }
    //const [isSubscribed, setIsSubscribed] = useState(false);
    useEffect(() =>{
        fetch('/api/userTasks').then(res => res.json()).then(data => { if(data.status) udata(data.message) })
    },[])

    const submit=f=>{
        const taskname = f.target.value
        fetch('/api/isCompleted',{method: 'POST' , body:JSON.stringify({taskname}),headers:{ 'Content-Type' :'application/json'}}).then(res => res.json()).then(data =>{
            if(data.status) sendMessage(data.message,'success')
            else sendMessage(data.message)
        })
    }
    
    return(
        <>
        <Nav/>
        

        <h6>Tasks Assigned</h6>
        <div className={`alert alert-${atype}`} style={alert} role="alert">
                    {message}
                </div>
        {   dataa === [] ? console.log(dataa):
                dataa.map(e =>(
                    
                    <div className="card10" key={e.tid} style={{width: '17rem',background:'rgb(0,0,0,.04)'}} >
                        <div className="card-body" >
                            <h4 className="titl">{e.taskname}</h4>
                            <span style={{fontSize:'0.9rem'}} className="card-subtitle mb-2 text-muted">{e.data}</span>
                            <p className="card-text">{e.taskdescr}</p>  
                            <div className="la">
                                <div className="la2">
                                    <input className="form-check-input mt-0" type="checkbox" value={e.taskname} aria-label="Checkbox for following text input" onChange={submit}></input>
                                    <label>Completed</label>
                                </div>
                            </div>
                        </div>
                        
                    </div>)
                    
                    
                    )
                }
        
        </>    
    )
}
export default memo(Todo)