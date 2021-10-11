import React from "react";
import ReactDom from "react-dom";

export default function App() {
    return (
        <div>
            hello from APP
        </div>
    )
}

ReactDom.render(React.createElement(App), document.getElementById("root"));