import React, { Component, KeyboardEvent } from 'react';
import logoML from '../../assets/Logo_ML.png';
import lupa from '../../assets/ic_Search.png';
import cssHeader from './header.css';
import { Link } from 'react-router-dom';

export default class Index extends Component {

    state = {
        value: ""
    }



    render() {

        var URLactual = window.location.href;
        var id = URLactual.split('=');
        const inputValue = id[1];

        const handleClick = () => {
            console.log('this is:', this.state.value);
            const value = this.state.value
            if (value !== "") {
                window.location.href = `/items?search=${value}`;
            } else {
                window.location.href = `/`;
            }
        }

        const geTtext = ({ target }) => {
            this.state.value = target.value;
        }

        return (
            <header>
                <div>
                    <nav id="navBar" className="navbar navbar-light">
                        <div className="container">
                            <form className="container-fluid">
                                <div className="input-group">
                                    <a className="navbar-brand" href="/">
                                        <img src={logoML} />
                                    </a>
                                    <input id="searchBar" className="form-control" type="search" placeholder="Nunca dejes de buscar" aria-label="Search" onChange={geTtext}  />

                                    <button className="btn btnSearch" type="button" id="btnSearch" onClick={handleClick}><img src={lupa} /> </button>


                                </div>
                            </form>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}