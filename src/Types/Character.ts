export interface Character {
    data: Data;
}

interface Data {
    mal_id: number;
    url: string;
    images: DataImages;
    name: string;
    name_kanji: string;
    nicknames: string[];
    favorites: number;
    about: string;
    anime: AnimeElement[];
    manga: Manga[];
    voices: Voice[];
}

interface AnimeElement {
    role: string;
    anime: MangaClass;
}

interface MangaClass {
    mal_id: number;
    url: string;
    images: { [key: string]: Image };
    title: string;
}

interface Image {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
}
interface DataImages {
    jpg: Jpg;
    webp: Webp;
}

interface Jpg {
    image_url: string;
}

interface Webp {
    image_url: string;
    small_image_url: string;
}

interface Manga {
    role: string;
    manga: MangaClass;
}

interface Voice {
    person: Person;
    language: string;
}

interface Person {
    mal_id: number;
    url: string;
    images: PersonImages;
    name: string;
}

interface PersonImages {
    jpg: Jpg;
}
