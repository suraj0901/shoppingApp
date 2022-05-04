import CartButton from "./CartButton";

export default ({ onClick }) => {
  return (
    <div className="bg-violet-600 p-4 sticky top-0 z-10">
      <div className="max-w-screen-lg text-white md:mx-auto flex justify-between items-center">
        <div className="text-3xl font-medium ">Fashion</div>
        <CartButton onClick={onClick} />
      </div>
    </div>
  );
};
