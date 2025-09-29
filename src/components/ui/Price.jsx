import React from "react";
import Book from "./Book";

const Price = ({ salePrice, originalPrice }) => {
  return (
    <div className="book__price">
      {salePrice ? (
        <>
          <span className="book__price--normal">
            ${Book.originalPrice.toFixed(2)}
          </span>
          {Book.salePrice.toFixed(2)}
        </>
      ) : (
        <>${Book.originalPrice}</>
      )}
    </div>
  );
};

export default Price;
