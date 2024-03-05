// @ts-ignore
import { useEffect, useState } from "react";

const useAdviceApi = () => {
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        if (!response.ok) {
          throw new Error("Failed to fetch advice");
        }

        const data = await response.json();
        setAdvice(data.slip.advice);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { advice, isLoading, error };
};

export default useAdviceApi;
