import React from 'react';
import Image from 'next/image';

// ASSETS
import logo from '../../public/logo.png';

// COMPONENTS
import { Menu } from '@components/Menu';
import { Row, Col } from '@components/Grid';

// CONSTANTS
import { menuHeader } from '@constants/menu.constant';

// STYLES
import { HeaderContainer, MenuWrapper } from './styles';

const Header = (): JSX.Element => {
    return (
        <HeaderContainer>
            <Row>
                <Col sm={12} md={3} lg={3}>
                    <Image src={logo} alt="Logo StreamBay" />
                </Col>
                <Col sm={12} md={9} lg={9}>
                    <MenuWrapper>
                        <Menu items={menuHeader} variant="vertical" />
                    </MenuWrapper>
                </Col>
            </Row>
        </HeaderContainer>
    );
};

export default Header;