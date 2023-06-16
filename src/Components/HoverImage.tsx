import React from "react";
import { IconButton } from '@mui/material';

import styles from '@/styles/HoverImage.module.scss'

import ShareIcon from '@mui/icons-material/Share';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ItemType } from "@/Components/Item";
import Image from "next/image";

type Props = {
    item: ItemType
    style?: React.CSSProperties;
    color?: string;
    onClick?: Function;
}


export const HoverImage: React.FC<Props> = ({ item, style, color, onClick }) => {
    return (
        <section className={styles["bg"]} onClick={() => {
            try {
                onClick!();
            } catch (err) { }
            console.log("Clicked")
        }}>
            <div className={styles["blog-card"]} style={style}>
                <div className={styles["hover-image-buttons"]}>
                    <IconButton style={{ background: "rgba(255,255,255,0.6)" }}>
                        <ShareIcon color="primary" />
                    </IconButton>
                    <IconButton style={{ background: "rgba(255,255,255,0.6)" }}>
                        <FavoriteIcon color="error" />
                    </IconButton>
                    <IconButton style={{ background: "rgba(255,255,255,0.6)" }}>
                        <RemoveRedEyeIcon color="action" />
                    </IconButton>
                </div>
                <Image className={styles["blog-img"]} src={item.imageURL} alt={item.title} height={500} width={500} />
                <div className={styles["text-overlay"]}>
                    <h2 style={{ color: color }}>{item.title}</h2>
                    <p style={{ color: color }}>{item.description}</p>
                </div>
            </div>
        </section>
    )
}


/**
 * 
 *                 <button onClick={() => navigation(item.link, {
                    replace: true,
                })} 
                {dict?.readMore}
 */