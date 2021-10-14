import React, { Component } from 'react'
import "./navigation.scss";
import ChangeCurrency from "../changecurrency/changecurrency.js";
import ViewCoins from "../viewcoins/viewcoins.js";
import ViewPortfolio from "../portfolio/portfolio.js";
import SearchCoins from "../searchcoins/searchcoins.js";


export default class Navigation extends Component {
    render() {
        return (
            <div className="navigation-container">
                <section>
                    <ViewCoins />
                    <ViewPortfolio />
                </section>
                <SearchCoins />
                <ChangeCurrency currency="USD" />
            </div>
        )
    }
}
