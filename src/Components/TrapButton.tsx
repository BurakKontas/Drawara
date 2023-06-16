import React from "react"

declare global {
    interface Window {
        twttr: any;
    }
}

import styles from '@/styles/TrapButton.module.scss'

type Props = {
    style?: React.CSSProperties;
    link: string;
}

export const TrapButton: React.FC<Props> = ({ style, link }) => {

    React.useEffect(() => {
        if (window.twttr) {
            window.twttr.widgets.load();
        } else {
            const script = document.createElement('script');
            script.async = true;
            script.src = 'https://platform.twitter.com/widgets.js';
            document.getElementsByTagName('head')[0].appendChild(script);
        }
    }, [])

    return (
        <div className={styles["trapdoor"]} style={style}>
            <div className={`${styles["top"]} ${styles["door"]}`} />
            <div className={`${styles["bottom"]} ${styles["door"]}`} />
            <a href={"https://twitter.com/" + link} className={styles["twitter-follow-button"]} data-show-count="false" data-size="large" data-dnt="false">Follow @drawara.com</a>
        </div>
    )
}