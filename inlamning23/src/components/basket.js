import React, { Component } from 'react';
import {actionDeleteProduct, actionHistory} from "../actions/actions.js";
import '../App.css';
import {connect} from "react-redux";


 class Basket extends Component {
  render() {
    let i = 0;
    const productList = this.props.basket.map(p => <li key={i++}>{p.name}, {p.price}kr <br /> <img alt="" src={p.image}/><br />
    <button onClick={() => this.handleClickRemoveFromBasket(p)}>Ta bort</button>
    </li>);
    let sum = 0;
    this.props.basket.forEach(p=>{
        sum+= p.price;
        });
    return (
        <div>
            <p>Din kundvagn</p>
            <ul>
                {productList}
            </ul>
            <div>Antal varor i kundvagnen: {productList.length}</div>
             <div>Totalkostnad: {sum}</div>
        </div>
        
    );
  }
     
     
   handleClickRemoveFromBasket(removeFromBasket) {
      let action = actionDeleteProduct(removeFromBasket);
      this.props.dispatch(action);
      this.props.dispatch(actionHistory(action));
    } 
}


export default connect()(Basket);