export interface Episodes {
    pagination: Pagination;
    data: Datum[];
}

interface Datum {
    mal_id: number;
    url: string;
    title: string;
    title_japanese: string;
    title_romanji: string;
    aired: Date;
    score: number | null;
    filler: boolean;
    recap: boolean;
    forum_url: string;
}

interface Pagination {
    last_visible_page: number;
    has_next_page: boolean;
}
