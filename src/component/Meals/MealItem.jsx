import React from "react";
import AddMealItem from "./AddMealItem";
export default React.memo(({ data }) => {
  const { id, image = "", title: name = "Sushi", price = 16.66, rating } = data;
  return (
    <div className="border-b-2 border-red-600 flex justify-between items-center p-1 md:p-4">
      <div className="flex gap-4">
        <img src={image} alt="" className="w-16 h-16" />
        <div className="">
          <p className="md:text-xl text-base  max-w-sm mb-1 font-medium">
            {name}
          </p>
          <p className="md:text-lg sm:text-base  text-sm font-semibold text-red-900">
            ${price}
          </p>
        </div>
      </div>
      <AddMealItem data={{ id, name, price, amount: 0 }} />
    </div>
  );
});
