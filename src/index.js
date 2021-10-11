import React from "react";
import ReactDom from "react-dom";
import Landingpage from "../src/components/landingpage/landingpage.js"

export default function App() {
    return (
        <div>
            <Landingpage />
        </div>
    )
}

ReactDom.render(React.createElement(App), document.getElementById("root"));