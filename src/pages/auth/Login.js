import React, { useState, useRef } from 'react'
import { Button } from 'react-bootstrap'
import { Form } from 'react-router-dom'
import Label from '../../component/common/label/Label'
// import ProductService from "../../services/authServices"
import ApiService from "../../services/apiService"

const Login = () => {
  const userInputRef = useRef("");
  const [data, setData] = useState({
    uname:"",
    psw:""
  })
  const {uname, psw} = data;
  const changeHandler = (e) => {
    setData({...data, [e.target.name]:[e.target.value] })
  }

  console.log({data});
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log({userInputRef});
    // console.log(e.target, {uname}, {psw});
    let username = userInputRef.current.value
    const response = ApiService.localLoginUser({uname,psw});

    console.log({ username,uname, psw});

    if ('accessToken' in response) {
      // swal("Success", response.message, "success", {
      //   buttons: false,
      //   timer: 2000,
      // })
      alert("success")
      
        localStorage.setItem('accessToken', response['accessToken']);
        localStorage.setItem('user', JSON.stringify(response['user']));
        // window.location.href = "/profile";
     
    } else {
      // swal("Failed", response.message, "error");
      alert("ok");
    }
    // ProductService.
  }
  return (
    <>
      <h1>Login</h1>
      <form>
        <div className="container">
          <div className="row border p-4">
            <div className="col-md-12">
              <Label htmlFor="username"> Username </Label>
              <input
                type="text"
                placeholder="Enter Username"
                name="uname"
                value={uname}
                required
                onChange={changeHandler}
                ref={userInputRef}
              />
            </div>
            <div className="col-md-12 my-2">
              <Label htmlFor="password"> Password </Label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                value={psw}
                required
                onChange={changeHandler}
              />
            </div>
            <div className="col-md-12">
            <Button type="submit" onClick={handleSubmit} className="cancelbtn">Login</Button>
            </div>
            <div className="col-md-12 mt-2">
              <input type="checkbox" name="remember" />{' '}
              <Label htmlFor="username">Remember me</Label>
            </div>

            <div className="col-md-12">             
              <span className="psw">
                Forgot <a href="#">password?</a>
              </span>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Login
