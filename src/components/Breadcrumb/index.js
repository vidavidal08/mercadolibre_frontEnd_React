import React, { Component } from 'react';

import breadcrumbCss from './breadcrumb.css';
import axios from 'axios';

export default class Index extends Component {

  state = {
    breadcrumb: []
  }

  async componentDidMount() {
    var URLactual = window.location.href;
    

    console.log(URLactual);
    if(URLactual.includes('items?search=')){
      let id = URLactual.split('=');
      console.log("estas en listView");
      axios.get(`http://localhost:3001/api/items?q=${id[1]}`)
      .then(res => {
        const breadcrumb = res.data[0].categories;
        this.setState({ breadcrumb });
        this.state.breadcrumb = breadcrumb;
        console.log(this.state);
      })
    }else if(URLactual.includes('items/')){
      console.log("vista detalle");
      let id = URLactual.split('items/');
      
      axios.get(`http://localhost:3001/api/items/MLA1120971742`)
      .then(res => {
        const breadcrumb = res.data[0].categories;
        this.setState({ breadcrumb });
        this.state.breadcrumb = breadcrumb;
        console.log(this.state);
      })
    }

   
  }

  render() {
    return (
      <div className="container" >
      <nav  aria-label="breadcrumb " className="div-bc">
        <ol className="breadcrumb">
        {this.state.breadcrumb.map((item,i) => (
          <li key ={i} className="breadcrumb-item" aria-current="page">{item.name} </li>
          ))}
        </ol>
      </nav>
    </div>
  )
  }
}