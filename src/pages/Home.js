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
        onInput = e => this.setState({ [e.target.stateId]: e.target.stateId });
        onFocus = e => e.target.parentNode.parentNode.classList.add('focus');
         onBlur = e => e.target.parentNode.parentNode.classList.remove('focus');
  // Select item
      onClickItem = item => this.setState({
    search: "",
    color: item
  });

  render() {

    return (
      <div className="home-section">
        <div className="filter-block">
        <div className="container">
        <div className="filter">
         <div className="control ">
         <input
              id="search"
              type="search"
              value={this.state.search}
              placeholder="Search a color by name..."
               onChange={this.onInput}
               onFocus={this.onFocus}
              onBlur={this.onBlur}
              autocomplete="off"
            /><i class="fas fa-search"></i>
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