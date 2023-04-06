import React from 'react'
import { useState } from 'react';

export const Register = () => {

    const [email, setEmail] = useState("");
    const [username, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit=()=>{

        //e.preventDefault();
        console.log("Email = ", email);
        console.log("Password = ", password);
    }

  return (
    <div className='login'>

        <div className='form'>
                
            <label htmlFor="text">Username</label>
            <input value={username} type="text" placeholder='Username' onChange={(e)=>setName(e.target.value)} id='name' />

            <label htmlFor="email">Email</label>
            <input value={email} type="text" placeholder='Your Email' id='email' name='email' onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="text">Password</label>
            <input value={password} type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} id='password' name='password'/>
            
            <button className='button' onClick={handleSubmit}>Register</button>
            
        </div>

    </div>
  )
}
