import type {Metadata} from "next";import "./globals.css";import Header from "@/components/Header";import Footer from "@/components/Footer";import {site} from "@/lib/site";
export const metadata:Metadata={title:{default:site.title,template:"%s | Denis Kahuthu"},description:site.description,openGraph:{title:site.title,description:site.description,type:"website"},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>}
