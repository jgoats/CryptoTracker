import React, { Component } from 'react'
import "./searchcoins.scss";
import EyeGlass from "../../images/eye-glass.svg";
import Axios from "axios";

export default class SearchCoins extends Component {
    constructor() {
        super();
        this.state = {
            coins: [],
        }
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch(e) {
        let input = e.target.value;
        let regex = /\s/;
        if (input.match(regex)) {
            input = input.split("").filter((item) => {
                if (item !== " ") {
                    return item;
                }
            }).join("");
        }
        switch (input.length) {
            case 1: {
                let url = `https://crypto-app-server.herokuapp.com/coins/${input}`
                Axios({
                    method: "get",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    url: url
                }).then((result) => {
                    let names = [];
                    result.data.map((item) => {
                        names.push(item.id);
                    })
                    this.setState({
                        coins: names
                    })
                }).catch((err) => {
                    if (err) {
                        this.setState({
                            coins: []
                        })
                    }
                })
            } break;
            case 2: {
                let url = `https://crypto-app-server.herokuapp.com/coins/${input}`
                Axios({
                    method: "get",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    url: url
                }).then((result) => {
                    let names = [];
                    result.data.map((item) => {
                        names.push(item.id);
                    })
                    this.setState({
                        coins: names
                    })
                }).catch((err) => {
                    if (err) {
                        this.setState({
                            coins: []
                        })
                    }
                })
            } break;
            case 3: {
                let url = `https://crypto-app-server.herokuapp.com/coins/${input}`
                Axios({
                    method: "get",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    url: url
                }).then((result) => {
                    let names = [];
                    result.data.map((item) => {
                        names.push(item.id);
                    })
                    this.setState({
                        coins: names
                    })
                }).catch((err) => {
                    if (err) {
                        this.setState({
                            coins: []
                        })
                    }
                })
            }
                break;
        }
        if (input.length == 0) {
            console.log(0);
            this.setState({
                coins: []
            })
        }

    }
    render() {
        return (
            <div className='search-coin-container'>
                <div className="search-container-shim"></div>
                <img className="search-eye-glass" src={EyeGlass} />
                <form>
                    <input onChange={(e) => this.handleSearch(e)} className="search-coin-input" type="search" placeholder="Search..." />
                </form>
                <div className="coin-results">

                    {this.state.coins ? this.state.coins.map((item, index) => <div className="coin-results-item" key={index}>
                        <button onClick={() => { this.props.changeCoin(item) }} key={index}>{item}</button>
                    </div>) : <div></div>}
                </div>
            </div>
        )
    }
}
