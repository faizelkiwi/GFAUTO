"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
export default function AdminActions({id,current}:{id:number,current:string}){
 const [value,setValue]=useState(current);const [message,setMessage]=useState("");const [busy,setBusy]=useState(false);const router=useRouter();
 async function save(){setBusy(true);setMessage("");try{const response=await fetch("/api/admin/bookings/"+id,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:value})});if(!response.ok)throw new Error(response.status===401?"Your session has expired. Refresh and sign in again.":"Could not update the request. Please try again.");setMessage("Status saved. Contact the customer directly to confirm any appointment changes.");router.refresh()}catch(error){setMessage(error instanceof Error?error.message:"Connection failed. Please try again.")}finally{setBusy(false)}}
 return <div className="admin-status"><label htmlFor={"status-"+id}>Status</label><select id={"status-"+id} value={value} onChange={e=>setValue(e.target.value)} disabled={busy}>{["pending","confirmed","completed","cancelled"].map(s=><option key={s} value={s}>{s}</option>)}</select><Button onClick={save} disabled={busy}>{busy?"Saving…":"Save status"}</Button>{message&&<p role="status">{message}</p>}</div>
}
