import React from "react";
import Card from "../components/card";
// import SecondHead from "../components/SecondHead";




class Home extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        d: [],
        DataisLoaded: false
    };
  }

  handleClick(event){
    console.log(this); // 'this' is undefined
  }
  
    componentDidMount() {
                   fetch("https://data.covid19india.org/v4/min/data.min.json")
                  .then((res) => res.json())
                  .then((json) => {
     const data =  Object.keys(json).map((d) => ({
         stateId: d,
          ...json[d]
          }))
      
      this.setState({
                data: data,
                DataisLoaded: true
            });
            console.log(this.state.data); 
       console.log(this.state.data.meta); 
            
        })
}     


  render() {

    return (
      <div className="home-section">
        <div className="filter-block">
        <div className="container">
        <div className="filter">
         <div className="control ">
                <input className="input form-control" 
                // onChange={handleInput} 
                // onKeyPress={handleInputPressed} 
                onClick={(e) => this.handleClick(e)}
                type="text" 
                placeholder="state" />
            </div>
            <div className="date-filter">
            <select className="form-control">
              <option>Date </option> 
              <option>districts </option> 
             {/* {this.state.data.meta.date && Object.keys(this.state.data.meta.date).map((d) => <option key={d} value={d}>{d}</option> )} */}
          </select> 
        

            </div>
            <div>
            <select className="form-control">
              <option>A-Z</option> 
              <option>Z-A</option> 
              </select>
              </div>
            </div>
        </div>
        </div>
      <div className="covid-block">
      <div className="container">
      <div id="grid" className="row">
      {this.state.data && this.state.data.map((d) => {
       return <div key={d.stateId} className="col-lg-4 col-sm-6"><Card info={d}/></div>
          })} 
        </div>
        </div>
        </div>
        </div>
       )
      }
    }
  
export default Home;