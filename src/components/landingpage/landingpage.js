import React from "react";
import "./landingpage.scss";
import Navigation from "../navigation/navigation.js";
import Favorites from "../favorites/favorites.js";
import SearchBar from "../searchbar/searchbar.js";

export default class Landingpage extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div className="landingpage-container">
                <Navigation />
            </div>
        )
    }
}