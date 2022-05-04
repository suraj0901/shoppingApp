import { useState, useEffect } from "react";

export default (dependency, condition) => {
  const [showAnim, setShowAnim] = useState(false);
  useEffect(() => {
    if (condition) {
      setShowAnim(true);
      let id = setTimeout(() => {
        setShowAnim(false);
      }, 300);
      return () => clearTimeout(id);
    }
  }, [dependency]);

  return showAnim ? "bounce" : "";
};
