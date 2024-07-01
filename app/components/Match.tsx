import React, {FC} from 'react';
import {Match} from "@/app/types/contanst.type";




export interface MatchProps{
  match:Match
}
const Match :FC<MatchProps>= ({ match }) => {
  return (
    <div className="bg-gray-100 shadow-md p-4 flex flex-col items-center gap-4 rounded-sm" key={match.id}>
      <div className="match-info flex flex-row justify-between pb-4 p-4">
        <div className="team-info flex items-center">
          <img src={match.flag1} alt={match.team1} className="team-flag w-10 h-10 rounded-full mr-4" />
          <span className="team-name text-gray-800 font-bold">{match.team1}</span>
        </div>
        <div className="match-score text-gray-800 font-bold text-2xl">
          <span>{match.score1}</span>
          <span>-</span>
          <span>{match.score2}</span>
        </div>
        <div className="team-info flex items-center">
          <img src={match.flag2} alt={match.team2} className="team-flag w-10 h-10 rounded-full ml-4" />
          <span className="team-name text-gray-800 font-bold">{match.team2}</span>
        </div>
      </div>
      <div className="match-date text-gray-600 text-center">
        <span>{match.date}</span>
      </div>
    </div>
  );
};

export default Match;