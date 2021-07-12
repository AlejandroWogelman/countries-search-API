import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState([]);
  const [Loading, setLoading] = useState(true);

  const fetching = async (url) => {
    const request = await fetch(url);
    const data = await request.json();
    setState(data);
    setLoading(false);
  };

  useEffect(() => {
    fetching(url);
  }, [url]);

  return [state, Loading];
};
