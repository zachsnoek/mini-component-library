/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const sizes = {
  small: { "--height": "8px", "--borderRadius": "4px" },
  medium: { "--height": "12px", "--borderRadius": "4px" },
  large: {
    "--height": "24px",
    "--borderRadius": "8px",
    "--padding": "4px",
    "--barHeight": "calc(var(--height) - calc(var(--padding) * 2))",
  },
};

const BarWrapper = styled.div`
  position: relative;
  background: ${COLORS.transparentGray15};

  width: 370px;
  height: var(--height);

  padding: var(--padding);

  border-radius: var(--borderRadius);
`;

const Bar = styled.div`
  position: absolute;
  display: inline-block;
  background: ${COLORS.primary};

  width: ${(p) => p.value}%;
  height: ${({ size }) =>
    size === "large" ? "var(--barHeight)" : "var(--height)"};

  border-top-left-radius: var(--borderRadius);
  border-bottom-left-radius: var(--borderRadius);

  border-top-right-radius: ${(p) => p.value > 98 && "var(--borderRadius)"};
  border-bottom-right-radius: ${(p) => p.value > 98 && "var(--borderRadius)"};
`;

const ProgressBar = ({ value, size }) => {
  if (value < 0) {
    console.warn("Value must be greater than 0. Setting value to 0.");
    value = 0;
  } else if (value > 100) {
    console.warn("Value may not be greater than 100. Setting value to 100.");
    value = 100;
  }

  const sizeStyles = sizes[size];
  if (!sizeStyles) {
    throw new Error(`Invalid size: ${size}`);
  }

  return (
    <BarWrapper
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
      style={sizeStyles}
    >
      <Bar style={sizeStyles} value={value} size={size} />
      <VisuallyHidden>{value}%</VisuallyHidden>
    </BarWrapper>
  );
};

export default ProgressBar;
