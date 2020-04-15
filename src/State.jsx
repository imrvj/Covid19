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
    fetch("https://covid19india.p.rapidapi.com/getStateData/DL", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid19india.p.rapidapi.com",
            "x-rapidapi-key": A
        }
    })
    .then(response=>response.json())
    .then(response => {
      
        console.log(response.response)
        
      
        this.setState(
            {
                maindata:response.response,
                total:response.response.confirmed,
                recoverd:response.response.recovered,
                death:response.response.deaths,
                newcase:response.response.active
                

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
        
                    </div>
                   
                    <div className="h1e">
                    <h1>COVID-19 DELHI</h1>
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
                  <p className="m-b-0">Active cases<span className="f-right"></span></p>
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
