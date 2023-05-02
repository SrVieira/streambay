import React from 'react';

// COMPONENTS
import { Image } from '@components/Image';
import { Container } from '@components/Grid';
import { Button } from '@components/Button';

// INTERFACES
import { ISlider } from '@interfaces/slider.interface';

// STYLES
import {
    SliderContainer,
    SlideTitle,
    SlideInfo,
    SlideInfoLabel,
    SlideParental,
    SlideDescription,
    SlideActions,
    SlideMenu,
    SlideMenuItem
} from './styles';

const Slider = ({ children, currentSlide }: ISlider): JSX.Element => {
    return (
        <SliderContainer backgroundSlide={currentSlide.background}>
            {children}
            <Container>
                <div>
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
                    <SlideActions>
                        <Button variant="primary">Play</Button>
                        <Button variant="light">Add to List</Button>
                    </SlideActions>
                    <SlideMenu>
                        <SlideMenuItem>Overview</SlideMenuItem>
                        <SlideMenuItem>Cast</SlideMenuItem>
                        <SlideMenuItem>Episodes</SlideMenuItem>
                    </SlideMenu>
                </div>
            </Container>
        </SliderContainer>
    );
};

export default Slider;