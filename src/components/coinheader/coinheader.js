import React, { Component } from 'react';
import "./coinheader.scss";

export default class CoinHeader extends Component {
    render() {
        return (
            <div className="coin-header-container">
                <span>#</span>
                <span>Logo</span>
                <p className="coin-header-name">Name</p>
                <p>{`Price (${this.props.currency})`}</p>
                <p>1h%</p>
                <p>24h%</p>
                <p>7d%</p>
                <p>Market Cap</p>
            </div>
        )
    }
}
