'use client'
import {useGetMatchesList} from "@/app/quiniela/hooks/useGetMatchesList";
import {Loading} from "@/app/quiniela/components/Loading";
import Match from "@/app/quiniela/components/Match";

export const Matches = ()=>{
    const {matches}= useGetMatchesList()
    console.log(matches)
    if(matches === null){
        return <div>
            <Loading/>
        </div>
    }
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-b from-sky to-blue overflow-hidden">
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-4xl font-bold mb-4">QUINIELA COPA AMERICA 2024</h1>
            </div>

            <div className="container mx-auto px-4">
                {matches.map((match,index) => (
                    <Match
                        key={index}
                        match={match}
                    />))}
            </div>

            <div className="container mx-auto px-4">
                {matches.map((match,index) => (
                    <Match
                        key={index}
                        match={match}
                    />  ))}
            </div>


            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-4xl font-bold mb-4">Cuartos de Final</h1>
            </div>

            <div className="container mx-auto px-4">
                {matches.map((match,index) => (
                    <Match
                        key={index}
                        match={match}
                    /> ))}
            </div>

            <div className="container mx-auto px-4">
                {matches.map((match,index) => (
                    <Match
                        key={index}
                        match={match}
                    />  ))}
            </div>
        </div>
    );
}