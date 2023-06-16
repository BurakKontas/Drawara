export interface Recommenditions {
    data: Datum[];
}

interface Datum {
    entry: Entry;
    url: string;
    votes: number;
}

interface Entry {
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
