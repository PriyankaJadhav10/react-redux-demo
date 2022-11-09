import React, { PureComponent } from "react";
import "./Dashboard.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Dashboard extends PureComponent {
  logout = () => {
    axios.get("/logout").then(() => this.props.history.push("/"));
    // axios.get('logout').then(()=> console.log('logout successfully'))
  }
  render() {
    return (
      <div>
         <div class="wrapper">
          <div class="sidebar">
            
          </div>
        </div>

        <a className="logout" onClick={this.logout}>
        <Link to="/">Logout</Link>
        </a>
        <div className="dashboard">
          <h3>Welcome to the dashboard</h3>
        </div>
      </div>
    );
  }
}
