import React from 'react';
import {Provider} from "react-redux";
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/store";
import Layout from "./components/Layout";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <App/>
                </Layout>
            </BrowserRouter>
        </Provider>
  </React.StrictMode>
);
reportWebVitals();
