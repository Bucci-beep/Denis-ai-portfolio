"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import {site} from "@/lib/site";
const nav = [{href:"/",name:"Home"},{href:"/projects",name:"Projects"},{href:"/research",name:"Research"},{href:"/about",name:"About"},{href:"/contact",name:"Contact"}];
export default function Header(){ const pathname=usePathname(); const [open,setOpen]=useState(false); return <header className="site-header"><div className="container nav-inner"><Link className="wordmark" href="/" onClick={()=>setOpen(false)}><span className="wordmark-symbol">D.</span><span>{site.shortName}</span></Link><nav className={open?"nav-links open":"nav-links"} aria-label="Primary navigation">{nav.map(item=><Link key={item.href} href={item.href} onClick={()=>setOpen(false)} className={pathname===item.href?"active":""}>{item.name}</Link>)}<a className="nav-github" href={site.cv} target="_blank" rel="noopener noreferrer">CV <ArrowUpRight size={15}/></a></nav><button className="menu-toggle" aria-label={open?"Close navigation":"Open navigation"} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></header> }
