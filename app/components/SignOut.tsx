import { Button } from "@/components/ui/button";
import { setCookie, getCookie} from "cookies-next";
import { redirect } from "next/navigation";
import React from "react";

export default function SignOut() {

  const Logout = async () => {
    'use server'

    const token = getCookie('token');

    if(token){setCookie('token',null,{ expires: new Date(0) })}


    redirect('/auth-server-action')
  }


  return(
    <form action={Logout}>
      <Button>Cerrar Sesion</Button>
    </form>
  )
}