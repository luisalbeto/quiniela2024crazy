import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";
import UserRanking from "./components/UserRanking";

export default async function Page() {
	


/*	const {data} = await readUserSession()

	if(!data.session){
		return redirect('/auth-server-action')
	}
*/

	return (
		<div className="flex justify-center items-center h-screen bg-gradient-to-b from-sky to-blue overflow-hidden">
			
		

		</div>
	);
}
