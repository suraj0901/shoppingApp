import { useState, useCallback } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  const fetchData = useCallback(async (url, applyData) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      applyData(data);
    } catch (error) {
      setError({ isError: true, message: error });
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    fetchData,
  };
};
