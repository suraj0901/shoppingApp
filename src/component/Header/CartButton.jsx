import CartIcon from "./CartIcon";
import Button from "../UI/Button";
import { useCart } from "../../store/store";
import React, { useState, useEffect } from "react";
import useBump from "../../hooks/use-bump";

export default React.memo(({ onClick }) => {
  const cart = useCart()[0];
  const size = [...cart.values()].reduce((a, b) => a + b.amount, 0);
  const bounce = useBump(size, size > 0);
  return (
    <Button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-3xl ${bounce}`}
    >
      <span>
        <CartIcon />
      </span>
      <span className="hidden md:block">Cart</span>
      <span className="bg-violet-600 px-2 rounded-full ">{size}</span>
    </Button>
  );
});
