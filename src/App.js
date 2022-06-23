import React from "react";
import {Container, Row, Col, CardImg, Card} from 'reactstrap'
import Categories from './Categories'
import Product from './Products'
import Nav from "./Nav";
import Fut from "./Fut";
import Menüler from "./menüler";

export default class App extends React.Component{
render(){
    let CategoriesInfo={title: "menüler"};
    let ProductInfo={title: "ürünler"};
    let bilgiler={tel: 5689636, email: "yase@gmail.com", sehir: "urfa"}
    let menüler={menu1:"anasayfa" ,menu2:"iletisim" , menu3: "hakkinda"}
    

    
return (
    <div>
        <Container>
           
            <Row>
                <Nav/>
            </Row>

            <Row>
                <Col xs="3">
                    <Categories info={CategoriesInfo}/>
                </Col>

                <Col xs="9">
                    <Product info={ProductInfo}/>
                </Col>
            </Row>
            <Row>

            <Fut info={bilgiler}/>

            </Row>

            <Row>

            <Menüler info={menuler}/>

            </Row>
         

            

        </Container>
    </div>
)

}


}
