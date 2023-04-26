import React from 'react';

const Menu = ({ items, variant }): JSX.Element => {
    return (
        <div>
            {items.map((item) => {
                return (
                    <div>{item.label}</div>
                )
            })}
        </div>
    );
};

export default Menu;