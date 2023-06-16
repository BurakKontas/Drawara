import React from "react";

import { HoverImage } from "@/Components/HoverImage";

import styles from '@/styles/MovieCarousel.module.scss'

import { Navigation, A11y, FreeMode, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ItemType } from "@/Components/Item";

type Props = {
    title: string;
    items: Array<ItemType>;
}

export const MovieCarousel: React.FC<Props> = ({ title, items }) => {
    const [show, setShow] = React.useState(4);

    return (
        <div className={styles["lastest-movies-container"]}>
            <h1>{title}</h1>
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y, FreeMode, Autoplay]}
                spaceBetween={20}
                slidesPerView={show}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    waitForTransition: true,
                    pauseOnMouseEnter: true,
                }}
                navigation
                pagination={{ clickable: true }}
            >
                {items.map((item, index) => {
                    return (
                        <SwiperSlide key={"slider2-" + index} style={{ userSelect: "none" }}>
                            <HoverImage item={item} key={index} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}