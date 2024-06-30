import React from "react";
import Match from './components/Match'

export default async function Page() {
	

	/*const {data} = await readUserSession()

	if(!data.session){
		return redirect('/auth-server-action')
	}*/

	const matches:Array<Match> = [{
		id: 1, team1: 'Argentina', team2: 'Brasil', flag1: '/flags/argentina.png', flag2: '/flags/brasil.png',
        date:'2024-07-02',
        score1:3,
        score2:3
	  }]
	return (
		<div className="flex justify-center items-center h-screen bg-gradient-to-b from-sky to-blue overflow-hidden">
			 <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-bold mb-4">QUINIELA COPA AMERICA 2024</h1>
          </div>

            <div className="container mx-auto px-4">
            {matches.map((match,index) => (
                <Match
                    key={index}
                    match={match}
                />))}
            </div>
            
            <div className="container mx-auto px-4">
            {matches.map((match,index) => (
            <Match
                key={index}
                match={match}
            />  ))}
            </div>
           
        
          <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold mb-4">Cuartos de Final</h1>
          </div>

          <div className="container mx-auto px-4">
            {matches.map((match,index) => (
                <Match
                    key={index}
                    match={match}
                /> ))}
            </div>
            
            <div className="container mx-auto px-4">
            {matches.map((match,index) => (
                <Match
                    key={index}
                    match={match}
                />  ))}
            </div>    
		</div>
	);
}
