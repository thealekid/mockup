import React, { Component, Fragment } from "react";
import SearchBar from "./SearchBar";
import "./App.css";
import Modal from "./Modal";

class App extends Component {
  render() {
    let url = "";
    return (
      <Fragment>
        <div className="main">
        <div className="left-menu">
          <div className="perchpeek">
            <p>PERCHPEEK</p>
          <hr className="lightgrey"/>
          </div>
          <p>Overview</p>
          <hr className="lightgrey"/>
          <p className="lightgrey">Manage</p>
          <p>Users</p>
          <p>Properties</p>
          <p>Viewings</p>
          <p>Support</p>
          <hr className="lightgrey"/>
          <p className="lightgrey">Get Help</p>
          <p>Knowledge Base</p>
        </div>
        <div className="right-side">
        <SearchBar />
          <hr />
        <h1>Oliver Markham</h1>
        <div className="move">
        <p>
          Moving to <a href={url}>Berlin, Germany</a>
        </p><button>v</button>
        </div>
        <div className="row">
        <p>Activity Feed</p>
        <p>Stats</p>
        <p>Documents</p>
        </div>
        <Modal />
        <div>
          <p>
            <b>Ace Vinayak added a note:</b> He's increased his budget by £100
            per month.
          </p>
          <p>
            <b>Ace Vinayak added a note:</b> He's decided to look only 2
            bedrooms in the city centre.
          </p>
          <p>
            <b>Ace Vinayak created a task:</b> Please add 30 different
            properties for Oliver.
          </p>
          <p>
            <b>Ace Vinayak made a property enquiry:</b>
            <a href={url}>2 bed Freidrichschain.</a> Available to visit at 3pm
            on 22nd Oct or 4pm on 23rd Oct.
          </p>
        </div>
        </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
