'use client'
import React, {FC} from 'react';
import {Match} from "@/app/types/contanst.type";



export interface MatchResultProps{
  match:Match
}

const MatchResult :FC<MatchResultProps>= ({ match }) => {
  

  return (
    <div className="bg-gray-500 shadow-md p-4 flex flex-col items-center gap-4 rounded-sm" key={match.id}>
  <div className="match-info flex justify-between py-4 px-4">
    <div className="team-info flex items-center">
      <img src={match.flag1} alt={match.team1} className="team-flag w-10 h-10 rounded-full mr-4" />
      <span className="team-name text-black font-bold mr-4">{match.team1}</span>
    </div>
    <div className="match-score text-black font-bold text-2xl flex-1 flex items-center justify-center">
      {match.score1 ? (
        <div>
          <span>{match.score1}</span>
          <span className="mx-2">-</span>
          <span>{match.score2}</span>
        </div>
      ) : (
        <div></div>
      )}
    </div>
    <div className="team-info flex items-center">
      <span className="team-name text-black font-bold ml-4">{match.team2}</span>
      <img src={match.flag2} alt={match.team2} className="team-flag w-10 h-10 rounded-full ml-4" />

    </div>
  </div>
  <div className="match-date text-black text-center">
    <span>{match.date}</span>
  </div>
</div>
   
  );
};

export default MatchResult;