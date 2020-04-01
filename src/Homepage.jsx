import React, { Component } from 'react'
import './Homepage.css'

const A=process.env.REACT_APP_API_KEY;

class Homepage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            maindata:[],
            total:"Retrieving..",
            newcase:"Retrieving..",
            recoverd:"Retrieving..",
            death:"Retrieving..",time:""

                 
        }
    }
  componentDidMount()
  {
    fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=India", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": A
        }
    })
    .then(response=>response.json())
    .then(response => {
      
      
       
        this.setState(
            {
                maindata:response,
                total:response.latest_stat_by_country[0].total_cases,
                newcase:response.latest_stat_by_country[0].new_cases,
                recoverd:response.latest_stat_by_country[0].total_recovered,
                death:response.latest_stat_by_country[0].total_deaths,
                time:response.latest_stat_by_country[0].record_date

            }
        )
    })
    
    .catch(err => {
        console.log(err);
    });
    
  }
    render() {
    
        return (
            <div>
                <div className="mainBox">
                    <div className="contact">
        <h6>Data on :  {this.state.time}</h6>
                    </div>
                    <div className="h1e">
                    <h1>COVID-19 INDIA</h1>
                    </div>
                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xl-3">
              <div className="card bg-c-blue order-card">
                <div className="card-block">
                 
                  <h2 className="text-right"><span>{this.state.total}</span></h2>
        <p className="m-b-0">Total Cases<span className="f-right"></span></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xl-3">
              <div className="card bg-c-green order-card">
                <div className="card-block">
                 
                  <h2 className="text-right"><span>{this.state.recoverd}</span></h2>
                  <p className="m-b-0">Recoverd cases<span className="f-right"></span></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xl-3">
              <div className="card bg-c-yellow order-card">
                <div className="card-block">
                 
                  <h2 className="text-right"><span>{this.state.newcase}</span></h2>
                  <p className="m-b-0">New cases<span className="f-right"></span></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xl-3">
              <div className="card bg-c-pink order-card">
                <div className="card-block">
                 
                  <h2 className="text-right"><span>{this.state.death}</span></h2>
                  <p className="m-b-0">Total Death<span className="f-right"></span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
    
                </div>
                <br></br>
                <br></br>

                <br></br>
                
            </div>
        )
    }
}

export default Homepage
