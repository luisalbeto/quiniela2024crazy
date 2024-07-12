"use client"

import { useFetch } from '@/app/hooks/useFetch';
import { getCookie } from 'cookies-next';
import React, { useEffect, useState } from 'react';

const UsersList: React.FC = () => {
  const { handleSubmit, loading, error } = useFetch();
  const [users, setUsers] = useState<any[]>([]); 

  useEffect(() => {
    const getUsers = async () => {
      try {
        const usersResponse = await handleSubmit({
          method: 'GET',
          endpoint: 'api/users', 
          body: null,
          token: getCookie('token'),
        });

        console.log('usersResponse:', usersResponse); // Verifica qué devuelve handleSubmit

        if (usersResponse && usersResponse.users) {
          setUsers(usersResponse.users);
        } else {
          throw new Error('El servidor no devolvió una lista de usuarios válida');
        }
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
        throw new Error('Error: Error al obtener usuarios'); // Aquí podrías lanzar el error nuevamente
      }
    };

    getUsers();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Hubo un error al cargar los usuarios</p>;

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>Aún no se han agregado usuarios.</p>
      )}
    </div>
  );
};

export default UsersList;