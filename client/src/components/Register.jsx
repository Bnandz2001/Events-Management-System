import { useState } from "react"
import { Link } from 'react-router-dom'
import Nav from './Nav';
import './register.css'

const Register = () =>{

    const [emailid,Uemailid] = useState('')
    const [user,Uuser] = useState('')
    const [name,Uname] = useState('')
    
    const [pass,Upass] = useState('')
    const [cpass,Ucpass] = useState('')
    const [atype, updateType] = useState('danger')
    const [message, umessage] = useState('')
    const [alert, ualert] = useState({display: 'none'})

    const sendMessage = (text,type='danger',time=5) => {
        updateType(type);
        umessage(text);
        ualert({display: 'block'})
        setTimeout(()=>{
            ualert({ display: 'none'})
            if(type === 'success') {document.location.replace('/login')}
        },time*1000);
    }

    const submit=e=>{
        e.preventDefault()
        if(user.length<3 || pass.length <3 ) return sendMessage("PLease fill the form correctly")
        if(pass != cpass) return sendMessage("Passwords do not match")
        fetch('/api/register',{method: 'POST' , body:JSON.stringify({user,pass,name,emailid}),headers:{ 'Content-Type' :'application/json'}}).then(res => res.json()).then(data =>{
            if(data.status) sendMessage(data.message,'success')
            else sendMessage(data.message)
        })
    }
    
    return( 
        <>
        <Nav />
            <div className='container'>
            <div className={`alert alert-${atype}`} style={alert} role="alert">
                    {message}
                </div>
            <div className="card card2">
                <div className="card-body">
                <h2 className="signup">SIGN <span>UP</span></h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name"className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="name" onChange={
                            e => Uname(e.target.value)}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username"className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" onChange={
                            e => Uuser(e.target.value)}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="emailid"className="form-label">Emailid</label>
                        <input type="text" className="form-control" id="emailid" onChange={
                            e => Uemailid(e.target.value)}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"className="form-label">Password</label>
                        <input type="password"className="form-control"id="password" onChange={
                            e => Upass(e.target.value)}>
                        </input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmpassword"className="form-label">Confirm Password</label>
                        <input type="password"className="form-control"id="confirmpassword" onChange={
                            e => Ucpass(e.target.value)}>
                        </input>
                    </div>
                    <button onClick={e=>submit(e)} className="btn btn-primary">Register</button>
                </form>
                </div>
            </div>
        </div>
</>
    )
}
export default Register