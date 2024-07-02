import React from "react";

import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";

export default async function Page() {
	


	const {data} = await readUserSession()

	if(!data.session){
		return redirect('/auth-server-action')
	}


	return (
		<div className="flex justify-center items-center h-screen bg-gradient-to-b from-sky to-blue overflow-hidden">
			
		

		</div>
	);
}
