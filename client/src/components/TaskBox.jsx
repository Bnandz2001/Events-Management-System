import { useContext } from "react"
import { useState } from "react";
import { useEffect,memo } from "react"
// import { eventContext } from "./Task";


const TaskBox = () => {
    //const {eventUpdate} = useContext(eventContext);
    const [dataa,udata] = useState([])
    useEffect(() =>{
        fetch('/api/getTasks').then(res => res.json()).then(data => { if(data.status) udata(data.message) })
    },[])
    return(
        <>
            
            {   dataa === [] ? console.log(dataa):
                dataa.map(e =>(
                    <div className="card mx-3 mt-3" key={e.tid} style={{width: '17rem',background:'rgb(0,0,0,.04)'}} >
                        <div className="card-body" >
                            <h5 className="card-title">{e.taskname}</h5>
                            {/* <span style={{fontSize:'0.9rem'}} className="card-subtitle mb-2 text-muted">{e.data}</span> */}
                            <p className="card-text">{e.taskdescr}</p>   
                        </div>
                        
                    </div>)
                    
                    
                )
            }
        </>    
    )
}
export default memo(TaskBox)
