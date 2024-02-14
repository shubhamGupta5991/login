import React from 'react'

const LoginPage = () => {
  return (
    <div>
        <h1>Login Page</h1>
        <form action="">
            <div>
            <label htmlFor="name">Username:</label>
            <input type="text"  name='name' required/>
            </div>
            <div>
            <label htmlFor="password">Password:</label>
            <input type="password"  name='password' required/>
            </div>
            <button type='submit'>Submit</button>
           
        </form>
    </div>
  )
}

export default LoginPage