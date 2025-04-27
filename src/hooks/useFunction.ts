import { baseUrl } from '@/utils/url';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

function useFunction<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  //////////////////////////////////////////////////////////////////////////
  async function PostBook(name: string, author: string, publisher: string) {
    try {
      setError('');
      setLoading(true);
      const res = await axios.post(
        baseUrl + url,
        [
          {
            name,
            author,
            publisher,
          },
        ],
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(res.status);
      console.log(res);
      if (res.status === 201) {
        toast.success('Book added successfully!'); // показываем успех
      }
    } catch (error: any) {
      setError(error.response?.data?.detail || error.message);
      toast.error(error.response?.data?.detail || error.message); // показываем ошибку
    } finally {
      setLoading(false);
    }
  }

  //////////////////////////////////////////////////////////////////////////
  async function EditBook(name: string, author: string, publisher: string) {
    try {
      setError('');
      setLoading(true);
      const res = await axios.put(
        baseUrl + url,
        {
          name,
          author,
          publisher,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(res.status);
      console.log(res);
      if (res.status === 201) {
        toast.success('Book Created successfully!'); 
      }
    } catch (error: any) {
      setError(error.response?.data?.detail || error.message);
      toast.error(error.response?.data?.detail || error.message); 
    } finally {
      setLoading(false);
    }
  }

  //////////////////////////////////////////////////////////////////////////
  async function DeleteBook(book_id: string) {
    try {
      setError('');
      setLoading(true);
      const res = await axios.delete(baseUrl + url + book_id + '/', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(res.status);
      console.log(res, 'Book deleted successfully');
      if (res.status === 204) {
        toast.success('Book deleted successfully!'); // успех на удалении
      }
    } catch (error: any) {
      setError(error.message);
      toast.error(error.message); // ошибка на удалении
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return { data, error, loading, PostBook, DeleteBook, EditBook };
}

export default useFunction;
