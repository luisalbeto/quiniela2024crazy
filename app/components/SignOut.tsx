import { Button } from "@/components/ui/button";
import { setCookie } from "cookies-next";
import { redirect } from "next/navigation";
import React from "react";

export default function SignOut() {

  const Logout = async () => {
    'use server'

    //const supabase = await createSupabaseServerClient()

   // await supabase.auth.signOut()
   setCookie('token',null)
    redirect('/auth-server-action')
  }


  return(
    <form action={Logout}>
      <Button>SignOut</Button>
    </form>
  )
}