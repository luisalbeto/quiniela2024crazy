

import Match from './components/Match'
import {Loading} from "@/app/groups/components/Loading";
import {Matches} from "@/app/cuartos/components/Matches";

export default async function Page() {


	/*const {data} = await readUserSession()

	if(!data.session){
		return redirect('/auth-server-action')
	}*/
    return (
        <div>
            <Matches matchDay={4}/>
        </div>
    )



}
