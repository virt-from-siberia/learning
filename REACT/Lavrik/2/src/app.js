import React from "react";
// import Normal from "./hw/normal";
import AppMinMax from "./hw/normal";

export default class extends React.Component {
  state = {
    products: [
      {
        id: 100,
        title: "Iphone 200",
        price: 12000,
        rest: 10,
        current: 1
      },
      {
        id: 101,
        title: "Samsung s8 ",
        price: 22000,
        rest: 5,
        current: 1
      },
      {
        id: 102,
        title: "Sony experia ",
        price: 7000,
        rest: 7,
        current: 1
      }
    ]
  };

  changeCnt(i, cnt) {
    let newProducts = [...this.state.products];
    let newProduct = { ...newProducts[i] };
    newProduct.current = cnt;
    newProducts[i] = newProduct;
    this.setState({
      products: newProducts
    });
  }

  render() {
    let productsRows = this.state.products.map((product, index) => {
      return (
        <tr key={product.id}>
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>
            <AppMinMax
              min={1}
              max={product.rest}
              cnt={product.current}
              onChange={cntFromChildren => {
                return this.changeCnt(index, cntFromChildren);
              }}
            />
          </td>
          <td>{product.price * product.current}</td>
        </tr>
      );
    });

    return (
      <div>
        <h2> CART </h2>
        <table>
          <tbody>
            <tr>
              <td>Title</td>
              <td>Cost</td>
              <td>Count</td>
              <td>Total</td>
            </tr>
            {productsRows}
          </tbody>
        </table>
        <h3>{}</h3>
      </div>
    );
  }
}
