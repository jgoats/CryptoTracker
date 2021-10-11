import React from "react";
import "./landingpage.scss";
import SearchBar from "../searchbar/searchbar.js";

export default class Landingpage extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div class="landingpage-container">
                <SearchBar />
            </div>
        )
    }
}