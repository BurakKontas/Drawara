import React from "react";
import styles from '@/styles/DrawFaceButton.module.scss'
import { randomID } from "@/Helpers/randomID";

type Props = {
    onClick: () => void;
    style?: React.CSSProperties;
    title: string;
}

export const DrawFaceButton: React.FC<Props> = ({ onClick, style, title }) => {
    let id = randomID(16)
    React.useEffect(() => {
        var btn1 = document.getElementById(id)

        btn1!.addEventListener('click', (e) => {
            e.preventDefault;
            const target = e.target as HTMLElement;
            target!.classList.remove('animate');
            target!.classList.add('animate');
            setTimeout(function () {
                target!.classList.remove('animate');
            }, 500);

        })
    })

    return <button id={id} style={style} type="button" className={styles["bubbly-button"]} onClick={onClick}>{title}</button>
}