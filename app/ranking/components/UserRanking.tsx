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

        if (usersResponse && Array.isArray(usersResponse)) {
          setUsers(usersResponse); // Asigna directamente si usersResponse es un array de usuarios
        } else {
          throw new Error('El servidor no devolvió una lista de usuarios válida');
        }
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
        // Aquí podrías manejar el error de otra manera si es necesario
      }
    };

    getUsers();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Hubo un error al cargar los usuarios</p>;

  return (
    <div className="container mx-auto">
    {users.length > 0 ? (
      <table className="min-w-full bg-white border-gray-200 border">
        <thead className="bg-blue/90">
          <tr>
            <th className="border-gray-200 border p-2">Ranking</th>
            <th className="border-gray-200 border p-2">Email</th>
            <th className="border-gray-200 border p-2">Puntuación</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="border-gray-200 border p-2 font-bold">{index + 1}</td>
              <td className="border-gray-200 border p-2">{user.email}</td>
              <td className="border-gray-200 border p-2">{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p className="text-lg">Aún no se han agregado usuarios.</p>
    )}
  </div>
  );
};

export default UsersList;