import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const sizeStyles = {
    small: {
        "--width": "",
        "--padding": "5px 5px 5px 15px",
        "--font-size": `${14 / 16}rem`,
        "--border-width": "1px",
    },
    large: {
        "--width": "",
        "--padding": "5px 5px 5px 30px",
        "--font-size": `${18 / 16}rem`,
        "--border-width": "2px",
    },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
    const styles = sizeStyles[size];
    if (!styles) {
        throw new Error(`Unknown size: ${size}`);
    }

    return (
        <Wrapper>
            <IconWrapper>
                <VisuallyHidden>{icon}</VisuallyHidden>
                <Icon id={icon} size={size === "small" ? "14" : "16"} />
            </IconWrapper>
            <TextInput
                style={{ "--width": width, ...styles }}
                placeholder={placeholder}
                type="text"
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    color: ${COLORS.gray700};

    &:hover {
        color: ${COLORS.black};
    }
`;

const IconWrapper = styled.span`
    position: absolute;
`;

const TextInput = styled.input`
    border: none;
    border-bottom: var(--border-width) solid black;

    color: ${COLORS.gray500};

    font-size: var(--font-size);
    font-weight: bold;

    outline-offset: 3px;

    width: var(--width);

    padding-left: calc(1.4 * var(--font-size));

    &::placeholder {
        color: ${COLORS.gray700};
        font-weight: normal;
    }

    &:hover {
        color: inherit;
    }
`;

export default IconInput;
