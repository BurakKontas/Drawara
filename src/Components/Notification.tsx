import React from "react"

import { NotificationType } from "@/Components/Navbar"
import { Tooltip } from 'primereact/tooltip';

import styles from '@/styles/Notification.module.scss'

let Severities = {
    info: {
        backgroundColor: "#E9E9FF",
        color: "#696CFF"
    },
    success: {
        backgroundColor: "#E4F8F0",
        color: "#1EA97C"
    },
    warn: {
        backgroundColor: "#FFF2E2",
        color: "#CC8925"
    },
    error: {
        backgroundColor: "#FFE7E6",
        color: "#FF5757"
    },
}

type Props = {
    notification: NotificationType,
    style?: React.CSSProperties
}

function convertTimeStringToDate(dateString: string, time: string): Date {
    let date = new Date(dateString);
    const [hour, minute] = time.split(":");
    date.setHours(Number(hour), Number(minute), 0, 0);
    return date;
}

function compareDates(date: Date) {
    const now = new Date();
    const diff = Math.abs(now.getTime() - date.getTime());

    // milisaniyeleri günlere, saatlere, dakikalara ve saniyelere dönüştürmek için sabitler
    const dayMs = 24 * 60 * 60 * 1000;
    const hourMs = 60 * 60 * 1000;
    const minuteMs = 60 * 1000;


    if (diff >= dayMs * 365) {
        return "1 yıldan fazla";
    } else if (diff >= dayMs) {
        const days = Math.floor(diff / dayMs);
        return `${days} gün önce`;
    } else if (diff >= hourMs) {
        const hours = Math.floor(diff / hourMs);
        return `${hours} saat önce`;
    } else if (diff >= minuteMs) {
        const minutes = Math.floor(diff / minuteMs);
        return `${minutes} dakika önce`;
    } else {
        const seconds = Math.floor(diff / 1000);
        return `${seconds} saniye önce`;
    }
}

export const Notification: React.FC<Props> = ({ notification, style }) => {
    const date = convertTimeStringToDate(notification.date, notification.time);
    return (
        <button onClick={() => console.log("Notification")} className={styles["notification-container"]} style={{ ...Severities[notification.severity], ...style }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div className={styles["notification-header"]} style={{ marginBottom: -6 }}>
                    <Tooltip disabled={notification.title.length < 38} className={styles["notification-tooltip"]} target="h4" position="bottom" />
                    <h4 data-pr-tooltip={(notification.title.length < 38) ? "" : notification.title} >{notification.title}</h4>
                    <button onClick={(e) => {
                        e.stopPropagation();
                        console.log("X");
                    }} style={{ color: Severities[notification.severity].color }}>X</button>
                </div>
            </div>
            <p>{notification.description}</p>
            <p style={{ color: "#333", fontSize: 12, opacity: 0.5 }}>{compareDates(date)}</p>
        </button>
    )
}