import React from "react";
import { authaction } from "../store/actions/authaction"
import { Link} from 'react-router-dom'
import { connect} from 'react-redux'

class Register extends React.Component {

  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: {},
  };
  changehandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submithandler = (event) => {
    
    event.preventDefault();

    let { name,email,password,confirmPassword}= this.state

    this.props.authaction({ name,email,password,confirmPassword})
  };

  render() {


    let { name,email,password,confirmPassword,error}= this.state

    return (

      
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h3 className=" display-4 text-center"> Register Hare</h3>
          <form  onSubmit={this.submithandler}>
            <div className=' form-group' >
              <h3 htmlFor= 'name'> Name</h3>
              <input
              type='text'
              id="name"
              name="name"
              className=" form-control"
              onChange={this.changehandler}
              value={name}
              placeholder="Please Enter Your Name"
              />

            </div>
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

            <div className=' form-group' >
              <h3 htmlFor= 'confirmPassword'> Confirm Password</h3>
              <input
              type='password'
              name="confirmPassword"
              id="name"
              className="form-control"
              value={confirmPassword}
              onChange={this.changehandler}
              placeholder="Please Enter Your Email"
              />

            </div>

            <Link to='/login'> Already Have Account? Login Here </Link>
 <button className=' btn btn-primary d-block my-3'>Register </button>
          </form>
        </div>
      </div>
    );
  }
}



export default connect(null,{ authaction })(Register);
