import React from 'react';
import { useRouter } from 'next/router';

// COMPONENTS
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { Slider } from '@components/Slider';
import { Container, Row, Col } from '@components/Grid';

const Layout = ({ children }): JSX.Element => {
    const { pathname } = useRouter();
    const currentSlide = {
        background: "background.png",
        logo: "znation.png",
        releaseYear: "2022",
        parentalRating: 18,
        seasons: 5,
        description: "Three years after a virus decimated the vast majority of America's population, turning them into flesh-eating zombies, a brave group tries to transport a survivor to the last working virology lab."
    };

    return (
        <div>
            {pathname == '/' && (
                <Slider currentSlide={currentSlide}>
                    <Container>
                        <Row>
                            <Col sm={12} md={12} lg={12}>
                                <Header />
                            </Col>
                        </Row>
                    </Container>
                </Slider>
            )}
            {pathname != '/' && (
                <Header />
            )}
            {children}
            <Footer />
        </div>
    );
};

export default Layout;