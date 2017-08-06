import React, { Component } from 'react';


class Address_Component extends Component {
    render() {
        return (
            <div>

                <li className="list-group-item">
                    <strong>{this.props.value.types[0]} : </strong>{this.props.value.long_name}
                </li>
            </div>

        )
    }
}


export default Address_Component;