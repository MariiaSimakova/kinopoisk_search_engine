import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react';
import MovieStore from './common/store/movieStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = {
  movieStore: new MovieStore(),
};

root.render(
  <React.StrictMode>
    <Provider {...store}>
      <App />
    </Provider>
  </React.StrictMode>
);

