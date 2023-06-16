import React from "react";

import { HoverImage } from "@/Components/HoverImage";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Lazy, Mousewheel, Pagination } from "swiper";

import styles from "@/styles/MovieCarouselVertical.module.scss";

import { ItemType, MoreDetailsButton, PlayButton } from "@/Components/Item";
import { Rating } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { Tag } from "primereact/tag";
import { items as itemler } from "@/Components/Carousel";
import { WatchTrailer } from "@/Components/WatchTrailer";
import Image from "next/image";

type Props = {
    title: string;
    items: Array<ItemType>;
}
export const MovieCarouselVertical: React.FC<Props> = ({ title, items }) => {
    const [isHovering, setIsHovering] = React.useState(false);
    const [show, setShow] = React.useState(3);
    const [selected, setSelected] = React.useState(0)

    return (
        <div className={styles["movie-carousel-vertical-container"]}>
            <h1>{title}</h1>
            <div className={"movie-carousel-vertical-swiper-container"} style={{height:800, width:450, margin:30}}>
                <div className={styles["movie-carousel-vertical-image-container"]}>
                    <Image className={styles["movie-carousel-vertical-image"]} src={itemler[selected].imageURL} alt={itemler[selected].title} width={1920} height={1080} />
                    <div className={styles["movie-carousel-vertical-image-container-items"]}>
                        <div className={styles["item"]} style={{ height: 800, width: "fit-content", padding: 50, marginLeft: -15 }}>
                            <div className={styles["content"]}>
                                <h1 id={styles["title"]}>{itemler[selected].title}</h1>
                                <div id={styles["rating"]}>
                                    <Rating
                                        name="text-feedback"
                                        readOnly
                                        value={itemler[selected].rate / 2}
                                        precision={0.5}
                                        color="primary"
                                        size="medium"
                                        style={{
                                            color: "#e50914",
                                        }}
                                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                    />
                                    <div style={{ display: "flex", width: 1100 }}>
                                        <p>{itemler[selected].rate} (MAL)</p>
                                        <p style={{ marginLeft: 20 }}>
                                            <Tag value={itemler[selected].rating} style={{ backgroundColor: "grey", borderRadius: 0, width: "" }} />
                                        </p>
                                        <p style={{ marginLeft: 20 }}>{itemler[selected].episodes} Episodes</p>
                                    </div>
                                </div>
                                <p id={styles["description"]}>{itemler[selected].description}</p>
                                <div id={styles["about"]}>
                                    {itemler[selected].about.map((a, i) => {
                                        return (
                                            <div key={i} className={styles["about-item"]}>
                                                <h6>{Object.keys(a)[0]}:</h6>
                                                {/* @ts-ignore */}
                                                <p>{a[Object.keys(a)[0]].join(", ")}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div id={styles["buttons"]}>
                                    <PlayButton />
                                    <MoreDetailsButton />
                                </div>
                            </div>
                            <WatchTrailer link={itemler[selected].trailer} style={{ marginLeft: 250, width: 400 }} />
                        </div>
                    </div>
                </div>
                <Swiper
                    className={styles["movie-carousel-vertical-swiper"]}
                    direction={"vertical"}
                    modules={[FreeMode, Mousewheel, Autoplay, Pagination]}
                    mousewheel={true}
                    spaceBetween={50}
                    slidesPerView={show}
                    onSlideChange={(swiper) => setSelected(swiper.activeIndex)}
                >
                    {items.map((item, index) => {
                        return (
                            <SwiperSlide key={"slide-" + index} style={{ userSelect: "none" }}>
                                <Tag style={{ position: "absolute", zIndex: 2, top: 0, left: 0, borderRadius: 0, backgroundColor: "#D4AF37", width: "fit-content" }}>RANK {index + 1}</Tag>
                                <HoverImage onClick={() => setSelected(index)} item={item} key={index} />
                            </SwiperSlide>
                        )
                    })}
                    <SwiperSlide>
                        <button>More</button>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}