'use server'
import createSupabaseServerClient from "@/lib/supabase/server";


export const insertScores = async (values: any)=>{
    const supabase = await createSupabaseServerClient()
    const user = await supabase.auth.getUser()

       
    const {data} = await supabase.from('scores').insert({
        userid:user.data.user?.id,
        localteam: values.home,
        localScore: values.score1,
        awayteam: values.away,
        awayScore: values.score2
    })

}
export const selectScores = async ()=>{
    const supabase = await createSupabaseServerClient()

    const {data: scoresSelect} = await  supabase.from('scores').select()
    return scoresSelect
}