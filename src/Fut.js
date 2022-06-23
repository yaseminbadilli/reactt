import React from "react";
import { List, ListGroup, ListGroupItem } from "reactstrap";



export default class Fut extends React.Component{
    constructor(props){
        super(props);
    }


    render(){

        return( 
        <div>

            <ListGroup>

                <ListGroupItem>tel: {this.props.info.tel}</ListGroupItem>
                <ListGroupItem>email: {this.props.info.email}</ListGroupItem>
                <ListGroupItem>sehir: {this.props.info.sehir}</ListGroupItem>
                
            </ListGroup>
            

            </div>)
            
        
        
        }
    }
            
            

        