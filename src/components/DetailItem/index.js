

import React, { Component } from 'react';
import detailItem from './detailItem.css';
import imgDetail from '../../assets/iphoneDetail.png';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Index extends Component {
    state = {
        item1: [],
        title : "",
        price: []
    }


    componentDidMount() {
        var URLactual = window.location.pathname;
        var id = URLactual.split('/');
        
         let price = "";

        axios.get(`http://localhost:3001/api/items/${id[2]}`)
            .then(res => {
                console.log("data original",res.data);
                const item1 = res.data[0];
                console.log(item1);
                this.setState({ item1 });
                console.log(this.state);
                this.state.title = this.state.item1.item.title;
                this.state.price=this.state.item1.item.price;
                
            })
      
        
    }


    render() {
        return (
            <div className='container container-list-items' >
            <div className='row '>
                <div className="col-md-6" >
                    <img src={this.state.item1.picture} className="img-detail" />
                    <label className="lbl-descrip-title"> Descripción del producto </label><br />
                    <p className='lbl-descrip-detail'>
                    {this.state.item1.description}
                    </p>
                </div>
                <div className="col-md-6" >
                    <label className="lbl-sold">  {this.state.item1.condition} - {this.state.item1.sold_quantity} vendidos</label> <br />

                    <label className="lbl-title-detail"> <b>{this.state.title} </b></label><br />
                    <label className="lbl-price-detail">${this.state.price.amount} </label> <label className='lbl-decimals'>00</label><br />
                    <button className='btn btn-primary btn-price'> Comprar</button>
                </div>
            </div>
        </div>
      )
    }
}

/*
const Index = () => {
    return (
        <div className='container container-list-items' >
            <div className='row '>
                <div className="col-md-6" >
                    <img src={imgDetail} className="img-detail" />
                    <label className="lbl-descrip-title"> Descripción del producto </label><br />
                    <p className='lbl-descrip-detail'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                        of Lorem Ipsum
                    </p>
                </div>
                <div className="col-md-6" >
                    <label className="lbl-sold"> Nuevo - 234 vendidos</label> <br />

                    <label className="lbl-title-detail"> <b>Deco Reverse Sombrero Oxford</b></label><br />
                    <label className="lbl-price-detail">$ 1980</label> <label className='lbl-decimals'>00</label><br />
                    <button className='btn btn-primary btn-price'> Comprar</button>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Index);
*/
