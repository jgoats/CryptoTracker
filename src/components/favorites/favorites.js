import React from "react";
import "./favorites.scss";
import FavoriteIcon from "../../images/add-to-favorites.svg";

export default class Favorites extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div className="favorite-icon-container">
                <img className="favorite-icon" src={FavoriteIcon} />
            </div>
        )
    }
}