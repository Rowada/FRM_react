// @ts-ignore
import { useEffect, useState } from "react";

const useAdviceApi = (reload) => {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState("");
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
        setAdviceId(data.slip.id);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [reload]);

  return { advice, adviceId, isLoading, error };
};

export default useAdviceApi;
