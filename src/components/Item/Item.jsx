import React from "react";

import "../Item/itemstyles.css";
import { Link } from "react-router-dom";
import AddCartButton from "../Buttons/AddCartButton";

const Item = ({ nombre, precio, id, imagen, categoria }) => {
  return (
    <div
      key={id}
      style={{ width: "18rem" }}
      className="productCard card col-lg-3 col-md-4 col-sm-12"
    >
      <div className="title">
        <h4 className="card-title">{nombre}</h4>
      </div>
      <img id="product-img" src={imagen} />
      <p className="price underline">
        <b>Precio:</b> ${precio}
      </p>
      <p className="card-text">
        <b>Categoría:</b> {categoria}
      </p>
      <AddCartButton />
      <Link to={`/detalle/${id}`}>
        <button className="button">Ver detalle</button>
      </Link>
    </div>
  );
};

export default Item;
