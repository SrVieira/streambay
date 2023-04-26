import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

// COMPONENTS
import { Layout } from '@components/Layout';

// STYLES
import { GlobalStyle } from '@styles/GlobalStyle';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Layout>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </Layout>
    );
}