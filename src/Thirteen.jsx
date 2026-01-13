import { useState } from "react";

function Thirteen() {
  const products = [
    { id: 1, name: "Apple", price: 2 },
    { id: 2, name: "Banana", price: 1 },
    { id: 3, name: "Orange", price: 3 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <h1>Shopping Cart</h1>

      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <p>
            {product.name} – ${product.price}
          </p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}

      <h2>Cart</h2>
      <p>Total items: {totalItems}</p>
      <p>Total price: ${totalPrice}</p>
    </>
  );
}

export default Thirteen;
