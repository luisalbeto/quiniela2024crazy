

import Match from '@/app/components/Match'
import {Matches} from "@/app/components/Matches";

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
