"use client";

import { useState, useEffect } from 'react';

export const useFetch = ({method, endpoint, body}) => {

  const hostname = process.env.API_HOSTNAME;
  const port = process.env.API_PORT;
  const url = `http://${hostname}:${port}/${endpoint}`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: method !== 'GET' ? JSON.stringify(body) : null,
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setResponse(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, body]);

  return { response, loading, error };
};