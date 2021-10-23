import React, { Component } from 'react'

export default class BTCvolumn extends Component {
    render() {

        return (
            <p className="btc-price">
                {this.props.totalvolumn[this.props.totalvolumn.length - 1]
                }
            </p>
        )
    }
}
