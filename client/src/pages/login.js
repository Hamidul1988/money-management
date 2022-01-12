import React from "react";
import { Link} from 'react-router-dom'

class Login extends React.Component {

  state = {
    email: "",
    password: "",
    error: {}
  };
  changehandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submithandler = (event) => {
    event.preventDefault();
  };

  render() {


    let { email,password,error}= this.state

    return (

      
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h3 className=" display-4 text-center"> Register Hare</h3>
          <form  onSubmit={this.submithandler}>
            
            <div className=' form-group' >
              <h3 htmlFor= 'email'> Email</h3>
              <input
              type='email'
              name="email"
              id="name"
              className=" form-control"
              onChange={this.changehandler}
              value={email}
              placeholder="Please Enter Your Password"
              />

            </div>
            <div className=' form-group' >
              <h3 htmlFor= 'confirmPassword'>Password</h3>
              <input
              type='password'
              name="password"
              id="password"
              className="form-control"
              value={password}
              onChange={this.changehandler}
              placeholder="Please Enter Your Password"
              />

            </div>

            
 <Link to="/Register"> Don't Have Account? Register Here</Link>

 <button className=' btn btn-primary d-block my-3'>Login </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
