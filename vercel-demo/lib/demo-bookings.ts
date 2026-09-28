export type DemoBooking={reference:string;name:string;make:string;registration:string;service:string;date:string;time:string;message:string;status:string};
const KEY="gf-garage-demo-bookings";
export const sampleBookings:DemoBooking[]=[
 {reference:"DEMO-001",name:"Sample Customer A",make:"Toyota Corolla",registration:"DEMO 001",service:"Vehicle servicing",date:"2026-10-01",time:"09:00",message:"Routine service — fictional sample.",status:"pending"},
 {reference:"DEMO-002",name:"Sample Customer B",make:"VW Polo",registration:"DEMO 002",service:"Brakes",date:"2026-10-02",time:"10:30",message:"Brake inspection — fictional sample.",status:"confirmed"},
 {reference:"DEMO-003",name:"Sample Customer C",make:"Ford Fiesta",registration:"DEMO 003",service:"Diagnostics",date:"2026-10-03",time:"08:30",message:"Warning light inspection — fictional sample.",status:"completed"}
];
export function loadDemoBookings():DemoBooking[]{if(typeof window==="undefined")return sampleBookings;try{const raw=sessionStorage.getItem(KEY);if(raw){const rows=JSON.parse(raw);if(Array.isArray(rows)&&rows.every(r=>r&&typeof r.reference==="string"&&typeof r.status==="string"))return rows;}}catch{}return sampleBookings;}
export function setDemoBookings(rows:DemoBooking[]){sessionStorage.setItem(KEY,JSON.stringify(rows));}
export function saveDemoBooking(data:Record<string,FormDataEntryValue>){const reference="DEMO-"+crypto.randomUUID().slice(0,6).toUpperCase();const string=(key:string)=>String(data[key]||"").slice(0,2000);setDemoBookings([{reference,name:string("name"),make:string("make"),registration:string("registration"),service:string("service"),date:string("date"),time:string("time"),message:string("message"),status:"pending"},...loadDemoBookings()]);return reference;}
