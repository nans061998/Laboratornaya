import './App.css';
import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const App =()=>{
  return(
    <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 text-center">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" style={{padding:"25px",margin:"25px"}}>
              <form>
                <div class="form-group" className="text-left">
                  <h4>Events in San Francisco</h4>
                  <label for="StartDate" >Start date</label>
                  <input type="date" className="form-control" id="StartDate"/>
                </div>
                <br/>
                <div class="form-group" className="text-left">
                  <label for="EndDate">End date</label>
                  <input type="date" className="form-control" id="EndDate"/>
                </div>
                <br/>
                <div class="form-group" className="text-left">
                  <label for="Filter">Filtration by keywords</label>
                  <input type="text" className="form-control" id="Filter"/>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary">Get events</button>
              </form>  
            </div>
          </div>
        </div>
      </div>
  )
}
  
export default App;
