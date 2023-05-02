import styled from 'styled-components';

export const SliderContainer = styled.div<{ backgroundSlide?: string }>`
    background-size: cover;
    background: url(${(props) => props.backgroundSlide});
    min-height: 100vh;
    > div:last-child {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        height: calc(100vh - 82px);
    }
`;

export const SlideTitle = styled.div``;

export const SlideInfo = styled.div`
    align-items: center;
    display: flex;
    margin-top: 16px;
    span {
        margin-right: 20px;
    }
`;

export const SlideInfoLabel = styled.span`
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    line-height: 18.96px;
`;

export const SlideParental = styled.span`
    background: #141414;
    border-radius: 24px;
    border: 1px solid;
    color: #fff;
    display: block;
    font-size: 16px;
    font-weight: 600;
    line-height: 18.96px;
    padding: 2px 15px;
`;

export const SlideDescription = styled.p`
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    margin: 20px 0;
    max-width: 100%;
    width: 676px;
`;

export const SlideActions = styled.div`
    button:first-child {
        min-width: 128px;
        max-width: 100%;
        margin-right: 24px;
    }
    button:last-child {
        min-width: 148px;
        max-width: 100%;
    }
`;

export const SlideMenu = styled.ul`
    margin-top: 32px;
    list-style: none;
`;

export const SlideMenuItem = styled.li`
    display: inline-block;
    margin-right: 48px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
`;