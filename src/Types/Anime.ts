export interface Anime {
    data: Data;
}

interface Data {
    mal_id: number;
    url: string;
    images: { [key: string]: Image };
    trailer: Trailer;
    approved: boolean;
    titles: Title[];
    title: string;
    title_english: string;
    title_japanese: string;
    title_synonyms: string[];
    type: string;
    source: string;
    episodes: number;
    status: string;
    airing: boolean;
    aired: Aired;
    duration: string;
    rating: string;
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: null;
    season: null;
    year: null;
    broadcast: Broadcast;
    producers: Genre[];
    licensors: Genre[];
    studios: Genre[];
    genres: Genre[];
    explicit_genres: any[];
    themes: Genre[];
    demographics: any[];
    relations: any[];
    theme: Theme;
    external: External[];
    streaming: any[];
}

interface Aired {
    from: Date;
    to: Date;
    prop: Prop;
    string: string;
}

interface Prop {
    from: From;
    to: From;
}

interface From {
    day: number;
    month: number;
    year: number;
}

interface Broadcast {
    day: null;
    time: null;
    timezone: null;
    string: null;
}

interface External {
    name: string;
    url: string;
}

interface Genre {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

interface Image {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
}

interface Theme {
    openings: any[];
    endings: string[];
}

interface Title {
    type: string;
    title: string;
}

interface Trailer {
    youtube_id: string;
    url: string;
    embed_url: string;
    images: Images;
}

interface Images {
    image_url: string;
    small_image_url: string;
    medium_image_url: string;
    large_image_url: string;
    maximum_image_url: string;
}
