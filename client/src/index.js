import React from "react";
import ReactDOM from "react-dom";
import "./styles/paper.min.css";
import "./styles/index.css";
import App from "./App";

// import registerServiceWorker from "./registerServiceWorker";
import { unregister } from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
unregister();
// registerServiceWorker();
