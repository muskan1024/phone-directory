import React,{Component} from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubcribers from "./ShowSubscribers";

class PhoneDirectory extends Component{
    constructor(){
        super();
        this.state = {
            subscriberList :[{
                id:1,
                name: "Muskan",
                phone: '888888'
            },{
                id:2,
                name: "Shilpa",
                phone: '999999'
            }]
        }
    }
    addSubscriberHandler = (newSubscriber) => {
        let subscriberList = this.state.subscriberList;
        if(subscriberList.length > 0){
            newSubscriber.id = subscriberList[subscriberList.length -1].id + 1;
        }
        else{
           newSubscriber.id = 1; 
        }
        subscriberList.push(newSubscriber);
        this.setState({subscriberList: subscriberList})
        console.log("Phone Directory");
        console.log(this.state.subscriberList);
    }
    render(){
        return(
            // <AddSubscriber addSubscriberHandler={this.addSubscriberHandler}/>
            <ShowSubcribers subscriberList={this.state.subscriberList}/>
        )
    }
}

export default PhoneDirectory;