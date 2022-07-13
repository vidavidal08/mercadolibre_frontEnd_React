import logoML from './assets/Logo_ML.png';
import lupa from './assets/ic_Search.png';
import './css/StyleHeader.css';
import iphoneTest from './assets/iphoneTest.webp';
import iconCar from './assets/ic_shipping@2x.png'
import imgDetail from './assets/iphoneDetail.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function MainPage() {
  return (
    <div>
      <nav id="navBar" className="navbar navbar-light">
        <div className="container">
          <form className="container-fluid">
            <div className="input-group">
              <a className="navbar-brand" href="#">
                <img src={logoML} />
              </a>
              <input id="searchBar" className="form-control" type="search" placeholder="Nunca dejes de buscar" aria-label="Search" />
              <button className="btn btnSearch" type="submit" id="btnSearch"><img src={lupa} /> </button>
            </div>
          </form>
        </div>
      </nav>

      <div className='container' >
        <nav id="breadcrumb" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Electrónica,Audio y Video</a></li>
            <li className="breadcrumb-item active" aria-current="page">iPod</li>
            <li className="breadcrumb-item active" aria-current="page">Reproductores</li>
            <li className="breadcrumb-item active" aria-current="page">iPod touch</li>
            <li className="breadcrumb-item active" aria-current="page">32 GB</li>
          </ol>
        </nav>
      </div>
      {/* 
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
      </div> */}

      <div className='container container-list-items' >
        <div className='row '>
          <div className="col-md-6" >

            <img src={imgDetail} className="img-detail" />

          </div>
          <div className="col-md-6" >
            <label className="lbl-sold"> Nuevo - 234 vendidos</label> <br/>

            <label className="lbl-title-detail"> <b>Deco Reverse Sombrero Oxford</b></label><br/>
            <label className="lbl-price-detail">$ 1980</label> <label className='lbl-decimals'>00</label><br />
            <button className='btn btn-primary'> Comprar</button>
          </div>
        </div>

        <div className='col-md-12'>
        <label className="lbl-descrip-title"> Descripción del producto </label><br/>
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

      </div>
    </div>




  );
}

export default MainPage;
