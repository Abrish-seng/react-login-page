
import React, { Component } from 'react';
import './App.css';
class App extends Component {
 state={
   firstName:'',
   lastName:'',
   email:'',
   password:'',
   signUp:''
 }
 handleChange=input=>e=>{
   this.setState({[input]:e.target.values})
 }
render(){
const {firstName,lastName,email,password,signUp}=this.state
const values={firstName,lastName,email,password,signUp}  
return (
    <div className="wrapper">
     <div className="form-wrapper">
     <h2>Create Account</h2>
      <form >
       <div className="firstName">
       <label htmlFor="firstName">First Name</label>
       <input type="text"  className="form-control" placeholder="First Name" name="firstName" onChange={this.handleChange}
       />
       </div>
       <div className="lastName">
       <label htmlFor="lastName">Last Name</label>
       <input type="text"  className="form-control" placeholder="Last Name" name="lastName" onChange={this.handleChange}/>
       </div>
       <div className="email">
       <label htmlFor="email">Email</label>
       <input type="email"  className="form-control" placeholder="Email" name="email" onChange={this.handleChange}/>
       </div>
       <div className="password">
       <label htmlFor="password">Password</label>
       <input type="password"  className="form-control" placeholder="password" name="password" onChange={this.handleChange}/>
       </div>
       <div className="createAccount">
       <button type="submit" >Create Account </button>
       <small>Already Have an Account?</small>
       </div>
      </form>
     </div>
    </div>
  );
}
}

export default App;
