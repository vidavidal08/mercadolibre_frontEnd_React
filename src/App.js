import logoML from './assets/Logo_ML.png';
import lupa from './assets/ic_Search.png';
import './css/StyleHeader.css';
import iphoneTest from './assets/iphoneTest.webp';


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

      <div className='container' id="container-list-items">
        <div className='row '>
          <div className="col-md-12" >
            <img className='rounded imgList' src={iphoneTest} />
            <label className="lbl-price">$ 1980</label>       <label className="lbl-right">Capital Federal</label> <br />
            <label className="lbl-title">Apple Ipod Touch 5g 16gb Negro  Igual a Nuevo Completo Unico!</label>
          </div>
          <hr/>

          <div className="col-md-12" >
            <img className='rounded imgList' src={iphoneTest} />
            <label className="lbl-price">$ 1980</label>       <label className="lbl-right">Capital Federal</label> <br />
            <label className="lbl-title">Apple Ipod Touch 5g 16gb Negro  Igual a Nuevo Completo Unico!</label>
          </div>
          <hr/>
        </div>
      </div>
    </div>



  );
}

export default MainPage;
