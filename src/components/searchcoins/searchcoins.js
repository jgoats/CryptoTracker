import React, { Component } from 'react'
import "./searchcoins.scss";
import EyeGlass from "../../images/eye-glass.svg";

export default class SearchCoins extends Component {
    render() {
        return (
            <div className='search-coin-container'>
                <div className="search-container-shim"></div>
                <img className="search-eye-glass" src={EyeGlass} />
                <form>
                    <input className="search-coin-input" type="search" placeholder="Search..." />
                </form>
            </div>
        )
    }
}
