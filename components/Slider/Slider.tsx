import React from 'react';

// COMPONENTS
import { Image } from '@components/Image';
import { Container } from '@components/Grid';

// INTERFACES
import { ISlider } from '@interfaces/slider.interface';

// STYLES
import {
    SliderContainer,
    SlideTitle,
    SlideInfo,
    SlideInfoLabel,
    SlideParental,
    SlideDescription
} from './styles';

const Slider = ({ children, currentSlide }: ISlider): JSX.Element => {
    return (
        <SliderContainer backgroundSlide={currentSlide.background}>
            {children}
            <Container>
                <SlideTitle>
                    <Image src={`/${currentSlide.logo}`} alt="logo slide" />
                </SlideTitle>
                <SlideInfo>
                    <SlideInfoLabel>{currentSlide.releaseYear}</SlideInfoLabel>
                    <SlideParental>{currentSlide.parentalRating >= 10 ? <>{currentSlide.parentalRating}+</> : <>Livre</>}</SlideParental>
                    {currentSlide.seasons && (
                        <SlideInfoLabel>{currentSlide.seasons} {currentSlide.seasons > 1 ? 'seasons' : 'season'}</SlideInfoLabel>
                    )}
                </SlideInfo>
                <SlideDescription>
                    {currentSlide.description}
                </SlideDescription>
            </Container>
        </SliderContainer>
    );
};

export default Slider;