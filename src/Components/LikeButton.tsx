import React from "react";

import styles from '@/styles/LikeButton.module.scss'

type Props = {
    liked: boolean;
    onClick: () => void;
    style?: React.CSSProperties;
}

export const LikeButton: React.FC<Props> = ({ liked, onClick, style }) => {
    return <button type="button" style={{ color: (liked) ? "#F27983" : "white", ...style }} id={styles["heart"]} onClick={onClick}>&#9829;</button>
}