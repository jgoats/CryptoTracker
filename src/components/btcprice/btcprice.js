import React, { Component } from 'react';
import "./btcprice.scss";

export default class BTCprice extends Component {
    render() {
        return (
            <p className="btc-price">
                {`${this.props.currentcoinprice}`}
            </p>
        )
    }
}
