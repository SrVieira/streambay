import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

// COMPONENTS
import { Layout } from '@components/Layout';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Layout>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
}