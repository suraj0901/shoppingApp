import { useState } from "react";
import Cart from "./component/Cart/Cart";
import Header from "./component/Header/Header";
import Meals from "./component/Meals/Meals";

function App() {
  const [showCart, setShowCart] = useState(false);
  return (
    <div className="">
      {showCart && <Cart onClose={() => setShowCart(false)} />}
      <Header onClick={() => setShowCart(true)} />
      <main className="">
        <Meals />
      </main>
    </div>
  );
}

export default App;
