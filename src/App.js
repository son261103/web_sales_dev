import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store'; // Import Redux store
import AppRouter from './router/AppRouter'; // Import AppRouter
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <Provider store={store}>
            <div>
                <AppRouter/>
            </div>
            <ToastContainer/>
        </Provider>
    );
}

export default App;
