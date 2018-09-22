export interface Event {
    id: string;
    title: string;
    description: string;
    category: string;
    venue: string;
    price?: number;
    poster?: string;
    start_at: string;
    end_at: string;
    is_favorite: boolean;
}