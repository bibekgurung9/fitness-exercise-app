import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
  try{
    const reqBody = await request.json()
    const { searchExercise } = reqBody;
    console.log(searchExercise)

  } catch(error:any){
    return NextResponse.json({error: error.message}, {status: 500})
  }
}