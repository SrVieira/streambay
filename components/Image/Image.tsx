import React from 'react';

// STYLES
import { ImageWrapper } from './styles';

const ImageUI = ({ src, alt }): JSX.Element => {
    return (
        <ImageWrapper>
            <img src={src} alt={alt} />
        </ImageWrapper>
    );
};

export default ImageUI;