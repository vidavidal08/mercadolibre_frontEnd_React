import React from 'react';
import itemList from './itemList.css';
import iphoneTest from '../../assets/iphoneTest.webp';
import iconCar from '../../assets/ic_shipping@2x.png'


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

export default React.memo(Index);