import React from "react";
import "./searchbar.scss";
import Search from "../../images/search-bar.svg";

export default class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ""
        }
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch(e) {
        this.setState({
            input: e.target.value
        })
    }
    render() {
        return (
            <div className="search-bar-container">
                <img className="search-icon" src={Search} />
                <form className="searchbar">
                    <input onChange={(e) => this.handleSearch(e)} type="search" placeholder="Search..." />
                </form>
            </div>
        )
    }
}