import React from "react";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { useAppSelector } from "@/Redux/hooks"
import { Tag } from 'primereact/tag';

import { WatchTrailer } from "@/Components/WatchTrailer";

import styles from '@/styles/Item.module.scss'
import Image from "next/image";

type Props = {
    item: ItemType
}

export type ItemType = {
    title: string;
    description: string;
    imageURL: string;
    about: { [key: string]: string[] }[];
    rate: number;
    episodes: number;
    type: string;
    rating: string;
    trailer: string;
}



export const Item: React.FC<Props> = ({ item }) => {
    const dict = useAppSelector(state => state.language.language?.translation)
    return (
        <div className={styles["parent"]}>
            <Image className={styles["item-image"]} src={item.imageURL} alt={item.title} width={1920} height={1080} />
            <div className={styles["item"]}>
                <div className={styles["content"]}>
                    <h1 id={styles["title"]}>{item.title}</h1>
                    <div id={styles["rating"]}>
                        <Rating
                            name="text-feedback"
                            readOnly
                            value={item.rate / 2}
                            precision={0.5}
                            color="primary"
                            size="medium"
                            style={{
                                color: "#e50914",
                            }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        <p>{item.rate} (MAL)</p>
                        <p style={{ marginLeft: 20 }}>
                            <Tag value={item.rating} style={{ backgroundColor: "grey", borderRadius: 0 }} />
                        </p>
                        <p style={{ marginLeft: 20 }}>{item.episodes} Episodes</p>
                    </div>
                    <p id={styles["description"]}>{item.description}</p>
                    <div id={styles["about"]}>
                        {item.about.map((a, i) => {
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
            </div>
            <WatchTrailer link={item.trailer} />
        </div>
    )
}

type ButtonProps = {
    onClick?: () => void;
    buttonTextStyles?: React.CSSProperties;
}

export const PlayButton: React.FC<ButtonProps> = ({ onClick }) => {
    const dict = useAppSelector(state => state.language.language?.translation)

    return (

        <button className={styles["playnow-button"]} onClick={onClick} style={{ marginRight: 10 }}>
            <span className={styles["title-span"]}>
                {dict?.playNow}
            </span>
            <svg className={styles["stroke-svg"]}>
                <polyline className={styles["o1"]} points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                <polyline className={styles["o2"]} points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
            </svg>
        </button>
    )
}

export const MoreDetailsButton: React.FC<ButtonProps> = ({ onClick, buttonTextStyles }) => {
    const dict = useAppSelector(state => state.language.language?.translation)
    return (
        <button onClick={onClick} className={`${styles["learn-more"]} ${styles["more-details-button"]}`}>
            <span className={styles["circle"]} aria-hidden="true">
                <span className={`${styles["icon"]} ${styles["arrow"]}`}></span>
            </span>
            <span className={styles["button-text"]} style={buttonTextStyles}>{dict?.details}</span>
        </button>
    )
}