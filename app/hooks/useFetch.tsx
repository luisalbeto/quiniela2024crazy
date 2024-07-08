"use client";

import { useCallback, useState } from 'react';
import { config } from '../constants';

export const useFetch = () => {
  const [response, setResponse] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<any>(null);



  const handleSubmit = useCallback(async ({method, endpoint, body}:{method:string,endpoint:string, body:any})=>{
    const url = `http://${config.hostname}:${config.port}/${endpoint}`;
    setLoading(true);
      try {
        const response = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: method !== 'GET'  ? JSON.stringify(body) : null,
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setResponse(result);
        return result
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
  },[])

  
  return {
    handleSubmit,
    error,
    loading,
    response
  }

};