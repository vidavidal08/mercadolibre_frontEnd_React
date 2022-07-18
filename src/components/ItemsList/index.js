import React, { Component } from 'react';
import itemList from './itemList.css';
import iconCar from '../../assets/ic_shipping@2x.png'
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class Index extends Component {

  state = {
    items: []
  }

  async componentDidMount() {
    axios.get(`http://localhost:3001/api/items?q=teclado`)
      .then(res => {
        const data = res.data[0];
        const items = res.data[0].items;

        console.log(items);

        this.setState({ items });
      })
  }

  render() {
    return (
      <div className='container container-list-items' >
      {this.state.items.map((item,i) => (
        <div key ={i} className='row '>
          <div className="col-md-12" >
          <Link to={item.id}> <img className='rounded imgList' src={item.picture} /></Link>
          <Link to={item.id}>  <label className="lbl-price">${item.price.amount}</label> </Link>{  item.free_shipping ?  <img src={iconCar} className='icon-car' />  : '' }    <label className="lbl-right">{item.address}</label> <br />
          <Link to={item.id}>  <label className="lbl-title">{item.title}</label> </Link>
          </div>
          <hr />
        </div>
  ))}
      </div>
    )
  }

}

