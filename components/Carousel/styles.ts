import styled from 'styled-components';

export const CarouselTitle = styled.h3`
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;
    margin-bottom: 23px;
`;

export const CarouselItem = styled.div<{ bgItem: string }>`
    height: 210px;
    max-width: 100%;
    background: url(${(props) => props.bgItem});
    background-size: cover;
    border-radius: 20px;
`;

export const CarouselItems = styled.div`
    margin-bottom: 120px;
`;