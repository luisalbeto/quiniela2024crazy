'use client'
import {Matches} from "@/app/components/Matches";


export default async function Page() {

 
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-sky to-white overflow-hidden">
        <section className="flex flex-col items-center text-center">
            {/* Hero Section with Title */}
        <h1 className="text-6xl font-bold text-gray-900 ">Fase Final</h1>
        <p className="mt-4 text-2xl text-gray-800">Predice al Ganador de la copa America</p>       
        </section>
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
