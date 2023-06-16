export interface Genres {
    data: Datum[];
}

interface Datum {
    mal_id: number;
    name: string;
    url: string;
    count: number;
}
