import { User } from '@/interface/User';
import { baseUrl } from '@/utils/url';
import axios from 'axios';
import{ useState, useEffect, useCallback } from 'react';
function useFetch<T>(url: string) {
  const [data, setData] = useState<User | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [statusofuser,SetStatusOfUser] = useState<boolean>(false)
  const [can_rent_books,SetCanRentaBook] = useState<boolean>(false)
  const [location,SetLocation] = useState<boolean>(false)
  const [length,SetLength] = useState<number>(0)


  //////////////////////////////////////////////////////////////////////////// tihs for getting me in dashboard

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
      SetStatusOfUser(true);
      SetCanRentaBook(res.data.can_rent_books)
      SetLocation(res.data.address)
      SetLength(res.data.length)
    } catch (error: any) {
      console.error('🔴 ERROR:', error);
      setError(error.message);
      SetStatusOfUser(false);
    } finally {
      setLoading(false);
    }
  }, [url]);
  ////////////////////////////////////////////////////////////////////////////
  
  //////////////////////////////////////////////////////////////////////////// this is to using functions anywhere

  useEffect(() => {
    Geteverythink();
  }, [Geteverythink]);


  //////////////////////////////////////////////////////////////////////////// there we export all functions and datas
  
  return { loading, error,  data, statusofuser, can_rent_books, SetStatusOfUser, location, length, refetch: Geteverythink};
}

export default useFetch;
