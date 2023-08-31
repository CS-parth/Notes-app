import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const host = "http://localhost:8000";

const SignUp = (props) => {
  let navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const handleSubmit = async (e) => {
    e.preventDefault(); // To Reload the page
    // console.log("first")
    const response = await fetch(`${host}/api/auth/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // ave the auth token and redirect 
      localStorage.setItem('token', json.authToken);
      navigate("/");
      props.showAlert("Successfully Signed in","success");
    } else {
      props.showAlert("Invalid credentials","danger");
    }
  }
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">Name</label>
          <input  name="name" type="text" className="form-control" id="exampleInputName1" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input name="password" type="password" className="form-control" id="exampleInputPassword1" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default SignUp