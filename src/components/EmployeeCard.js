import React, { Component } from "react";
//import React from "react";
import searchEmployees from "../utils/api"

const props = searchEmployees

export default class EmployeeCard extends Component {

    render() {
        return (
            <>
            <h1> Employees</h1>
            <tr>
                <th scope="row"><img alt= {props.firstName} src= {props.picture} /></th>
                <td>{props.firstName} {props.lastName}</td>
                <td>{props.phone}</td>
                <td>{props.email}</td>
                <td>{props.dob}</td>
                <td>{props.location}</td>
            
            </tr>
            </>
        );
    
    }

}


/*function EmployeeCard(props) {
    
    
}*/
//export default EmployeeCard;