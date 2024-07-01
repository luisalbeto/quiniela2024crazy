

import Match from './components/Match'
import {useGetMatchesList} from "@/app/hooks/useGetMatchesList";
import {Loading} from "@/app/groups/components/Loading";
import {Matches} from "@/app/groups/components/Matches";

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
