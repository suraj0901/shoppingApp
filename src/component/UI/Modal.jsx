import { createPortal } from "react-dom";
import Card from "./Card";

export default ({ children, className, onClick }) => {
  return createPortal(
    <>
      <div
        onClick={onClick}
        className="fixed z-50 top-0 bottom-0 w-screen h-screen bg-black/70"
      ></div>
      <Card
        className={`fixed z-50 right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2 ${className}`}
      >
        {children}
      </Card>
    </>,
    document.getElementById("overlay")
  );
};
