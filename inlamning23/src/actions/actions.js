const CHANGE_TAB = 'CHANGE_TAB';
const ADD_PRODUCT = 'ADD_PRODUCT';
const HISTORY = 'HISTORY';
const ADD_NUMBER = 'ADD_NUMBER';
const ADD_PRODUCT_TO_BASKET = "ADD_PRODUCT_TO_BASKET";
const DELETE_PRODUCT = 'DELETE_PRODUCT';

function actionChangeTab(selectedTab) {
	return {
		type: CHANGE_TAB,
		tab: selectedTab
	}
}


function actionAddToBasket (addToBasket) {
	return {
		type: ADD_PRODUCT_TO_BASKET,
		product: addToBasket
	}
}


function actionAddProduct(addProduct) {
	return {
		type: ADD_PRODUCT,
		product: addProduct
	}
}

function actionDeleteProduct(deleteProduct){
    return {
        type: DELETE_PRODUCT,
        product: deleteProduct
    }
}

function actionHistory(action) {
	return {
		type: HISTORY,
		action
	}
}


function actionAddNumber(x) {
	return {
		type: ADD_NUMBER,
		number: x
	}
}


export { HISTORY, ADD_PRODUCT_TO_BASKET, ADD_PRODUCT, CHANGE_TAB,  ADD_NUMBER, actionAddToBasket, actionAddNumber, actionChangeTab, actionAddProduct, actionHistory, DELETE_PRODUCT, actionDeleteProduct };
