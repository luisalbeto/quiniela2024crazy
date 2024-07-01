'use client'
import React, {FC, useMemo} from 'react';
import {Match} from "@/app/types/contanst.type";
import {ErrorMessage, Field, Form, Formik, useFormik} from "formik";
import * as Yup from 'yup'
import createSupabaseServerClient from "@/lib/supabase/server";
import {useInsertScore} from "@/app/hooks/useInsertScore";
import {insertScores} from "@/app/groups/actions";


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
                              <div className={'flex flex-row'}>
                                  <Field name={'score1'} />
                                  {
                                      errors.score1 && touched.score1 ? (<div>{errors.score1}</div>): null
                                  }

                              </div>
                              <div>
                                 <Field name={'score2'}/>
                                  {
                                      errors.score2 && touched.score2 ? (<div>{errors.score2}</div>): null
                                  }
                              </div>
                              <div>
                                  <button type={'submit'}>enviar</button>
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