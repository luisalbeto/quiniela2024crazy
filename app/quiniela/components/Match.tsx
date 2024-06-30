import React, {FC} from 'react';
import {Match} from "@/app/types/contanst.type";




export interface MatchProps{
  match:Match
}
const Match :FC<MatchProps>= ({ match }) => {
  return (
    <div className="match-container" key={match.id}>
      <div className="match-info">
        <div className="team-info">
          <img src={match.flag1} alt={match.team1} className="team-flag" />
          <span className="team-name">{match.team1}</span>
        </div>
        <div className="match-score">
          <span>{match.score1}</span>
          <span>-</span>
          <span>{match.score2}</span>
        </div>
        <div className="team-info">
          <img src={match.flag2} alt={match.team2} className="team-flag" />
          <span className="team-name">{match.team2}</span>
        </div>
      </div>
      <div className="match-date">
        <span>{match.date}</span>
      </div>
    </div>
  );
};

export default Match;