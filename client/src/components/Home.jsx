import { createContext, useState } from "react"
import CreateEvent from "./CreateEvent"
import Nav from "./Nav"
import Login from "./Login2"
import { Link } from 'react-router-dom'
import { useEffect } from 'react'


import ShowEvents from "./ShowEvents"
import About from "./About"
import Contact from "./Contactus"



export const userContext = createContext();

const Home=()=>{
    const [atype, updateType] = useState('danger')
    const [message, umessage] = useState('')
    const [alert, ualert] = useState({display: 'none'})
    const [eventUpdate, runEventUpdate] = useState(0)

    ////////

    const [logged1, status1] = useState(false)
    const [user1,Uuser1] = useState('')

    useEffect(()=>{
        fetch('/api/isLogged').then(res=>res.json()).then(data=>{
            if(data.status) {status1(true);Uuser1(data.user)}
            else status1(false)
            
        })

    },[])
    return(
        <>
            <Nav />
                    
                <userContext.Provider value={{updateType,umessage,ualert,runEventUpdate, eventUpdate}}>
                    <div className={`alert alert-${atype}`} style={alert} role="alert">
                        {message}
                    </div>
                    
                    <Login/>
                    <About/>
                    {logged1 ? (<>
                        <section id="even">

                            <CreateEvent />
                            <ShowEvents/>
                            <Contact/>

                        </section>
                        </>):
                    <>
                            <Contact/>
                      
                    </>
                }
                   

                </userContext.Provider>    
        </>
    )
}
export default Home