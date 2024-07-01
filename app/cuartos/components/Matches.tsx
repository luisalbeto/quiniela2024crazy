'use client'
import {useGetMatchesList} from "@/app/groups/hooks/useGetMatchesList";
import {Loading} from "@/app/cuartos/components/Loading";
import Match from "@/app/cuartos/components/Match";

export const Matches = ()=>{
    const {matches}= useGetMatchesList()
    console.log(matches)
    if(matches === null){
        return <div>
            <Loading/>
        </div>
    }
    return (

<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-sky to-blue overflow-hidden">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="container mx-auto px-4 py-16">
      {/* Hero Section with Title */}
      <section className="flex flex-col items-center text-center">
        <h1 className="text-6xl font-bold text-gray-900">Fase Final</h1>
        <p className="mt-4 text-2xl text-gray-800">Llena los resultados y predice al Ganador de la Copa America</p>
  

      <div className="container mx-auto px-4">
                {matches.map((match,index) => (
                    <Match
                        key={index}
                        match={match}
                    />))}
            </div>

        
      </section>
   
    
    </div>
      </div>
    </main>
       
    );
}

