import React from "react";
// import ReactDOM from 'react-dom';



class Card extends React.Component {

      render() {
      return (
      <div className = "App card">
        <p>State Name : {this.props.info.stateId}</p> 
        <p>total</p>
        <p>confirmed {this.props.info.total.confirmed}</p>
        <p>recovered {this.props.info.total.recovered}</p>  
        <p>deceased {this.props.info.total.deceased}</p>       
      </div>
    );
  }
}

export default Card;