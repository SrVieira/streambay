import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

// COMPONENTS
import { Carousel } from '@components/Carousel';
import { Container } from '@components/Grid';

// MOCKS
import indexMock from '@mocks/index.mock.json';

// STYLES
import { CarouselWrapper } from '@styles/index';

const IndexPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>StreamBay - Open Source Project | Home</title>
                <meta name="description" content="Open Source Project" />
            </Head>
            <Container>
                {indexMock.categories.map((category, idx: number) => {
                    return (
                        <CarouselWrapper key={`category-${idx}`} first>
                            <Carousel {...category} />
                        </CarouselWrapper>
                    )
                })}
            </Container>
        </>
    );
};

export default IndexPage;