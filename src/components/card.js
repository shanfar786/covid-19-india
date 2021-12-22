import React from "react";
 import {Link} from "react-router-dom"

// import ReactDOM from 'react-dom';

class Card extends React.Component {      
  constructor(props){ 
          super(props) 

         // console.log("this.props.info", this.props.info)
          this.state = {
              districts: this.props.info?.districts ? Object.keys(this.props.info?.districts).map((key) => {
                return {
                  districtName: key,
                  ...this.props.info.districts[key]
                }
              }) : [],
              selectedDistrict: null
          } 
          }

          renderStateDetails() {
            if(this.state.selectedDistrict) {
              const district = this.state.districts.find((d) => d.districtName === this.state.selectedDistrict)
              return <div className="case-block">
            <p>Total</p>
             <p><strong>Confirmed : { district.total.confirmed} </strong></p>
             <p><strong>Recovered : {district.total.recovered}  </strong></p>  
             <p><strong>Deceased : {district.total.deceased} </strong></p>   
           </div>
            }
            else {
            return <div className="case-block">
            <p>Total</p>
             <p><strong>Confirmed : { this.props.info.total.confirmed} </strong></p>
             <p><strong>Recovered : {this.props.info.total.recovered}  </strong></p>  
             <p><strong>Deceased : {this.props.info.total.deceased} </strong></p>   
           </div>
            }
          }
      render() {
        console.log(this.props.info);
      return (
        <div className="card ">
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <p className="state-name">State Name :  
                <Link to={`/covid-details/${this.props.info.stateId}`} 
                     state={this.props.info} >{this.props.info.stateId}
                   </Link>
                 </p> 
            </div>
             <div className="col-lg-6"> 
               <select className="form-control" onChange={(e) => {
                 console.log("e", e.target.value)
                 this.setState({selectedDistrict: e.target.value})
               }} >
                  <option value={null}>Districts</option> 
                   {this.state.districts 
                   && this.state.districts.map((d) => 
                  <option key={d.districtName} value={d.districtName}>{d.districtName}</option> 
                  )}
               </select>
              </div>
             </div>
           {this.renderStateDetails()}
       </div>
     
    );
  }
}

export default Card;