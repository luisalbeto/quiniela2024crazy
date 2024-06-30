import { Button } from "@/components/ui/button";
import Link from "next/link";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-sky to-blue overflow-hidden">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="container mx-auto px-4 py-16">
      {/* Hero Section with Title */}
      <section className="flex flex-col items-center text-center">
        <h1 className="text-6xl font-bold text-gray-900">¡Copa América USA 2024!</h1>
        <p className="mt-4 text-2xl text-gray-800">El torneo de fútbol más antiguo del mundo</p>
      </section>

      {/* Carousel for Match Images */}
      <section className="mt-8">
        {/* Replace with your carousel component or library */}
      
      </section>

      {/* Historical Paragraphs */}
      <section className="mt-8">
        <h2 className="text-4xl font-semibold text-gray-900">Historia de la Copa América</h2>
        <p className="mt-4 text-2xl text-gray-800">
          La Copa América, oficialmente Campeonato Sudamericano de Fútbol, es el
          torneo de fútbol internacional más antiguo a nivel de selecciones
          nacionales. Se disputa cada cuatro años entre los equipos
          masculinos de las diez asociaciones miembros de la CONMEBOL.
        </p>
        <p className="mt-4 text-2xl text-gray-800">
          La primera edición se celebró en Argentina en 1916 y desde entonces se ha
          jugado en 47 ocasiones, incluyendo la edición extraordinaria de 2016
          para celebrar el centenario del torneo. La selección con más títulos es
          Uruguay y Argentina con 15 seguidos por Brasil que cuenta con 9.
        </p>
      </section>
      <div className="justify-center items-center">

      <section className="flex flex-col items-center text-center">
        <Link className="font-bold text-2xl" href="/quiniela">
        <Button>
        Registrate y participa en la Quiniela


        </Button>

        
        </Link>


      </section>
     
  
      </div>
    
    </div>
      </div>
    </main>
  )
}
