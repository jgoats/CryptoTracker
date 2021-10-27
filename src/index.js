import React from "react";
import ReactDom from "react-dom";
import Landingpage from "../src/components/landingpage/landingpage.js";
import Axios from "axios";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currency: "usd",
            historicalPrices: [],
            coin: "bitcoin",
            dates: [],
            lineGraphColor: [],
            totalvolumn: [],
            currentcoinprice: "",
            handleSpinner: "active-spinner"
        }
        this.handleDuration = this.handleDuration.bind(this);
    }
    handleDuration(num) {
        var url;
        var newUrl;
        switch (num) {
            case 24:
                this.setState({ handleSpinner: "active-spinner" })
                url = `api.coingecko.com/api/v3/coins/${this.state.coin}/market_chart?vs_currency=${this.state.currency}&days=1`;
                newUrl = "https://" + url.replace(" ", "");
                Axios({
                    method: "get",
                    url: newUrl,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((result) => {
                    let prices = result.data.prices.map((price) => {
                        return Math.floor(price[1])
                    })
                    this.setState({
                        historicalPrices: prices,
                        dates: prices,
                        handleSpinner: "default-spinner"
                    })
                    if (this.state.historicalPrices[0] < this.state.historicalPrices[this.state.historicalPrices.length - 1]) {
                        this.setState({
                            lineGraphColor: ["rgb(25,150,64)", "rgba(25,150,64 , 0.2)"]
                        })
                    }
                    else {
                        this.setState({
                            lineGraphColor: ["rgb(206,18,18)", "rgba(206,18,18,0.2)"]
                        })
                    }
                }).catch((err) => {
                    console.log(err)
                })
                break;
            case 7:
                url = `api.coingecko.com/api/v3/coins/${this.state.coin}/market_chart?vs_currency=${this.state.currency}&days=7`;
                newUrl = "https://" + url.replace(" ", "");
                Axios({
                    method: "get",
                    url: newUrl,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((result) => {
                    let prices = result.data.prices.map((price) => {
                        return Math.floor(price[1])
                    })
                    this.setState({
                        historicalPrices: prices,
                        dates: prices,
                        handleSpinner: "default-spinner"
                    })
                    if (this.state.historicalPrices[0] < this.state.historicalPrices[this.state.historicalPrices.length - 1]) {
                        this.setState({
                            lineGraphColor: ["rgb(25,150,64)", "rgba(25,150,64 , 0.2)"]
                        })
                    }
                    else {
                        this.setState({
                            lineGraphColor: ["rgb(206,18,18)", "rgba(206,18,18,0.2)"]
                        })
                    }
                }).catch((err) => {
                    console.log(err)
                });
                break;
            case 30:
                url = `api.coingecko.com/api/v3/coins/${this.state.coin}/market_chart?vs_currency=${this.state.currency}&days=30`;
                newUrl = "https://" + url.replace(" ", "");
                Axios({
                    method: "get",
                    url: newUrl,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((result) => {
                    let prices = result.data.prices.map((price) => {
                        return Math.floor(price[1])
                    })
                    this.setState({
                        historicalPrices: prices,
                        dates: prices,
                        handleSpinner: "default-spinner"
                    })
                    if (this.state.historicalPrices[0] < this.state.historicalPrices[this.state.historicalPrices.length - 1]) {
                        this.setState({
                            lineGraphColor: ["rgb(25,150,64)", "rgba(25,150,64 , 0.2)"]
                        })
                    }
                    else {
                        this.setState({
                            lineGraphColor: ["rgb(206,18,18)", "rgba(206,18,18,0.2)"]
                        })
                    }
                }).catch((err) => {
                    console.log(err)
                })
                break;
            case 180:
                url = `api.coingecko.com/api/v3/coins/${this.state.coin}/market_chart?vs_currency=${this.state.currency}&days=180`;
                newUrl = "https://" + url.replace(" ", "");
                Axios({
                    method: "get",
                    url: newUrl,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((result) => {
                    let prices = result.data.prices.map((price) => {
                        return Math.floor(price[1])
                    })
                    this.setState({
                        historicalPrices: prices,
                        dates: prices,
                        handleSpinner: "default-spinner"
                    })
                    if (this.state.historicalPrices[0] < this.state.historicalPrices[this.state.historicalPrices.length - 1]) {
                        this.setState({
                            lineGraphColor: ["rgb(25,150,64)", "rgba(25,150,64 , 0.2)"]
                        })
                    }
                    else {
                        this.setState({
                            lineGraphColor: ["rgb(206,18,18)", "rgba(206,18,18,0.2)"]
                        })
                    }
                }).catch((err) => {
                    console.log(err)
                })
                break;
            case 365:
                url = `api.coingecko.com/api/v3/coins/${this.state.coin}/market_chart?vs_currency=${this.state.currency}&days=365`;
                newUrl = "https://" + url.replace(" ", "");
                Axios({
                    method: "get",
                    url: newUrl,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((result) => {
                    let prices = result.data.prices.map((price) => {
                        return Math.floor(price[1])
                    })
                    this.setState({
                        historicalPrices: prices,
                        dates: prices,
                        handleSpinner: "default-spinner"
                    })
                    if (this.state.historicalPrices[0] < this.state.historicalPrices[this.state.historicalPrices.length - 1]) {
                        this.setState({
                            lineGraphColor: ["rgb(25,150,64)", "rgba(25,150,64 , 0.2)"]
                        })
                    }
                    else {
                        this.setState({
                            lineGraphColor: ["rgb(206,18,18)", "rgba(206,18,18,0.2)"]
                        })
                    }
                }).catch((err) => {
                    console.log(err)
                })
                break;
            case 1825:
                url = `api.coingecko.com/api/v3/coins/${this.state.coin}/market_chart?vs_currency=${this.state.currency}&days=1825`;
                newUrl = "https://" + url.replace(" ", "");
                Axios({
                    method: "get",
                    url: newUrl,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((result) => {
                    let prices = result.data.prices.map((price) => {
                        return Math.floor(price[1])
                    })
                    this.setState({
                        historicalPrices: prices,
                        dates: prices,
                        handleSpinner: "default-spinner"
                    })
                    if (this.state.historicalPrices[0] < this.state.historicalPrices[this.state.historicalPrices.length - 1]) {
                        this.setState({
                            lineGraphColor: ["rgb(25,150,64)", "rgba(25,150,64 , 0.2)"]
                        })
                    }
                    else {
                        this.setState({
                            lineGraphColor: ["rgb(206,18,18)", "rgba(206,18,18,0.2)"]
                        })
                    }
                }).catch((err) => {
                    console.log(err)
                })
                break;
        }
    }
    componentDidMount() {
        let url = `api.coingecko.com/api/v3/coins/${this.state.coin}/market_chart?vs_currency=${this.state.currency}&days=1`;
        let newUrl = "https://" + url.replace(" ", "");
        this.setState({
            handleSpinner: "active-spinner"
        })
        Axios({
            method: "get",
            url: newUrl,
            headers: {
                "Content-Type": "application/json"
            }
        }).then((result) => {
            let prices = result.data.prices.map((price) => {
                return Math.floor(price[1])
            })
            this.setState({
                historicalPrices: prices,
                dates: prices,
                totalvolumn: [],
                handleSpinner: "default-spinner"
            })
            result.data.total_volumes.forEach((value, index) => {
                if ((index + 1) % 12 == 0) {
                    this.setState({
                        totalvolumn: [...this.state.totalvolumn, Math.floor(value[1])]
                    })
                }
            });
            if (this.state.historicalPrices[0] < this.state.historicalPrices[this.state.historicalPrices.length - 1]) {
                this.setState({
                    lineGraphColor: ["rgb(25,150,64)", "rgba(25,150,64 , 0.2)"]
                })
            }
            else {
                this.setState({
                    lineGraphColor: ["rgb(206,18,18)", "rgba(206,18,18,0.2)"]
                })
            }
        }).catch((err) => {
            console.log(err)
        })
        let getCurrentPriceUrl = `api.coingecko.com/api/v3/simple/price?ids=${this.state.coin}&vs_currencies=${this.state.currency}`;
        let newGetCurrentPriceUrl = "https://" + getCurrentPriceUrl.replace(" ", "");
        console.log(newGetCurrentPriceUrl);
        Axios({
            method: "get",
            url: newGetCurrentPriceUrl,
            headers: {
                "Content-Type": "application/json"
            }
        }).then((result) => {
            this.setState({
                currentcoinprice: result["data"][`${this.state.coin}`][`${this.state.currency}`]
            })
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {

        return (
            <div>
                <Landingpage
                    coin={this.state.coin}
                    totalvolumn={this.state.totalvolumn}
                    graphColor={this.state.lineGraphColor}
                    graphlabels={this.state.dates}
                    handleDuration={this.handleDuration}
                    price={this.state.historicalPrices}
                    currentcoinprice={this.state.currentcoinprice}
                    currency={this.state.currency}
                    handleSpinner={this.state.handleSpinner}
                />
            </div>
        )
    }
}



ReactDom.render(React.createElement(App), document.getElementById("root"));