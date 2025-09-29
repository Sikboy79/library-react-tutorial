import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import Book from "../components/ui/Book";
import Cart from "./Cart";

const BookInfo = ({ books, addToCart }) => {
  const { id } = useParams();
  const book = books.find(book => +book.id === +id);

  function addBookToCart(book) {
    addToCart(book);
  }

  function bookExistsOnCart() {
    return Cart.find(book => +book.id === +id);
  }
console.log(id)
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    origionalPrice={book.origionalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book__sumary">
                  <h3 className="book__sumary--title">Sumary</h3>
                  <p className="book__sumary--para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                    animi iste consectetur commodi, error perferendis. Sed,
                    labore dolorum, repudiandae a alias neque ex adipisci minus
                    corrupti dicta maiores voluptates hic.
                  </p>
                  <p className="book__sumary--para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                    animi iste consectetur commodi, error perferendis. Sed,
                    labore dolorum, repudiandae a alias neque ex adipisci minus
                    corrupti dicta maiores voluptates hic.
                  </p>
                </div>
                {bookExistsOnCart ? (
                  <Link to={`/cart`} className="book__link">
                    <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addBookToCart(book)}>
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recomended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
