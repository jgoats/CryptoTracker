import React, { Component } from 'react'
import "./changecurrency.scss";
import DollarSign from "../../images/dollar-sign.svg";
import DropDownArrow from "../../images/drop-down-arrow.svg";

export default class ChangeCurrency extends Component {
    render() {
        const { currency } = this.props;
        return (
            <div className="change-currency-container">
                <button className="change-currency">
                    <img className="current-currency" src={DollarSign} />
                    <div className="currency-type">{currency}</div>
                    <img className="currency-drop-down-arrow" src={DropDownArrow} />
                </button>
            </div>
        )
    }
}
