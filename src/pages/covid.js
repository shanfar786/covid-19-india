import React from 'react'
 import { useLocation } from 'react-router-dom';

export default function Covid() {
    
    const location = useLocation();
    console.log(location.state.stateId);
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
        <div className="container">
      <table>
     <tbody>
      <tr>
        <th>Date</th>
        <th>Confirmed</th>
        <th>Recovered</th>
        <th>Deceased</th>
        <th>Delta</th>
        <th>Delta 7</th>
      </tr>
      <tr>
        <td>Peter</td>
        <td>Griffin</td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
    )
}
