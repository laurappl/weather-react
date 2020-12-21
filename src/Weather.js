import React from "react";
import Weather from "./Weather.css";
export default function showWeather () {
return (
<div className="Weather">  <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"

              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        
 <h1> New-York</h1>

        <ul>
<li>Monday 15:20</li>
<li>Mostly Cloudly</li>
</ul>
<div className="row">
<div className="col-6">
<img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="Cloudy" /> 

      6°  
</div>
<div className="col-6">
<li>Precipitation: 15%</li>
<li>Humidity: 20%</li>
<li>Wind:3km/h</li>
</div>

        </div>
        </div>
)
};