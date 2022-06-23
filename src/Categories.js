import React from "react"
import { ListGroup, ListGroupItem } from "reactstrap";
export default class Categories extends React.Component {



    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <h2>{this.props.info.title}</h2>
                <ListGroup>


                    <ListGroupItem>Kovalar</ListGroupItem>
                    <ListGroupItem>Tek Tavuk Ürünleri</ListGroupItem>
                    <ListGroupItem>Sandviç ve Salata</ListGroupItem>
                    <ListGroupItem>Çocuklar</ListGroupItem>
                    <ListGroupItem>Tatlılar</ListGroupItem>
                    <ListGroupItem>Ek lezzetletler ve Ürünler</ListGroupItem>
                    <ListGroupItem>İçecekler</ListGroupItem>
                    <ListGroupItem>Soslar</ListGroupItem>

                </ListGroup>
            </div>)


    }


}