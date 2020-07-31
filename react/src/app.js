import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";

class JSX extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello I`m JSX</h1>
                <h3>This is test page</h3>
            </div>
        );
    }
}

ReactDOM.render(<JSX />, document.getElementById("app"));
