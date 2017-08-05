import React ,{Component} from 'react';
import axios from 'axios';
import Address_Component from './ListAddressComponent';
const key=`AIzaSyDtktJFZon7OtmtSNBcTumyAcL6qQ0RiCw`;
const URL =`https://maps.googleapis.com/maps/api/geocode/json`;


class Geo extends Component {
    constructor(props){
        super(props);
  this.state={
      location:'3136 H turtle point drive',
      address_component:[]
  }
     
            
    }

    getData=(e)=>{
           this.setState({
                 location:e.target.value
             })

      axios.get(`${URL}?address=${this.state.location}&${key}`)
        .then((response)=>{
                this.setState({
                        address_component: response.data.results[0].address_components
                })

              console.log(this.state.address_component);
                console.log(response.data);
        })
            .catch((err)=>{
                console.log(err);
            })
    }
    render(){

           return(
                <div className="card-block container">
                    <p> Please enter an address </p>
                    <input className="form-control" onChange={this.getData}  />
                    <div className="card-block">
                    <ul className="list-group">
               { this.state.address_component.map((comp)=>
                   <Address_Component value={comp}/>
              
               )}
               </ul>
                    </div>
                </div>

      )

    }
   
}

export default Geo;