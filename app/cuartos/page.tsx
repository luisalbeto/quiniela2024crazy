

import Match from '@/app/components/Match'
import {Matches} from "@/app/components/Matches";

export default async function Page() {


	/*const {data} = await readUserSession()

	if(!data.session){
		return redirect('/auth-server-action')
	}*/
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-sky to-blue overflow-hidden">
     
        <h1 className="text-6xl font-bold text-gray-900 ">Cuartos de Final</h1>
        <Matches matchDay={4}/>
        <h1 className="text-6xl font-bold text-gray-900 ">Semifinales</h1>
        <Matches matchDay={5}/>
        <h1 className="text-6xl font-bold text-gray-900 ">Partido 3er Lugar</h1>
        <Matches matchDay={6}/>
        <h1 className="text-6xl font-bold text-gray-900 ">Final</h1>
        <Matches matchDay={7}/>



        </main>
    )



}
