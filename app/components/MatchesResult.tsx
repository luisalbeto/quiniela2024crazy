'use client'
import {useGetMatchesList} from "@/app/hooks/useGetMatchesList";
import {Loading} from "@/app/components/Loading";
import {FC, useMemo} from "react";
import MatchResult from "./MatchResult";


export interface MatchesResultProps{
    matchDay? : number
}
export const MatchesResult :FC<MatchesResultProps> = ({matchDay})=>{
    const { filterByMatchDay, matches}= useGetMatchesList()
    const data= useMemo(()=>matchDay ? filterByMatchDay(matchDay):matches ?? [],[filterByMatchDay, matchDay])
    if ( data.length < 1){
        return <div>
            <Loading/>
        </div>
    }
    return (

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex rounded-sm">
      <div className="container mx-auto px-4 py-16">
      <div className="container mx-auto px-4">
                {data.map((match,index) => (
                    <MatchResult
                        key={index}
                        match={match}
                    />))}
            </div>   
    
    </div>
      </div>
       
    );
}

