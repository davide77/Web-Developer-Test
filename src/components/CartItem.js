import React, { Component} from "react";
import {hot} from "react-hot-loader";
import {price, productListing, stockLevel} from "../utils/product";
import Delete from '../assets/images/Delete.svg'

class CartItem extends Component{
    constructor(props){
        super(props);
        this.state = {quantity: this.props.quantity};

        this.handleChangeItemQuantity = this.handleChangeItemQuantity.bind(this);
        this.incrementItemQuantity = this.incrementItemQuantity.bind(this);
        this.decrementItemQuantity = this.decrementItemQuantity.bind(this);
     }

    incrementItemQuantity(){
       let current = parseInt(this.props.quantity);
       this.setQuantity(current+1)
    }
    decrementItemQuantity(){
        let current = parseInt(this.props.quantity);
        this.setQuantity(current-1);
    }
    setQuantity(new_quantity){
        if(new_quantity){
            new_quantity = parseInt(new_quantity)
        }
        if(validQuantity(new_quantity, this.props.sku)){
            this.props.setItemQuantity(this.props.sku,new_quantity)
            this.setState({quantity: new_quantity});
        }
    }

    handleChangeItemQuantity(event) {
        const new_quantity = event.target.value;
        this.setQuantity(new_quantity);
    }
    render(){
        const sku = this.props.sku;
        const item = productListing(sku);
        if(!item.size){
            item.size = "one size";
        }
        const cost = (price(sku) * this.props.quantity).toFixed(2);
        if(!this.props.isMobile){
            return(
                <li className="items list-container grid">
                    <div className="product">{item.name}, {item.size}</div>
                    <div className="price">£{price(this.props.sku)}</div>
                    <div className="quantity-container">     
                        <button data-type="decrease" aria-label="decrease product number" onClick={this.decrementItemQuantity}>-</button>
                        <input type="number" className="input" value={this.state.quantity} onChange={this.handleChangeItemQuantity} />
                        <button data-type="increase" aria-label="increase product number" onClick={this.incrementItemQuantity}>+</button>
                    </div>
                    <div className="cost">£{cost} </div>       
                    <button aria-label="delete item" className="delete-item" onClick={this.props.removeItem}>
                        <img src={Delete} alt="remove item"/></button>
                </li>
            );
        }else{
            return(
                <li className="items">
                    <div className="product">{item.name}, {item.size}</div>
                    <div className="grid">
                        <label>Price</label>
                        <div className="price">${price(this.props.sku)}</div>
                        <label>Quantity</label>
                        <div className="quantity-container">     
                            <button data-type="decrease" aria-label="decrease product number" onClick={this.decrementItemQuantity}>-</button>
                            <input type="number" className="input"  value={this.state.quantity} onChange={this.handleChangeItemQuantity} />
                            <button data-type="increase" aria-label="increase product number" onClick={this.incrementItemQuantity}>+</button>
                        </div>
                        <label className="cost">Cost</label>
                        <div className="cost">£{cost} </div>
                        <label>Remove</label>       
                        <button  aria-label="delete item" className="delete-item" onClick={this.props.removeItem}><img src={Delete} alt="remove item"/></button>
                    </div>
                </li>
            );
        }
       
    }
} 


function validQuantity(new_quantity, item_sku){
    if(new_quantity>stockLevel(item_sku) || new_quantity < 0){
        console.error("invalid quantity")
        return false;
    }
    return true;
}

export default hot(module)(CartItem);
