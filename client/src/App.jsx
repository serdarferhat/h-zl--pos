import React from "react";
import CartTotal from "./components/cartTotal/CartTotal";
import Categories from "./components/header/categories/Categories";
import Header from "./components/header/Header";
import Products from "./components/products/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="home px-6 flex justify-between gap-10">
        <div className="categories min-w-[100px] flex-1 overflow-auto max-h-[calc(100vh-_-112px)]">
         <Categories/>
        </div>
        <div className="products flex-[8]">
         <Products/>
        </div>
        <div className="cart totals min-w-[300px]  border">
          <CartTotal/>
        </div>

      </div>
      
    </div>
  );
}

export default App;
