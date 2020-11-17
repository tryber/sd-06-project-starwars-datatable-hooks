import { useEffect, useState } from 'react';

const useApi = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      })
      .finally(() => setLoading(false));
  }, [url]);

  return {
    data,
    loading,
  };
};

export default useApi;
