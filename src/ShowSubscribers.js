import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import './ShowSubscribers.css'
import { logDOM, render } from "@testing-library/react";

// let subscriber = [
//   {
//     id:1,
//     name: "Shilpa",
//     phone: "88888888"
//   },
//   {
//     id:2,
//     name : "Srishti",
//     phone:"77777777"
//   }
// ]
class ShowSubcribers extends Component {
  // deleteHandler(){
  //   alert("Delete Clicked")
  // }

  // constructor()
  // {
  //   super();
  //   this.state = {
  //     subscriberListToShow : []
  //   }
  //   // console.log("Constructor called");
  // }

  // componentDidMount(){
  //   let newSubscriber = {
  //     id: 1,
  //     name: "Shilpa Bhat", 
  //     phone: "88888888888"
  //   }
  //   let subscribersList = this.state.subscriberListToShow;
  //   subscribersList.push(newSubscriber);
  //   this.setState({subscriberListToShow: subscribersList});
  //   console.log("Component Did Mount Called");
  //   console.log("State", this.state);
  // }
  render(){
    // console.log("Render Called");
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
          this.props.subscriberList.map(sub => {
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
export default ShowSubcribers;
