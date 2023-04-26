import React from 'react';

// STYLES
import { SliderContainer } from './styles';

const Slider = ({ children, currentSlide }): JSX.Element => {
    return (
        <SliderContainer backgroundSlide={currentSlide.background}>
            {children}
            slider
        </SliderContainer>
    );
};

export default Slider;