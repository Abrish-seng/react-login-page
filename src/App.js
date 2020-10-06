import { AppBar } from 'material-ui';
import React from 'react';
import './App.css';
function App() {
  return (
    <div className="wrapper">
      <h2>Create Account</h2>
      <form onSubmit={this.handleSubmit} noValidate>
       <div className="firstName">
       <label htmlFor="firstName">First Name</label>
       <input type="text"  className="" placeholder="First Name" name="firstName"/>
       </div>
      </form>
    </div>
  );
}

export default App;
