export default ({ className, children }) => {
  return (
    <div
      className={`max-w-screen-md mx-auto rounded-md bg-white p-1 ms:p-4 ${className}`}
    >
      {children}
    </div>
  );
};
