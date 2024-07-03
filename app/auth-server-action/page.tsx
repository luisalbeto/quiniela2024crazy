import React from "react";
import { AuthForm } from "./components/AuthForm";
import { redirect } from "next/navigation";

export default async function page() {

/*	const {data} = await readUserSession()

	if(data.session){
		return redirect('/')
	}

*/
	return (
		<div className="flex justify-center items-center h-screen bg-gradient-to-b from-sky to-blue overflow-hidden">
			
			<div className="w-96">
				<AuthForm />
			</div>
		</div>
	);
}
