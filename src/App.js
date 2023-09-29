import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import './App.css'
import { render } from "@testing-library/react";

class App extends Component {
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
      <Header />
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
              </div>
          })
        }
      </div>
    </div>
  );
}
};
export default App;
