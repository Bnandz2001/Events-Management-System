import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import './nav.css';
const Nav = ()=>{
    const [logged, status] = useState(false)
    const [user,Uuser] = useState('')

    useEffect(()=>{
        fetch('/api/isLogged').then(res=>res.json()).then(data=>{
            if(data.status) {status(true);Uuser(data.user)}
            else status(false)

        })

    },[])

    return(
            <nav className="navbar navbar-expand-lg bg-light mb-5">
            <div className="container-fluid">
            <a className="navbar-brand" href="/">FIESTA <span style={{color: "black"}}>EVENTS</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#about">About</a>
                </li>
                {logged ? (<>
                            <li className="nav-item">
                            <span className="nav-link">{user}</span>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/todo">Tasks</a>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to='#' onClick={()=>fetch('/api/logout').then(res=>res.text()).then(data=>
                                document.location.replace('/login'))}>Logout</Link>
                            </li>  
                        </>):
                    <>
                        <li className="nav-item">
                        <Link className="nav-link" to='/Register'>Register</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to='/Login' >Login</Link>
                        </li>  
                    </>
                }
            </ul>
        </div>
    </div>
        </nav>
    )
}

export default Nav;