import React from "react";

import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { openModal, setModalLink } from "@/Redux/Modal/modalSlice";

import styles from "@/styles/WatchTrailer.module.scss";

type Props = {
    link: string;
    style?: React.CSSProperties;
}

export const WatchTrailer: React.FC<Props> = ({ link, style }) => {
    const dispatch = useAppDispatch();
    const modal = useAppSelector(state => state.modal);
    return (
        <div className={styles["watch-trailer-container"]}>
            <div className={styles["watch-trailer"]} style={style}>
                <button onClick={() => {
                    dispatch(setModalLink(link))
                    dispatch(openModal())
                }} style={{ borderWidth: 0, background: "transparent" }} className={`${styles["video-open"]}  ${styles["playbtn"]}`}><svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7"><polygon className={styles["triangle"]} fill="none" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon><circle className={styles["circle"]} fill="none" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" cx="106.8" cy="106.8" r="103.3"></circle></svg><span className={styles["w-trailor"]}>Watch Trailer</span></button>
            </div>
        </div>
    )
} 