

import React, { Component } from 'react';
import detailItem from './detailItem.css';
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

