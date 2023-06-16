import { FC } from 'react';
import Carousel from 'react-material-ui-carousel';
import styles from '@/styles/Carousel.module.scss'

import { Item, ItemType } from '@/Components/Item';

type Props = {
    items: ItemType[]; // carousel items
};

export var items: ItemType[] = [
    {
        title: "Oshi no Ko",
        description: "Sixteen-year-old Ai Hoshino is a talented and beautiful idol who is adored by her fans. She is the personification of a pure, young maiden. But all that glitters is not gold.\n\nGorou Amemiya is a countryside gynecologist and a big fan of Ai. So when the pregnant idol shows up at his hospital, he is beyond bewildered. Gorou promises her a safe delivery. Little does he know, an encounter with a mysterious figure would result in his untimely death—or so he thought.\n\nOpening his eyes in the lap of his beloved idol, Gorou finds that he has been reborn as Aquamarine Hoshino—Ai's newborn son! With his world turned upside down, Gorou soon learns that the world of showbiz is paved with thorns, where talent does not always beget success. Will he manage to protect Ai's smile that he loves so much with the help of an eccentric and unexpected ally?",
        imageURL: "https://img.youtube.com/vi/1yXa8MAmocQ/maxresdefault.jpg",
        about: [
            { "Producers": ["Shueisha", "CyberAgent", "Kadokawa"] },
            { "Genres": ["Drama", "Supernatural"] },
            { "Studios": ["Doga Kobo"] },
            { "Themes": ["Reincarnation", "Showbiz"] },
        ],
        rate: 9.18,
        episodes: 11,
        type: "TV",
        rating: "PG-13 - Teens 13 or older",
        trailer: "https://www.youtube.com/embed/1yXa8MAmocQ?enablejsapi=1&wmode=opaque&autoplay=1",

    },
    {
        title: "Fullmetal Alchemist: Brotherhood",
        description: "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor.\n\nThe brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing \"automail,\" a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange.\n\nAs Edward becomes an infamous alchemist and gains the nickname \"Fullmetal,\" the boys' journey embroils them in a growing conspiracy that threatens the fate of the world.",
        imageURL: "https://img.youtube.com/vi/--IcmZkvL0Q/maxresdefault.jpg",
        about: [
            { "Producers": ["Aniplex", "Square Enix", "Mainichi Broadcasting System", "Studio Moriken"] },
            { "Genres": ["Action", "Adventure", "Drama", "Fantasy"] },
            { "Studios": ["Bones"] },
            { "Themes": ["Military"] },
        ],
        rate: 9.1,
        episodes: 64,
        type: "TV",
        rating: "R - 17+ (violence & profanity)",
        trailer: "https://www.youtube.com/embed/--IcmZkvL0Q?enablejsapi=1&wmode=opaque&autoplay=1",
    },
    {
        title: "Shingeki no Kyojin: The Final Season - Kanketsu-hen",
        description: "In the wake of Eren Yeager's cataclysmic actions, his friends and former enemies form an alliance against his genocidal rampage. Though once bitter foes, Armin Arlert, Mikasa Ackerman, and the remaining members of the Scout Regiment join forces with Reiner Braun and the survivors of the Marleyan military. Their meager united front sets out on a mission to stop Eren's wrath and—if possible—save their old comrade in the process.\n\nAs Eren pushes forward at any cost, he battles his own internal turmoil. Although he feels immense remorse over his horrific invasion, Eren believes he harbors noble intentions: he believes the path ahead is the only way to save his friends and, to a greater extent, his people.\n\nThe opposing battalions spiral toward an inevitable final clash that may claim the lives of millions. Though they face an army of monsters beyond anything they could have previously imagined, Mikasa, Armin, and their allies stand brave in the face of certain doom.",
        imageURL: "https://img.youtube.com/vi/r7MosyoAUhQ/maxresdefault.jpg",
        about: [
            { "Producers": ["Production I.G", "Dentsu", "Mainichi Broadcasting System", "Pony Canyon", "Kodansh", "Pony Canyon Enterprise"] },
            { "Studios": ["MAPPA"] },
            { "Genres": ["Drama", "Supernatural"] },
            { "Themes": ["Reincarnation", "Showbiz"] },
        ],
        rate: 9.09,
        episodes: 2,
        type: "TV",
        rating: "R - 17+ (violence & profanity)",
        trailer: "https://www.youtube.com/embed/r7MosyoAUhQ?enablejsapi=1&wmode=opaque&autoplay=1",
    },
    {
        title: "Oshi no Ko",
        description: "Sixteen-year-old Ai Hoshino is a talented and beautiful idol who is adored by her fans. She is the personification of a pure, young maiden. But all that glitters is not gold.\n\nGorou Amemiya is a countryside gynecologist and a big fan of Ai. So when the pregnant idol shows up at his hospital, he is beyond bewildered. Gorou promises her a safe delivery. Little does he know, an encounter with a mysterious figure would result in his untimely death—or so he thought.\n\nOpening his eyes in the lap of his beloved idol, Gorou finds that he has been reborn as Aquamarine Hoshino—Ai's newborn son! With his world turned upside down, Gorou soon learns that the world of showbiz is paved with thorns, where talent does not always beget success. Will he manage to protect Ai's smile that he loves so much with the help of an eccentric and unexpected ally?",
        imageURL: "https://img.youtube.com/vi/1yXa8MAmocQ/maxresdefault.jpg",
        about: [
            { "Producers": ["Shueisha", "CyberAgent", "Kadokawa"] },
            { "Genres": ["Drama", "Supernatural"] },
            { "Studios": ["Doga Kobo"] },
            { "Themes": ["Reincarnation", "Showbiz"] },
        ],
        rate: 9.18,
        episodes: 11,
        type: "TV",
        rating: "PG-13 - Teens 13 or older",
        trailer: "https://www.youtube.com/embed/1yXa8MAmocQ?enablejsapi=1&wmode=opaque&autoplay=1",

    },
    {
        title: "Fullmetal Alchemist: Brotherhood",
        description: "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor.\n\nThe brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing \"automail,\" a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange.\n\nAs Edward becomes an infamous alchemist and gains the nickname \"Fullmetal,\" the boys' journey embroils them in a growing conspiracy that threatens the fate of the world.",
        imageURL: "https://img.youtube.com/vi/--IcmZkvL0Q/maxresdefault.jpg",
        about: [
            { "Producers": ["Aniplex", "Square Enix", "Mainichi Broadcasting System", "Studio Moriken"] },
            { "Genres": ["Action", "Adventure", "Drama", "Fantasy"] },
            { "Studios": ["Bones"] },
            { "Themes": ["Military"] },
        ],
        rate: 9.1,
        episodes: 64,
        type: "TV",
        rating: "R - 17+ (violence & profanity)",
        trailer: "https://www.youtube.com/embed/--IcmZkvL0Q?enablejsapi=1&wmode=opaque&autoplay=1",
    },
    {
        title: "Shingeki no Kyojin: The Final Season - Kanketsu-hen",
        description: "In the wake of Eren Yeager's cataclysmic actions, his friends and former enemies form an alliance against his genocidal rampage. Though once bitter foes, Armin Arlert, Mikasa Ackerman, and the remaining members of the Scout Regiment join forces with Reiner Braun and the survivors of the Marleyan military. Their meager united front sets out on a mission to stop Eren's wrath and—if possible—save their old comrade in the process.\n\nAs Eren pushes forward at any cost, he battles his own internal turmoil. Although he feels immense remorse over his horrific invasion, Eren believes he harbors noble intentions: he believes the path ahead is the only way to save his friends and, to a greater extent, his people.\n\nThe opposing battalions spiral toward an inevitable final clash that may claim the lives of millions. Though they face an army of monsters beyond anything they could have previously imagined, Mikasa, Armin, and their allies stand brave in the face of certain doom.",
        imageURL: "https://img.youtube.com/vi/r7MosyoAUhQ/maxresdefault.jpg",
        about: [
            { "Producers": ["Production I.G", "Dentsu", "Mainichi Broadcasting System", "Pony Canyon", "Kodansh", "Pony Canyon Enterprise"] },
            { "Studios": ["MAPPA"] },
            { "Genres": ["Drama", "Supernatural"] },
            { "Themes": ["Reincarnation", "Showbiz"] },
        ],
        rate: 9.09,
        episodes: 2,
        type: "TV",
        rating: "R - 17+ (violence & profanity)",
        trailer: "https://www.youtube.com/embed/r7MosyoAUhQ?enablejsapi=1&wmode=opaque&autoplay=1",
    },
    {
        title: "Oshi no Ko",
        description: "Sixteen-year-old Ai Hoshino is a talented and beautiful idol who is adored by her fans. She is the personification of a pure, young maiden. But all that glitters is not gold.\n\nGorou Amemiya is a countryside gynecologist and a big fan of Ai. So when the pregnant idol shows up at his hospital, he is beyond bewildered. Gorou promises her a safe delivery. Little does he know, an encounter with a mysterious figure would result in his untimely death—or so he thought.\n\nOpening his eyes in the lap of his beloved idol, Gorou finds that he has been reborn as Aquamarine Hoshino—Ai's newborn son! With his world turned upside down, Gorou soon learns that the world of showbiz is paved with thorns, where talent does not always beget success. Will he manage to protect Ai's smile that he loves so much with the help of an eccentric and unexpected ally?",
        imageURL: "https://img.youtube.com/vi/1yXa8MAmocQ/maxresdefault.jpg",
        about: [
            { "Producers": ["Shueisha", "CyberAgent", "Kadokawa"] },
            { "Genres": ["Drama", "Supernatural"] },
            { "Studios": ["Doga Kobo"] },
            { "Themes": ["Reincarnation", "Showbiz"] },
        ],
        rate: 9.18,
        episodes: 11,
        type: "TV",
        rating: "PG-13 - Teens 13 or older",
        trailer: "https://www.youtube.com/embed/1yXa8MAmocQ?enablejsapi=1&wmode=opaque&autoplay=1",

    },
    {
        title: "Fullmetal Alchemist: Brotherhood",
        description: "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor.\n\nThe brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing \"automail,\" a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange.\n\nAs Edward becomes an infamous alchemist and gains the nickname \"Fullmetal,\" the boys' journey embroils them in a growing conspiracy that threatens the fate of the world.",
        imageURL: "https://img.youtube.com/vi/--IcmZkvL0Q/maxresdefault.jpg",
        about: [
            { "Producers": ["Aniplex", "Square Enix", "Mainichi Broadcasting System", "Studio Moriken"] },
            { "Genres": ["Action", "Adventure", "Drama", "Fantasy"] },
            { "Studios": ["Bones"] },
            { "Themes": ["Military"] },
        ],
        rate: 9.1,
        episodes: 64,
        type: "TV",
        rating: "R - 17+ (violence & profanity)",
        trailer: "https://www.youtube.com/embed/--IcmZkvL0Q?enablejsapi=1&wmode=opaque&autoplay=1",
    },
    {
        title: "Shingeki no Kyojin: The Final Season - Kanketsu-hen",
        description: "In the wake of Eren Yeager's cataclysmic actions, his friends and former enemies form an alliance against his genocidal rampage. Though once bitter foes, Armin Arlert, Mikasa Ackerman, and the remaining members of the Scout Regiment join forces with Reiner Braun and the survivors of the Marleyan military. Their meager united front sets out on a mission to stop Eren's wrath and—if possible—save their old comrade in the process.\n\nAs Eren pushes forward at any cost, he battles his own internal turmoil. Although he feels immense remorse over his horrific invasion, Eren believes he harbors noble intentions: he believes the path ahead is the only way to save his friends and, to a greater extent, his people.\n\nThe opposing battalions spiral toward an inevitable final clash that may claim the lives of millions. Though they face an army of monsters beyond anything they could have previously imagined, Mikasa, Armin, and their allies stand brave in the face of certain doom.",
        imageURL: "https://img.youtube.com/vi/r7MosyoAUhQ/maxresdefault.jpg",
        about: [
            { "Producers": ["Production I.G", "Dentsu", "Mainichi Broadcasting System", "Pony Canyon", "Kodansh", "Pony Canyon Enterprise"] },
            { "Studios": ["MAPPA"] },
            { "Genres": ["Drama", "Supernatural"] },
            { "Themes": ["Reincarnation", "Showbiz"] },
        ],
        rate: 9.09,
        episodes: 2,
        type: "TV",
        rating: "R - 17+ (violence & profanity)",
        trailer: "https://www.youtube.com/embed/r7MosyoAUhQ?enablejsapi=1&wmode=opaque&autoplay=1",
    },
]

export const CustomCarousel: FC<Props> = ({ items }) => {
    return (
        <Carousel
            animation='slide'
            className={styles['carousel']}
            indicatorContainerProps={{ style: { position: "absolute", bottom: "0px", zIndex: 2, marginBottom: 10 } }}
            indicatorIconButtonProps={{ style: { padding: "2.5px" } }}
            activeIndicatorIconButtonProps={{ style: { color: "#e50914" } }}
            height={"100vh"}
            navButtonsAlwaysVisible={true}
            autoPlay={false}
            changeOnFirstRender={true}
            stopAutoPlayOnHover={true}
        >
            {items.map((item, i) => <Item item={item} key={i} />)}
        </Carousel>
    );
};