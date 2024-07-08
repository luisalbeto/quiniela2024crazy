import React from 'react';

const StandingsTable = ({ standings }) => {
  // Ordenar los standings por puntaje de forma descendente
  standings.sort((a, b) => b.score - a.score);

  return (
    <div className="bg-white shadow-md rounded-lg my-6">
      <table className="min-w-full rounded-lg bg-white">
        <thead>
          <tr className="w-full bg-gray-500 text-black uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Posición</th>
            <th className="py-3 px-6 text-left">Usuario</th>
            <th className="py-3 px-6 text-left">Puntaje</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {standings.map((user , index) => (
            <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
              <td className="py-3 px-6 text-left">{user.username}</td>
              <td className="py-3 px-6 text-left">{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StandingsTable;