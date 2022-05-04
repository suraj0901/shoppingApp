import React from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { useCart } from "../../store/store";
import Button from "../UI/Button";
import useBump from "../../hooks/use-bump";

export default React.memo(({ onClose }) => {
  const cart = useCart()[0];
  const list = [...cart.values()];
  const size = list.reduce((a, b) => a + b.amount, 0);
  const bounce = useBump(size, size > 0);
  const total = list.reduce((a, b) => a + b.amount * b.price, 0).toFixed(2);
  return (
    <Modal
      onClick={onClose}
      className="bg-gray-50 p-0 w-full sm:top-20 sm:translate-y-0  max-w-screen-sm sm:w-11/12 rounded-xl h-screen sm:h-fit"
    >
      <div className="sm:max-h-96 max-h-[80%] overflow-y-scroll ">
        {list.map((item, index) => (
          <CartItem key={index} data={item} />
        ))}
      </div>
      <div className="p-2 mb-4  font-medium flex gap-4 items-center">
        <span className="text-2xl">Total </span>
        <span className={`text-xl text-gray-800 ${bounce}`}> ${total}</span>
      </div>
      <div className="flex justify-end gap-4 mb-4">
        <Button fill={false} onClick={onClose} className="rounded-3xl">
          Close
        </Button>
        <Button className="rounded-3xl">Order</Button>
      </div>
    </Modal>
  );
});
