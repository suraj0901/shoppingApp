import { useCart } from "../../store/store";
import AddSubButtons from "../UI/AddSubButtons";
import Button from "../UI/Button";

export default ({ data }) => {
  const [cart, cartAction] = useCart();
  const isAmountZero = !cart.has(data.id);
  const totalAmount = isAmountZero ? 0 : cart.get(data.id).amount;
  const handleClick = () => cartAction.addNewItem(data);
  return (
    <div className="sm:text-xl text-sm">
      {isAmountZero && (
        <Button className="px-8 rounded-3xl" onClick={handleClick}>
          +Add
        </Button>
      )}
      {!isAmountZero && (
        <AddSubButtons id={data.id} totalAmount={totalAmount} />
      )}
    </div>
  );
};
