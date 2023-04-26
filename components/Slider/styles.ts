import styled from 'styled-components';

export const SliderContainer = styled.div<{ backgroundSlide?: string }>`
    min-height: 100vh;
    background: url(${(props) => props.backgroundSlide});
    background-size: cover;
`;