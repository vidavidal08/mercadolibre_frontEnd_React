import React, { Component } from 'react';
import itemList from './itemList.css';
import iphoneTest from '../../assets/iphoneTest.webp';
import iconCar from '../../assets/ic_shipping@2x.png'
import apiML from '../../apiML/api';
import axios from 'axios';
import { applyStyles } from '@popperjs/core';


export default class Index extends Component {

  state = {
    items: []
  }

  async componentDidMount() {
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=teclado`)
      .then(res => {
        const items = res.data.results;
        console.log(items);
        let newJson = [];
        let itemsML = [];
        let price = [];

        newJson.push({
          author: {
            name: "Guadalupe",
            lastname: "Vidal Cruz"
          }
        });

        newJson.push({
          categories: {
            string: "string",
          }
        });

        for (let i = 0; i < 4; i++) {
          
           price.push({
            currency: items[i].prices.prices[0].currency_id,
            amount:items[i].prices.prices[0].amount,
            decimals: "00"
           });
         
          itemsML.push({
            id: items[i].id,
            title: items[i].title,
            price: price[i],
            picture: items[i].thumbnail,
            condition: items[i].condition,
            free_shipping: items[i].shipping.free_shipping
          });
        }

        newJson.push({
          items: itemsML
        });
      
         console.log("newJson",newJson);

        this.setState({ items });
      })
  }

  render() {
    return (
      <div className='container container-list-items' >
        <div className='row '>
          <div className="col-md-12" >
            <img className='rounded imgList' src={iphoneTest} />
            <label className="lbl-price">$ 1980</label>  <img src={iconCar} className='icon-car' />      <label className="lbl-right">Capital Federal</label> <br />
            <label className="lbl-title">Apple Ipod Touch 5g 16gb Negro  Igual a Nuevo Completo Unico!</label>
          </div>
          <hr />

          <div className="col-md-12" >
            <img className='rounded imgList' src={iphoneTest} />
            <label className="lbl-price">$ 1980</label>  <img src={iconCar} className='icon-car' />      <label className="lbl-right">Capital Federal</label> <br />
            <label className="lbl-title">Apple Ipod Touch 5g 16gb Negro  Igual a Nuevo Completo Unico!</label>
          </div>
          <hr />
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
          <div className="col-md-12" >
            <img className='rounded imgList' src={iphoneTest} />
            <label className="lbl-price">$ 1980</label>  <img src={iconCar} className='icon-car'/>      <label className="lbl-right">Capital Federal</label> <br />
            <label className="lbl-title">Apple Ipod Touch 5g 16gb Negro  Igual a Nuevo Completo Unico!</label>
          </div>
          <hr/>

          <div className="col-md-12" >
            <img className='rounded imgList' src={iphoneTest} />
            <label className="lbl-price">$ 1980</label>  <img src={iconCar} className='icon-car'/>      <label className="lbl-right">Capital Federal</label> <br />
            <label className="lbl-title">Apple Ipod Touch 5g 16gb Negro  Igual a Nuevo Completo Unico!</label>
          </div>
          <hr/>
        </div>
      </div> 
    );
}

export default React.memo(Index);*/