import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// STYLES
import { MenuContainer, MenuItem } from './styles';

const Menu = ({ items, variant }): JSX.Element => {
    const { pathname } = useRouter();

    return (
        <MenuContainer>
            {items.map((item) => {
                return (
                    <MenuItem key={`menu-${item.id}`} isActive={item.path == pathname}>
                        <Link href={item.path}>{item.label}</Link>
                    </MenuItem>
                )
            })}
        </MenuContainer>
    );
};

export default Menu;