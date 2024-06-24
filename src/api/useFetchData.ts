import {useEffect, useState} from 'react';
import axios from 'axios';

//hook to fetch data
const useFetchData = ({apiPath}: {apiPath: string}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data: response} = await axios.get(apiPath);
        setData(response);
      } catch (e) {
        setError(e as string);
      }
      setLoading(false);
    };

    fetchData();
  }, [apiPath]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetchData;
