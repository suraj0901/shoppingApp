export default ({ children, className, onClick = () => {}, fill = true }) => {
  const color = fill
    ? "hover:bg-violet-800 text-white bg-violet-900 "
    : "text-violet-900 border border-violet-900 hover:bg-violet-600 hover:text-white hover:border-white";

  return (
    <button
      className={`font-medium py-2 px-8  ${color} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
