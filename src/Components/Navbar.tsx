import React from "react";
import { Notification } from "@/Components/Notification";

import IconButton from '@mui/material/IconButton';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { OverlayPanel } from 'primereact/overlaypanel';
import { InputText } from "primereact/inputtext";
import { Avatar, Divider, Tabs, Tab, Box } from "@mui/material";

import styles from '@/styles/Navbar.module.scss'

import Image from "next/image";
import { useRouter } from 'next/router'

//@ts-ignore
import NotificationBadge from 'react-notification-badge';

export type NotificationType = {
    title: string;
    date: string;
    time: string;
    read: boolean;
    id: number;
    description: string;
    severity: "info" | "success" | "warn" | "error";
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

let navbarButtons = [
    { name: "Home", link: "/" },
    { name: "Anime", link: '/anime' },
    { name: "Manga", link: '/manga' },
    { name: "Characters", link: '/characters' },
    { name: "Categories", link: '/categories' },
    { name: "News", link: '/news' },
    { name: "Forum", link: '/forum' },
    { name: "About", link: '/about' },
    { name: "Contact", link: '/contact' }
]

export const NavBar = () => {
    const [value, setValue] = React.useState(0);
    const router = useRouter()

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const op = React.useRef(null);
    const op2 = React.useRef(null);
    const op3 = React.useRef(null);
    const [notifications, setNotifications] = React.useState<NotificationType[]>([
        { "title": "test test test test test test test test test test test test ", "date": "2021-10-10", "time": "19:20", "read": false, "id": 1, description: "bu çoooooooooooooooooook çoooooooooooooooooook uzun bir mesaaaaaaaj", severity: "info" },
        { "title": "test2", "date": "2021-10-10", "time": "19:20", "read": true, "id": 2, description: "test", severity: "success" },
        { "title": "test3", "date": "2021-10-10", "time": "19:20", "read": false, "id": 3, description: "test", severity: "warn" },
        { "title": "test4", "date": "2021-10-10", "time": "19:20", "read": false, "id": 4, description: "test", severity: "error" },
    ]);

    return (
        <div className={styles["navbar-container"]}>
            <div className={styles["navbar-logo"]}>
                <button style={{ background: "transparent", borderWidth: 0, width: "100%", height: "100%", }}>
                    <Image
                        src="/Assets/drawara-red.png"
                        alt="Drawara Logo"
                        width={200}
                        height={50}
                    />                </button>
            </div>
            <div className={styles["navbar-navigations"]}>
                <ul>
                    {navbarButtons.map((button, index) => {
                        return (
                            <li key={"navbar-navigations-" + index}><button onClick={() => router.push(button.link)}>{button.name}</button></li>
                        )
                    })}
                </ul>
            </div>
            <div className={styles["navbar-utils"]}>
                <span ref={op3} className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText style={{ backgroundColor: "#333", color: "white", borderColor: "#333" }} onChange={(e) => {
                        if (e.target.value.length >= 3) {
                            //@ts-ignore
                            op3.current.show(e);
                        } else {
                            //@ts-ignore
                            op3.current.hide(e);
                        }
                    }} placeholder="Ara" />
                </span>
                <OverlayPanel ref={op3} style={{ backgroundColor: "#333", color: "white" }} >
                    <div style={{ display: "flex", flexDirection: "column", maxWidth: 600, maxHeight: 400, overflowY: "scroll" }} className="hide-scrollbar">
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs TabIndicatorProps={{ style: { backgroundColor: "#bb040d" } }} value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab disableRipple={true} style={{ color: "white" }} color="red" label="Anime" />
                                <Tab disableRipple={true} style={{ color: "white" }} color="red" label="Manga" />
                                <Tab disableRipple={true} style={{ color: "white" }} color="red" label="Karakter" />
                                <Tab disableRipple={true} style={{ color: "white" }} color="red" label="Diğer" />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            Item One
                            {/* Bu searchlar 20-25 tane sonuç döndürür devamını göster tuşu koyarız alta eğer 25 i geçerse ve search sayfasına göndeririz */}
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Item Two
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Item Three
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            Item Four
                        </TabPanel>
                    </div>
                </OverlayPanel>
                {/* @ts-ignore */}
                <IconButton onClick={(e) => op.current.toggle(e)} style={{ color: "lightgray" }} aria-label="notifications">
                    <NotificationsNoneIcon sx={{ width: 35, height: 35 }} />
                    <div style={{ marginLeft: 10, marginTop: 10 }}>
                        <NotificationBadge count={notifications.filter(n => !n.read).length} effect={["", "", "", ""]} />
                    </div>
                </IconButton>
                <OverlayPanel ref={op} style={{ backgroundColor: "#333", color: "white" }} >
                    <div style={{ display: "flex", flexDirection: "column", maxWidth: 400, maxHeight: 400, overflowY: "scroll" }} className="hide-scrollbar">
                        <Divider >Unread Notifications</Divider>
                        {notifications.filter(n => !n.read).map(n => <Notification key={n.id} notification={n} />)}
                        <Divider >Read Notifications</Divider>
                        {notifications.filter(n => n.read).map(n => <Notification key={n.id} notification={n} style={{ opacity: 0.35 }} />)}
                    </div>
                </OverlayPanel>
                {/* @ts-ignore */}
                <button onClick={(e) => op2.current.toggle(e)} style={{ background: "none", border: "none" }}>
                    <Avatar src={"/Assets/user.png"} />
                </button>
                <OverlayPanel ref={op2} style={{ width: 300, backgroundColor: "#333", color: "white" }}>
                    <div className={styles["navbar-user-overlay"]}>
                        <button className={styles["navbar-user-overlay-avatar"]} style={{ width: 150, alignSelf: "center", textAlign: "center" }}>
                            <Avatar src={"/Assets/user.png"} style={{ alignSelf: "center", width: "100%", height: "fit-content" }} />
                            <p></p>
                            <p>[@admin]</p>
                        </button>
                        <Divider>Oturum</Divider>
                        <button className={styles["navbar-user-overlay-button"]}>Profil</button>
                        <button className={styles["navbar-user-overlay-button"]}>Oturumu Kapat</button>
                        <Divider>Üyelikler</Divider>
                        <button className={styles["navbar-user-overlay-button"]}>Premium Avantajları</button>
                        <button className={styles["navbar-user-overlay-button"]}>Üyelikleri Yönet</button>
                        <Divider>Hızlı Ayarlar</Divider>
                        <button className={styles["navbar-user-overlay-button"]}>Gece Modu</button>
                        <button className={styles["navbar-user-overlay-button"]}>Yetişkin Modu</button>
                        <Divider>Diğer</Divider>
                        <button className={styles["navbar-user-overlay-button"]}>Yardım</button>
                        <button className={styles["navbar-user-overlay-button"]}>Geri Bildirim Gönder</button>
                    </div>
                </OverlayPanel>
            </div >
        </div >
    )
}
