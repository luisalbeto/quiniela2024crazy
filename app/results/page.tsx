
import { MatchesResult } from "../components/MatchesResult";

export default async function Page() {


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-sky to-white overflow-hidden">
        <section className="flex flex-col items-center text-center">
            {/* Hero Section with Title */}
        <h1 className="text-6xl font-bold text-gray-900 ">Resultados</h1>
        <p className="mt-4 text-2xl text-gray-800">Mira aqui los Resultados de la Copa America</p>       
        </section>
        <MatchesResult/>
        </main>

    )



}
