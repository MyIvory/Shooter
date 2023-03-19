import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux";
import { Provider } from "react-redux";
import i18n from './i18n';
import $ from "jquery"
import { Spin } from "antd";

i18n.loadLanguages(['en', 'ua'])
window.screen.width<600?$("#myVideo").hide():$("#myVideo").show()
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store} >
        <Suspense fallback={ 
            <div className="suspense">
                <Spin size="large" />
            </div>
        
        }>
            <App />
        </Suspense>
    </Provider>

);
reportWebVitals();