export interface ICurrentSlide {
    logo: string;
    parentalRating: number;
    releaseYear: string;
    background: string;
    seasons?: number;
    description: string;
}

export interface ISlider {
    children: JSX.Element;
    currentSlide: ICurrentSlide;
}