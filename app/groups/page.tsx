

import {Matches} from "@/app/components/Matches";


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
        <p className="mt-4 text-2xl text-gray-800">Lista aqui los Resultados de toda la Copa America USA 2024</p>       
        </section>
        <Matches/>
        </main>
    )



}
