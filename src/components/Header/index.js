import React from 'react';
import logoML from '../../assets/Logo_ML.png';
import lupa from '../../assets/ic_Search.png';
import cssHeader from './header.css';

const Index = () => {
    return (
        <header>
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
            </div>
        </header>
    );
}

export default React.memo(Index);