import React from "react";
import ReactDOM from "react-dom";
import "@assets/style/style.scss";

ReactDOM.render(<div>welcome！</div>, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
