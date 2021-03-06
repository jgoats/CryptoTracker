import React, { Component } from 'react'
import "./navigation.scss";
import ChangeCurrency from "../changecurrency/changecurrency.js";
import ViewCoins from "../viewcoins/viewcoins.js";
import PortfolioBtn from "../portfolio/portfolio.js";
import SearchCoins from "../searchcoins/searchcoins.js";
import CoinHeaderInfo from "../coinheaderinfo/coinheaderinfo.js";


export default class Navigation extends Component {
    render() {
        return (
            <div>
                <div className="navigation-container">
                    <section>
                        <ViewCoins />
                        <PortfolioBtn />
                    </section>
                    <SearchCoins
                        changeCoin={this.props.changeCoin}
                        handleSpinner={this.props.handleSpinner} />
                    <ChangeCurrency changeCurrency={this.props.changeCurrency} currency={this.props.currency} currencyabbr={this.props.currencyabbr} />
                </div>
                <CoinHeaderInfo totalCoins={30} performance={20} mostCoin={"ETH"} secondMostCoin={"ETC"} thirdMostCoin={"DOGE"} />
            </div>
        )
    }
}
