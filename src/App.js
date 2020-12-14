import React, { Component } from "react";
import Product from "./components/product";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
    this.handleGetProject = this.handleGetProject.bind();
  }

  componentDidMount() {
    this.handleGetProject();
  }

  handleGetProject = async () => {
    let data = await axios
      .get(
        `https://qp-project.herokuapp.com/api/project${window.location.pathname}`
      )
      .then((res) => {
        return res;
      })
      .catch((err) => console.error(err));

    this.setState({ products: data.data.products });
  };

  render() {
    const productIsLoaded = this.state.products.length > 0;
    let product;
    if (productIsLoaded) {
      product = <Product products={this.state.products} />;
    }
    return (
      <React.Fragment>
        <main className="container">{product}</main>
      </React.Fragment>
    );
  }
}

export default App;
