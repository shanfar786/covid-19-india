import * as React from "react";
// import { Routes, Route, Link } from "react-router-dom";
import Head from "./components/head";
import Card from "./components/card";
import './App.css';
class App extends React.Component {
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
        })
}     


  render() {

    return (
    <div>
      <Head />
      <div id="grid" className="grid-cntainer">
      {this.state.data && this.state.data.map((d) => {
       return <Card info={d} />
          })} 
        </div>

        </div>
       )
      }
    }
  
export default App;