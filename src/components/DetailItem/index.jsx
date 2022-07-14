import React from 'react';
import detailItem from './detailItem.css';
import imgDetail from '../..//assets/iphoneDetail.png';

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

