'use client'
import React, {FC} from 'react';
import {Match} from "@/app/types/contanst.type";
import { Field, Form, Formik} from "formik";
import * as Yup from 'yup'



export interface MatchProps{
  match:Match
}


const PreditionsSchema= Yup.object().shape({
    score1: Yup.number().required().min(0),
    score2: Yup.number().required().min(0),
    home: Yup.string().required(),
    away : Yup.string().required()

})
const Match :FC<MatchProps>= ({ match }) => {
  const handleClick = () => {
    alert('Guardado exitosamente');
  };


  return (
    <div className="bg-gray-100 shadow-md p-4 flex flex-col items-center gap-4 rounded-sm" key={match.id}>
      <div className="match-info flex flex-row justify-between pb-4 p-4">
        <div className="team-info flex items-center">
          <img src={match.flag1} alt={match.team1} className="team-flag w-10 h-10 rounded-full mr-4" />
          <span className="team-name text-gray-800 font-bold">{match.team1}</span>
        </div>
        <div className="match-score text-gray-800 font-bold text-2xl">
          {match.score1 ?(
              <div>
                <span>{match.score1}</span>
                <span>-</span>
                <span>{match.score2}</span>
              </div>
          ): <div>
              <Formik initialValues={{
                  score1: '',
                  score2: '',
                  home: match.team1,
                  away: match.team2

              }}
                       validationSchema={PreditionsSchema}
                      onSubmit={ (values)=>  fetch('/api/cuartos',{
                          method:'POST',
                          body: JSON.stringify(values),
                          headers: {
                              'Content-Type': 'application/json'
                          }
                      })}
              >
                  {
                      ({errors, touched})=>(
                        <Form>
  <div className="scoreboard flex flex-col justify-center items-center gap-4">
    <div className="flex justify-center items-center gap-4">
      <div className="team-score bg-green-500 text-black py-2 rounded-lg font-bold text-xl flex flex-col items-center border-lg">
        <Field name="score1" className="w-1/3 text-center" />
        {errors.score1 && touched.score1 ? (
          <div className="error-message text-red-500 text-xs mt-1">{errors.score1}</div>
        ) : null}
      </div>
      <div className="vs text-gray-800 font-bold text-2xl flex items-center">VS</div>
      <div className="team-score bg-sky-500 text-black py-2 rounded-lg font-bold text-xl flex flex-col items-center">
        <Field name="score2" className="w-1/3 text-center" />
        {errors.score2 && touched.score2 ? (
          <div className="error-message text-red-500 text-xs mt-1">{errors.score2}</div>
        ) : null}
      </div>
    </div>
  </div>
  <div className="submit-button flex justify-center items-center mt-4">
    <button onClick={handleClick} type="submit" className="bg-blue-500 text-purple px-4 py-2 rounded-lg font-bold">
      Enviar
    </button>
  </div>
</Form>
                      )
                  }

              </Formik>
          </div>}

        </div>
          <div className="team-info flex items-center">
              <img src={match.flag2} alt={match.team2} className="team-flag w-10 h-10 rounded-full ml-4"/>
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