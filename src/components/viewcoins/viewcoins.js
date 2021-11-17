import React, { Component } from 'react'
import "./viewcoins.scss";
import { Link } from "react-router-dom";

export default class ViewCoins extends Component {
    render() {
        return (
            <div>
                <Link to="/" className="view-coins-btn-default">Coins</Link>
            </div>
        )
    }
}
