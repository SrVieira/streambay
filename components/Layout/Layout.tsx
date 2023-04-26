import React from 'react';

// COMPONENTS
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { Slider } from '@components/Slider';

const Layout = ({ children }): JSX.Element => {
    return (
        <div>
            <Slider>
                <Header />
            </Slider>
            {children}
            <Footer />
        </div>
    );
};

export default Layout;