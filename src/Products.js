import React from "react";
import { ListGroup, ListGroupItem ,Card,CardImg} from "reactstrap";



export default class Product extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return( <div>
            <h2>{this.props.info.title}</h2>

            <ListGroup>

            
            <ListGroupItem>
                Kovalar
                <Card><CardImg src="https://www.popeyes.com.tr/cmsfiles/products/2-kisilik-kemiksiz-kova-menu.png?v=133"/></Card>

                </ListGroupItem>


            <ListGroupItem>
                Tek Tavuk Ürünleri
                <Card><CardImg src="https://www.popeyes.com.tr/cmsfiles/products/10lu-dipn-chicken.png?v=133"/></Card>
            </ListGroupItem>

            <ListGroupItem>
                Sandviç ve Salata
                <Card><CardImg src="https://i4.hurimg.com/i/hurriyet/75/750x422/5b6afeb85d1c2e1f9ce41225.jpg"/></Card>

            </ListGroupItem>

            <ListGroupItem>
                Çocuklar
                <Card><CardImg src="https://www.popeyes.com.tr/cmsfiles/products/2-kisilik-kemiksiz-kova-menu.png?v=133"/></Card>

                </ListGroupItem>
            <ListGroupItem>
                Tatlılar
                <Card><CardImg src="https://www.popeyes.com.tr/cmsfiles/products/2-kisilik-kemiksiz-kova-menu.png?v=133"/></Card>

                </ListGroupItem>
            <ListGroupItem>
                Ek lezzetletler ve Ürünler
                <Card><CardImg src="https://www.popeyes.com.tr/cmsfiles/products/2-kisilik-kemiksiz-kova-menu.png?v=133"/></Card>

                </ListGroupItem>
            <ListGroupItem>
                İçecekler
                <Card><CardImg src="https://www.popeyes.com.tr/cmsfiles/products/2-kisilik-kemiksiz-kova-menu.png?v=133"/></Card>

            </ListGroupItem>
            <ListGroupItem>
                Soslar
                <Card><CardImg src="https://www.popeyes.com.tr/cmsfiles/products/2-kisilik-kemiksiz-kova-menu.png?v=133"/></Card>

                </ListGroupItem>

        </ListGroup>
        </div>)
       
}}