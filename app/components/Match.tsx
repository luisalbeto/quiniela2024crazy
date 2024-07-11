'use client'
import React, { FC } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Match } from '@/app/types/contanst.type';
import { useFetch } from '../hooks/useFetch';
import { getCookie } from 'cookies-next';


const PreditionsSchema = Yup.object().shape({
  score1: Yup.number().required().min(0),
  score2: Yup.number().required().min(0),
  home: Yup.string().required(),
  away: Yup.string().required()
});

interface GameProps {
  match: Match;
}

const Game: React.FC<GameProps> = ({ match }) => {
  const { handleSubmit } = useFetch();

  // Función para manejar el envío del formulario
  const onSubmit = async (data: Yup.InferType<typeof PreditionsSchema>, actions: any) => {

    const payload = { localteam: data.home, awayteam: data.away, scoreLocalteam: data.score1, scoreAwayteam: data.score2  }

  try {
    const response = await handleSubmit({
      method: 'POST',
      endpoint: 'api/scores',
      body: payload,
      token: getCookie('token')
    });

    if (response) {
      console.log(response.message)
      alert('Marcadores guardados exitosamente');
    } else {
      throw new Error('Error al guardar los marcadores');
    }
  } catch (error) {
    console.log('Error:', error);
    alert('Hubo un error al intentar guardar los marcadores');
  } finally {
    actions.setSubmitting(false); // Marcar el formulario como no enviando, independientemente del resultado
  }
};
  
  return (
    <div className="bg-gray-500 shadow-md p-4 flex flex-col items-center gap-4 rounded-sm" key={match.id}>
      <div className="match-info flex flex-row justify-between pb-4 p-4">
        <div className="team-info flex items-center">
          <img src={match.flag1} alt={match.team1} className="team-flag w-10 h-10 rounded-full mr-4" />
          <span className="team-name text-black font-bold">{match.team1}</span>
        </div>
        <div className="match-score text-black font-bold text-2xl">
          <div>
            <Formik
              initialValues={{
                score1: 0,
                score2: 0,
                home: match.team1,
                away: match.team2,
              }}
              validationSchema={PreditionsSchema}
              onSubmit={onSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="scoreboard flex flex-col justify-center items-center gap-4">
                    <div className="flex justify-center items-center gap-4">
                      <div className="team-score bg-green-500 text-black py-2 rounded-lg font-bold text-xl flex flex-col items-center border-lg">
                        <Field name="score1" className="w-1/3 text-center rounded-full" />
                        {errors.score1 && touched.score1 ? (
                          <div className="error-message text-red-500 text-xs mt-1">{errors.score1}</div>
                        ) : null}
                      </div>
                      <div className="vs text-black font-bold text-2xl flex items-center">VS</div>
                      <div className="team-score bg-sky-500 text-black py-2 rounded-lg font-bold text-xl flex flex-col items-center">
                        <Field name="score2" className="w-1/3 text-center rounded-full" />
                        {errors.score2 && touched.score2 ? (
                          <div className="error-message text-red-500 text-xs mt-1">{errors.score2}</div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="submit-button flex justify-center items-center mt-4">
                    <button type="submit" className="bg-sky text-purple hover:bg-blue hover:text-white transition-colors px-4 py-2 rounded-lg font-bold">
                      Enviar
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>

        <div className="team-info flex items-center">
          <img src={match.flag2} alt={match.team2} className="team-flag w-10 h-10 rounded-full mr-4" />
          <span className="team-name text-black font-bold">{match.team2}</span>
        </div>
      </div>
      <div className="match-date text-black text-center">
        <span>{match.date}</span>
      </div>
    </div>
  );
};

export default Game;
