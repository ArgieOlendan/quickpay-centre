import React, { Component } from "react";

class Product extends Component {
  render() {
    console.log("Rendered", this.props.products);
    return <div></div>;
  }
}

export default Product;
