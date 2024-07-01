

import Match from './components/Match'
import {useGetMatchesList} from "@/app/hooks/useGetMatchesList";
import {Matches} from "@/app/components/Matches";


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
