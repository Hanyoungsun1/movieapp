import React, { Component } from 'react'

class Cake extends Component {
   state = {
    price: 10000,
    discounPrice : 0,
   }

  discount = () => {
    console.log('할인하기');
    this.setState(current => (
        {discounPrice : current.price * 0.7}
    ))
  }


  render() {
    return (
       <> 
           <div>Cake</div>
           <h1>cake 가격 : {this.state.price}</h1>
           <h2>할인 가격 : {this.state.discounPrice}</h2>
           <button onClick={this.discount}>할인</button>
      </>
    )
  }
}
export default Cake