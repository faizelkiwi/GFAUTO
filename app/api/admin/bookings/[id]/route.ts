import {headers} from "next/headers";
import {NextResponse} from "next/server";
import {getDb} from "@/db";
import {bookings} from "@/db/schema";
import {eq} from "drizzle-orm";
export async function PATCH(request:Request,{params}:{params:Promise<{id:string}>}){const h=await headers();if(h.get("oai-authenticated-user-email")?.toLowerCase()!=="faizelsnell@gmail.com")return NextResponse.json({error:"Unauthorized"},{status:401});const {id}=await params;const body=await request.json();if(!["pending","confirmed","completed","cancelled"].includes(body.status)||!/^\d+$/.test(id))return NextResponse.json({error:"Invalid request"},{status:400});try{await getDb().update(bookings).set({status:body.status}).where(eq(bookings.id,Number(id)));return NextResponse.json({ok:true})}catch{return NextResponse.json({error:"Unavailable"},{status:503})}}
