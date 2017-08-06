import React, { Component } from 'react';
import axios from 'axios';
import Address_Component from './ListAddressComponent';
const key = `AIzaSyDtktJFZon7OtmtSNBcTumyAcL6qQ0RiCw`;
const URL = `https://maps.googleapis.com/maps/api/geocode/json`;


class Geo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '3136 H turtle point drive', //set state of initial value. Can be left empty as well
            address_component: [] //recieve arrays of address components 
        }


    }

    getData = (e) => {
        this.setState({
            location: e.target.value   //change the location as the input value changes 
        })

        axios.get(`${URL}?address=${this.state.location}&${key}`) //make a HTTP get request
            .then((response) => {
                this.setState({
                    address_component: response.data.results[0].address_components //change the array state to the new query address components
                })

                console.log(this.state.address_component);
                console.log(response.data);
            })
            .catch((err) => { //catch any error if not successful
                console.log(err);
            })
    }
    render() {

        return (
            <div className="card-block container">
                <p> Please enter an address </p>
                <input className="form-control" onChange={this.getData} />
                <div className="card-block">
                    <ul className="list-group">

                        {this.state.address_component.map((comp) => //map through the address_component to get all the details of the address
                            <Address_Component value={comp} />

                        )}
                    </ul>
                </div>
            </div>

        )

    }

}

export default Geo;