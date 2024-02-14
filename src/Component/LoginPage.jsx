import React, { useState } from 'react'

const LoginPage = () => {
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError]   = useState('')
    const [visible,setVisible] = useState(false)

    function handleSubmit(e){
        e.preventDefault();
       if (userName==='user' && password==='password'){
        setError('');
        setVisible(true)
       }else{
        setVisible(false);
        setError('Invalid username or password')
       }

    }

  return (
    <div>
        <h1>Login Page</h1>
        {
            visible?(<p>Welcome,{userName}!</p>):(
                
                <form onSubmit={handleSubmit}>
                    <p>{error}</p>
            <div>
            <label htmlFor="name">Username:</label>
            <input type="text" placeholder='username' id='name' required value={userName} onChange={(e)=>setUserName(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="password">Password:</label>
            <input type="password"  id='password' placeholder='password' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type='submit'>Submit</button>
           
        </form>
            )
        }
        
    </div>
  )
}

export default LoginPage