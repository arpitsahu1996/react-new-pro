import React from 'react'
import { Button } from 'react-bootstrap'
import { Form } from 'react-router-dom'

const Login = () => {
  const submit = () => {
    console.log("ok");
  }
  return (
    <>
    <h1>Login</h1>
    <form action="action_page.php" method="post">

  <div className="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />

    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember" /> Remember me
    </label>
  </div>

  <div className="container">
    <button type="button" className="cancelbtn">Cancel</button>
    <span className="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>
    </>
  )
}

export default Login