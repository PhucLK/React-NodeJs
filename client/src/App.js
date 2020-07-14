import React, { Component } from "react";
import "./App.css";
import Table from "./Table";
import Form from "./Form";
import axios from "axios";

class App extends Component {
  state = {
    products: [],
    product: {},
    name: "",
    price: "",
    _id: 0,
  };

  render() {
    return (
      <div className="App">
        <h1>Todo-App</h1>
        <Table
          delete={this.delete}
          edit={this.edit}
          products={this.state.products}
        ></Table>
        <Form
          _id={this.state._id}
          name={this.state.name}
          price={this.state.price}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        ></Form>
      </div>
    );
  }

  addProduct = (name, price) => {
    axios({
      method: "post",
      url: "/add",
      headers: {},
      data: {
        name: name,
        price: price, // This is the body part
      },
    }).then(() => {
      this.componentDidMount();
    });
  };

  delete = (_id) => {
    axios
      .delete(`/products/${_id}`) // <-- remove ;
      .then(() => {
        this.componentDidMount();
      });
  };

  edit = (_id) => {
    var product;
    axios.get(`/products/${_id}`).then((res) => {
      product = res.data;
      this.setState({
        name: product.name,
        price: product.price,
        _id: _id,
      });
    });
  };

  componentDidMount() {
    axios.get("/products").then((res) => {
      const products = res.data;
      this.setState({ products: products });
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state._id !== 0) {
      const product = {
        name: this.state.name,
        price: this.state.price,
      };
      axios({
        method: "put",
        url: `/products/${this.state._id}`,
        data: product,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      })
        .then((response) => {
          //handle success
          this.componentDidMount();
          this.setState({
            name: "",
            price: "",
            _id : 0
          });
        })
        .catch((response) => {
          //handle error
          console.log(response);
        });
    } else {
      const name = this.state.name;
      const price = this.state.price;
      this.setState({
        product: {
          name: name,
          price: price,
        },
        name: "",
        price: "",
      });
      this.addProduct(name, price);
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
}

export default App;
