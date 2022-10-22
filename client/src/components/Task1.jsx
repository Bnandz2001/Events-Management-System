import { createContext, useState ,useEffect} from "react"
import CreateTask1 from "./CreateTask1"
import Nav from "./Nav"
import ShowTask1 from "./ShowTask1"
import {useParams} from 'react-router-dom';
import axios from "axios";
import './createtask.css'
export const eventContext = createContext();

const Task1=()=>{
    const [atype, updateType] = useState('danger')
    const [message, umessage] = useState('')
    const [alert, ualert] = useState({display: 'none'})
    const [taskUpdate, runTaskUpdate] = useState(0)
    let {event_id} = useParams();
    const [task,setTask] = useState({});

    useEffect(()=>{
        axios.get(`/api/getTask/${event_id}`).then((response) => {
            setTask(response.data)
            console.log(task.title)
        });
    });

    return(
        <>
            <Nav />
                    
                <eventContext.Provider value={{updateType,umessage,ualert,runTaskUpdate, taskUpdate,event_id}}>
                    <div className={`alert alert-${atype}`} style={alert} role="alert">
                        {message}
                    </div>
                    <div className="container">
                        <div className="card card6">
                            <div className="card-body">
                                <h4 className="text-center">{task.title}</h4>
                                <p className="fs-6">Event Head: {task.rootuser}</p>
                                <p className="card-text">{task.descr}</p>
                                <div className="progress">
                                    <div className="progress-bar w-50" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <CreateTask1 />
                    <ShowTask1/>
                </eventContext.Provider>    
        </>
    )
}
export default Task1