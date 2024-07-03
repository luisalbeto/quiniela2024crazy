
import { MatchesResult } from "../components/MatchesResult";

export default async function Page() {


	/*const {data} = await readUserSession()

	if(!data.session){
		return redirect('/auth-server-action')
	}*/
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-sky to-blue overflow-hidden">
        <section className="flex flex-col items-center text-center">
            {/* Hero Section with Title */}
        <h1 className="text-6xl font-bold text-gray-900 ">Resultados</h1>
        <p className="mt-4 text-2xl text-gray-800">Mira aqui los Resultados de la fase final de la Copa America</p>       
        </section>
        <h1 className="text-6xl font-bold text-gray-900 ">Cuartos de Final</h1>
        <MatchesResult matchDay={4}/>
        <h1 className="text-6xl font-bold text-gray-900 ">Semifinales</h1>
        <MatchesResult matchDay={5}/>
        <h1 className="text-6xl font-bold text-gray-900 ">Partido 3er Lugar</h1>
        <MatchesResult matchDay={6}/>
        <h1 className="text-6xl font-bold text-gray-900 ">Final</h1>
        <MatchesResult matchDay={7}/>
        </main>

    )



}
