import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux'; 
import {tabReducer, numbersReducer, pictureReducer, historyReducer, productReducer, basketReducer } from './reducers/reducers.js';



let initialState = {
	tab: 1,  // 1=väder, 2=tal
	imageUrl: 'http://www.gexing.me/uploads/allimg/141016/23040SH4-0.jpg',
	numbers: [2, 4, 8, 16, 32, 64],
    history: [{type: "test"}],
    products: [
        {
            name: "katt",
            image: "http://www.nawt.org.uk/sites/default/files/pet_cat.jpg",
            price: 44
        },
        {
            name: "Hund",
            image: "http://www.planethund.com/wp-content/uploads/2012/11/planethund-news-deutschland-50x50.jpg",
            price: 33
        },
        {
            name: "Snigel",
            image: "http://0.gravatar.com/avatar/053128bbeadecfbc5c1745b5eaa2f4d2?s=49&d=mm&r=g",
            price: 99
        }
    ],
    basket: []
}


let rootReducer = combineReducers({
	tab: tabReducer,
	numbers: numbersReducer,
	imageUrl: pictureReducer,
    history: historyReducer,
    products: productReducer,
    basket: basketReducer
});

const store = createStore(rootReducer, initialState);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();