"use client"
import { useFetch } from '@/app/hooks/useFetch';
import React, { useEffect, useState } from 'react';

const UsersList: React.FC = () => {
  const { handleSubmit, loading, error, response } = useFetch();
  const [users, setUsers] = useState<any[]>([]); // Ajusta según la estructura de tus usuarios

  useEffect(() => {
    const getUsers = async () => {
      try {
        const token = ''; // Puedes obtener el token como lo haces en otros componentes
        const usersResponse = await handleSubmit({
          method: 'GET',
          endpoint: 'api/users', // Endpoint de tu backend para obtener usuarios
          body: null,
          token,
        });

        if (usersResponse) {
          setUsers(usersResponse.users); // Asumiendo que tu backend devuelve un objeto con una propiedad 'users'
        } else {
          throw new Error('Error al obtener usuarios');
        }
      } catch (error) {
        console.error('Error:', error);
        // Manejo de errores como prefieras
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
            <li key={user.id}>{user.name}</li> // Ajusta según la estructura de tu objeto de usuario
          ))}
        </ul>
      ) : (
        <p>Aún no se han agregado usuarios.</p>
      )}
    </div>
  );
};

export default UsersList;