import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

// COMPONENTS
import { Carousel } from '@components/Carousel';

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
            <CarouselWrapper first>
                <Carousel />
            </CarouselWrapper>
        </>
    );
};

export default IndexPage;