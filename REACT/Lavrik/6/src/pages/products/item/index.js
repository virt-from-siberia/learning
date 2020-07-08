import React from "react";
import E404 from "~c/errors/404";
import { Link } from "react-router-dom";
import { routesMap } from "~/routes";
import ProductItem from "~c/products/item";

export default function(props) {
  let id = props.match.params.id;
  let product = productModel.getById(id);

  if (product === null) {
    return <E404 />;
  } else {
    return (
      <ProductItem
        title={product.title}
        price={product.price}
        backUrl={routesMap.home}
      />
    );
  }
}
