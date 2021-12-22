import React,{useState,useEffect} from 'react'
 import { useLocation } from 'react-router-dom';

export default function Covid() {

    
    const location = useLocation();
    const [stateDetail,setStateDetail] = useState({});
    const [details,setDetails] = useState(null);
    const {stateId}=location.state
    

    useEffect(() => {
    fetch("https://data.covid19india.org/v4/min/timeseries.min.json")
   .then((res) => res.json())
   .then((json) => {
   const statedata =  Object.keys(json).map((s) => ({
   stateNameId: s,
        ...json[s]
        }))

    setDetails(statedata)  })}, []);
    
        useEffect(() => {
           setStateDetail( details?.find(item => item.stateNameId == stateId))
        }, [details,location])

    console.log(stateDetail);
    return (
        <div>
        <div className="filter-block">
        <div className="container">
        <div className="filter">
         <div className="control ">
                <h2>{location.state.stateId}</h2> 
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
        <div className="container ">
      <table className="table-covid">
     <thead>
      <tr>
        <td>Dates</td>
        <td>Confirmed</td>
         <th>Recovered</th>
        <th>Deceased</th>
        <th>Delta</th>
        <th>Delta 7</th> 
      </tr>
      </thead>
      <tbody>
         {stateDetail?.dates && Object.keys(stateDetail?.dates).map((s) =>  
         <tr><td key={s} value={s}>{s}</td>
         <td key={s}>{stateDetail?.dates[s]?.total?.confirmed}</td> 
         <td >{stateDetail?.dates[s]?.total?.recovered}</td>   
         <td >{stateDetail?.dates[s]?.total?.deceased}</td>  
         <td ><div>
             <p>Confirmed :{stateDetail?.dates[s]?.delta?.confirmed}</p>
             <p>Recovered :{stateDetail?.dates[s]?.delta?.recovered}</p>
             <p>deceased :{stateDetail?.dates[s]?.delta?.deceased}</p>
             </div></td>  
         <td ><div>
             <p>Confirmed :{stateDetail?.dates[s]?.delta7?.confirmed}</p>
             <p>Recovered :{stateDetail?.dates[s]?.delta7?.recovered}</p>
             <p>deceased :{stateDetail?.dates[s]?.delta7?.deceased}</p>
             </div></td>  
         </tr>
        )} 
      </tbody>
      </table>
      </div>
      </div>
      </div>
    )
}
