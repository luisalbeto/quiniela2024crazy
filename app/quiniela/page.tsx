

import Match from './components/Match'
import {useGetMatchesList} from "./hooks/useGetMatchesList";
import {Loading} from "@/app/quiniela/components/Loading";
import {Matches} from "@/app/quiniela/components/Matches";

export default async function Page() {


	/*const {data} = await readUserSession()

	if(!data.session){
		return redirect('/auth-server-action')
	}*/
    return (
        <div>
            <Matches/>
        </div>
    )



}
