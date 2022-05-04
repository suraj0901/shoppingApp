import React from "react";
import AddSubButtons from "../UI/AddSubButtons";

export default React.memo(
  ({ data: { id, name = "Sushi", price = 16.49, amount = 1 } }) => {
    return (
      <div className="border-b  p-1">
        <p className="text-xl font-medium">{name}</p>
        <div className="flex items-center justify-between">
          <div className="flex gap-5 items-center">
            <p className="font-medium">${price}</p>
            <p className="p-1 bg-gray-100 rounded-full text-gray-600">
              &times; {amount}
            </p>
          </div>
          <AddSubButtons id={id} totalAmount={amount} />
        </div>
      </div>
    );
  }
);
