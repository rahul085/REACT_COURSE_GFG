import React from "react";
const products = [
  { id: 1, item: "shirt" },
  { id: 2, item: "T-shirts" },
  { id: 3, item: "Pants" },
];

const App = () => {
  return (
    <>
      <h1 className="font-bold text-2xl">Hello and welcome</h1>
      <ul>
        {products.map((product) => {
          return <li key={product.id} className={`${product.id%2===0?" bg-green-600 text-white":"bg-red-600 text-white"} m-2  `} >{product.item}</li>;
        })}
      </ul>
    </>
  );
};

export default App;
