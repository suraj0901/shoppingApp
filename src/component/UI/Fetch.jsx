import React from "react";
export default React.memo(
  ({ error, loading, children, errorMsg = "Opps! Something went wrong" }) => {
    if (error.isError) {
      return <p className="text-red-500 p-2">{errorMsg || error.message}</p>;
    }
    if (loading) {
      return <p className="p-2">Loading...</p>;
    }
    return children;
  }
);
