import React from "react";
import { Inter } from 'next/font/google'
import Head from 'next/head'

import { NavBar } from "@/Components/Navbar";
import { Footer } from "@/Components/Footer";

import axios from 'axios';
import { CustomCarousel, items as mockData } from "@/Components/Carousel";
import { MovieCarousel } from "@/Components/MovieCarousel";
import { MovieCarouselVertical } from "@/Components/MovieCarouselVertical";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { updateLanguage } from "@/Redux/Language/languageSlice";
import { Modal } from '@mui/material';
import { closeModal } from "@/Redux/Modal/modalSlice";


export default function Home() {
    const languageCode = useAppSelector(state => state.language.languageCode) || window.navigator.language;
    const modal = useAppSelector(state => state.modal);
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        const getLanguage = async () => {
            let language = await axios.get(`api/language?language=${languageCode}`)
            dispatch(updateLanguage(language.data))
        }
        if (languageCode !== undefined) getLanguage()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [languageCode])
    return (
        <>
            <Head>
                <title>Drawara</title>
                <meta name="description" content="Drawara.com" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={"home-container"}>
                <Modal
                    open={modal.open}
                    onClose={() => dispatch(closeModal())}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    keepMounted={false}
                >
                    <div className='modal-div'>
                        <iframe
                            src={modal.link}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            title="Embedded youtube"
                        />
                    </div>
                </Modal>
                <NavBar />
                <CustomCarousel items={mockData} key="custom-carousel" />
                <MovieCarousel items={mockData} title="Lastest Episodes" />
                <MovieCarousel items={mockData} title="Trending Series" />
                <MovieCarousel items={mockData} title="Suggested For You" />
                <MovieCarousel items={mockData} title="Upcoming Episodes" />
                <MovieCarouselVertical items={mockData} title="MyAnimeList Top 100 Series" />
                <Footer />
            </main>
        </>
    )
}