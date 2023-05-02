export interface ICarouselItem {
    id: number;
    title: string;
    titleId: number;
    parentalRating: number;
    type: 'serie' | 'movie';
    seasons: number;
    episodes: number;
};

export interface ICarousel {
    id: number;
    name: string;
    slug: string;
    items: Array<ICarouselItem>
};
