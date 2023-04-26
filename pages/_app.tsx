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
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </Layout>
    );
}