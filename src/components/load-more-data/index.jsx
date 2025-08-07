import React, { useState, useEffect } from "react";
import "./styles.css";

export default function LoadMoreData() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      console.log(result);

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    products && products.length === 194 ? setDisableButton(true) : null;
  }, [products]);

  if (loading) {
    return <div>Loading data! Please wait...</div>;
  }

  return (
    <div className="load-more-data">
      <div className="product-container">
        {products && products.length
          ? products.map((item, index) => (
              <div className="product" key={`${item.id}-${index}`}>
                <img src={item.thumbnail} alt={item.title} />
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableButton ? <p>You have reached to 194 products</p> : null}
      </div>
    </div>
  );
}
