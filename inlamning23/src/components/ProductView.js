import React, {Component} from "react";
import {actionAddToBasket, actionHistory} from "../actions/actions.js";
import {connect} from "react-redux";


class ProductView extends Component {
    render(){
    let i = 0;
    const productList = this.props.products.map(p => <li key={i++}>{p.name}, {p.price}kr <br /> <img src={p.image}/><br />
    <button onClick={() => this.handleClickAddToBasket(p)}>Lägg i kundvagn</button></li>);
  return <ul>{productList}</ul> }
  
  handleClickAddToBasket(productToBasket){
      let action = actionAddToBasket(productToBasket);
      this.props.dispatch(action);
      this.props.dispatch(actionHistory(action));
  }
  
}
                                     
export default connect()(ProductView);