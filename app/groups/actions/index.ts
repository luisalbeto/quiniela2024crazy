'use server'
import createSupabaseServerClient from "@/lib/supabase/server";

export async function createTodo(title: string) {}

export async function readTodo() {}

export async function deleteTodoById(id: string) {}

export async function updateTodoById(id: string, completed: boolean) {}


export const insertScores = async (values: any)=>{
    const supabase = await createSupabaseServerClient()
    const {data} = await supabase.from('scores').insert({
        userid:null,
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