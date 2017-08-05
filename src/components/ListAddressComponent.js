import React ,{Component} from 'react';


class Address_Component extends Component{
    render(){
        return(
            <div>
     
                <li>
                {this.props.value.long_name}
                </li>
                </div>

        )
    }
}


export default Address_Component;