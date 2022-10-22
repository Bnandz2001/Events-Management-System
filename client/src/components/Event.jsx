import { useContext } from "react"
import { useState } from "react";
import { useEffect,memo } from "react"
import { userContext } from "./Home";
import {useNavigate} from 'react-router-dom';

const Event = () => {
    const {eventUpdate} = useContext(userContext);
    const [dataa,udata] = useState([])
    let navigate = useNavigate();
    useEffect(() =>{
        fetch('/api/getEvents').then(res => res.json()).then(data => { if(data.status) udata(data.message) })
    },[eventUpdate])
    return(
        <>
            
            {   dataa === [] ? console.log(dataa):
                dataa.map(e =>(
                    <div className="card mx-3 mt-3" key={e.event_id} style={{width: '17rem',background:'rgb(0,0,0,.04)'}} >
                        <div className="card-body" >
                            <h5 className="card-title">{e.title}</h5>
                            <span style={{fontSize:'0.9rem'}} className="card-subtitle mb-2 text-muted">{e.data}</span>
                            <p className="card-text">{e.descr}</p>   
                           
                            <button className="btn btn-primary" onClick={()=>{navigate(`/task/${e.event_id}`)}} >Show More</button>
                        </div>
                        
                    </div>)
                    
                    
                )
            }
        </>    
    )
}
export default memo(Event)
