import React from "react";
import Head from 'next/head'

import { NavBar } from "@/Components/Navbar";
import { Footer } from "@/Components/Footer";

import { useAppDispatch, useAppSelector } from "@/Redux/hooks";



export default function Animes() {
    const languageCode = useAppSelector(state => state.language.languageCode) || window.navigator.language;
    const dispatch = useAppDispatch();
    return (
        <>
            <Head>
                <title>Drawara</title>
                <meta name="description" content="Drawara.com" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={"container"}>
                <NavBar />
                <div style={{height:"100vh",width:"100%", backgroundColor:"#333"}}>
                    
                </div>
                <Footer />
            </main>
        </>
    )
}