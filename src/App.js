import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import './App.css'
import { render } from "@testing-library/react";

class App extends Component {
  deleteHandler(){
    alert("Delete Clicked")
  }
  render(){
    let subscriber = [
      {
        id:1,
        name: "Shilpa",
        phone: "88888888"
      },
      {
        id:2,
        name : "Srishti",
        phone:"77777777"
      }
    ]
  
  return (
    <div>
      <Header heading="Phone Directory"/>
      <div className="component-body-container">
        <button className="custom-btn add-btn">Add</button>

        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>
        {
          subscriber.map(sub => {
              return <div key={sub.id} className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn" onClick={this.deleteHandler}>Delete</button>
                </span>
              </div>
          })
        }
      </div>
    </div>
  );
}
};
export default App;
