import { baseUrl } from '@/utils/url';
import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [statusofuser, setStatusOfUser] = useState<boolean>(false);
  const [can_rent_books, setCanRentBook] = useState<boolean>(false);
  const [location, setLocation] = useState<boolean>(false);
  const [length, setLength] = useState<number>(0);

  const Geteverythink = useCallback(async () => {
    try {
      setError('');
      setLoading(true);

      const token = localStorage.getItem('token');

      const res = await axios.get(baseUrl + url, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      console.log(res.data, '🟢 USER DATA');
      setData(res.data);
      setStatusOfUser(true);
      setCanRentBook(res.data.can_rent_books);
      setLocation(res.data.address);
      setLength(res.data.length);
    } catch (error: any) {
      console.error('🔴 ERROR:', error);
      setError(error.message);
      setStatusOfUser(false);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    Geteverythink();
  }, [Geteverythink]);

  return { loading, error, data, statusofuser, can_rent_books, setStatusOfUser, location, length, refetch: Geteverythink };
}

export default useFetch;
