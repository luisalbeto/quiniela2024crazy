import {NextRequest, NextResponse} from "next/server";
import {insertScores, selectScores} from "@/app/groups/actions";

 const POST = async (req:NextRequest)=>{
     const body = await req.json(); // 👈
      await insertScores(body)
     return NextResponse.json({ msg: "success" });
}
const GET = async()=>{
     const scores = await selectScores()
    return NextResponse.json({scores})
}

module.exports = {
     POST,
    GET
}