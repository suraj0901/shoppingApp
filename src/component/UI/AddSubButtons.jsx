import React from "react";
import { useCart } from "../../store/store";
import Button from "../UI/Button";

export default React.memo(({ id, totalAmount }) => {
  const cartAction = useCart(false)[1];
  const addAmountByOne = () => cartAction.increaseItemAmount(id);
  const subtractAmountByOne = () => cartAction.decreaseItemAmount(id);
  const handleChange = (event) => {
    cartAction.setItemAmount(id, +event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.firstChild.blur();
  };
  return (
    <div className="flex md:text-2xl text-sm items-center rounded-lg overflow-hidden border">
      <Button className="px-3 py-1 " onClick={subtractAmountByOne}>
        &#8722;
      </Button>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={totalAmount}
          onChange={handleChange}
          className="md:w-14 w-10 outline-none pl-3 py-[1px] rounded"
        />
      </form>
      <Button className="px-3 py-1" onClick={addAmountByOne}>
        &#43;
      </Button>
    </div>
  );
});
