import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Label from '../../component/common/label/Label'
import apiService from '../../services/apiService'
import $ from "jquery"

const SignUp = () => {
    const [data, setData] = useState({
        uname: '',
        email: '',
        age: '',
        pass: '',
        gender: '',
    })
    const { uname, pass, email, age, gender } = data
    console.log(uname);
    
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: [e.target.value] })
    }
  

    const formData = {
        uname:uname[0],
        email:        email[0],
        age:        age[0],
        pass:        pass[0],
        gender:        gender[0],
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = apiService.localLoginUser(formData);
        if ('accessToken' in response) {
            alert("success")            
              localStorage.setItem('accessToken', response['accessToken']);
              localStorage.setItem('user', JSON.stringify(response['user']));
            //   window.location.href = "/profile";
           
          } else {
            alert("ok");
          }
    }

    return (
        <>
            <h1>Registration</h1>
            <form>
                <div className="container">
                    <div className="row border p-4">
                        <div className="col-md-12 mb-2">
                            <Label htmlFor="name"> Enter Username </Label>
                            <input
                                type="text"
                                placeholder="Enter Username"
                                name="uname"
                                value={uname}
                                required
                                onChange={changeHandler}
                                id="uname"
                            />
                        </div>
                        <div className="col-md-12 mb-2">
                            <Label htmlFor="email"> Enter Email </Label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                name="email"
                                value={email}
                                required
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="col-md-12 mb-2">
                            <div onChange={changeHandler}>
                                <input type="radio" value="Male" name="gender" /> Male
                                <input type="radio" value="Female" name="gender" /> Female
                                <input type="radio" value="Other" name="gender" /> Other
                            </div>
                        </div>
                        <div className="col-md-12">
                            <Label htmlFor="age"> Age </Label>
                            <select name="age" id="cars"
                            value={age}
                            onChange={changeHandler}
                            >
                                <option value="30">0 - 30</option>
                                <option value="60">31 - 60</option>
                                <option value="100">61 - 100</option>
                            </select>
                        </div>
                        <div className="col-md-12 my-2">
                            <Label htmlFor="password"> Enter Password </Label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                name="pass"
                                value={pass}
                                required
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="col-md-12">
                            <Button
                                type="submit"
                                onClick={handleSubmit}
                                className="cancelbtn"
                            >
                                Sign up
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default SignUp
