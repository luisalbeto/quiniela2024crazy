import React from "react";
import { AuthForm } from "./components/AuthForm";

export default async function page() {


	return (
		<div className="flex justify-center items-center h-screen bg-gradient-to-b from-sky to-white overflow-hidden">
			
			<div className="w-96">
				<AuthForm />
			</div>
		</div>
	);
}
