import React from 'react';

// STYLES
import { StyledButton } from './styles';

const Button = ({ children, variant = "primary" }) => {
    return (
        <StyledButton variant={variant}>
            {children}
        </StyledButton>
    );
}

export default Button;
