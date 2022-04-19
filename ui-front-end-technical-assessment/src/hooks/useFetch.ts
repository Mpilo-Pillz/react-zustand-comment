import { useEffect, useState } from "react";
import { Member, Comment } from "../types/types";

const useFetch = <T>(url: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<T | Comment | Member | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Failed to fetch data from that specified resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
