import React from 'react';

// COMPONENTS
import { Menu } from '@components/Menu';

// CONSTANTS
import { menuHeader } from '@constants/menu.constant';

const Header = (): JSX.Element => {
    return (
        <div >
            <Menu items={menuHeader} variant="vertical" />
        </div>
    );
};

export default Header;