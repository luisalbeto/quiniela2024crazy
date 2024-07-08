import React from "react";
import StandingsTable from "./components/UserRanking";


export default async function Page() {

const standings = [
	{ id: 1, username: 'Usuario1', score: 350 },
	{ id: 2, username: 'Usuario2', score: 300 },
	{ id: 3, username: 'Usuario3', score: 250 },
	// Agrega más usuarios según sea necesario
  ];

	return (
		<div className="flex justify-center items-center h-screen bg-gradient-to-b from-sky to-white overflow-hidden">
			<div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">Tabla de Posiciones</h1>
      <StandingsTable standings={standings} />
    </div>
			
		

		</div>
	);
}
