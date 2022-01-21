import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <Label htmlFor="select">{label}</Label>
      <OurSelect
        id="select"
        value={value}
        onChange={onChange}
        width={displayedValue.length}
      >
        {children}
      </OurSelect>
      <Icon id="chevron-down" size={18} as={OurIcon} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const Label = styled.label`
  margin-right: 4px;
`;

const OurSelect = styled.select`
  appearance: none;
  border: none;

  font-family: Roboto;
  color: ${COLORS.gray700};
  background: ${COLORS.transparentGray15};

  padding: 12px 52px 12px 16px;

  box-sizing: content-box; /* 🤷‍♀️ */
  width: ${(p) => p.width}ch; /* 🤷‍♀️ */

  border-radius: 8px;

  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`;

const OurIcon = styled.span`
  position: absolute;
  top: 11px;
  right: 10px;
  color: ${COLORS.gray700};

  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`;

export default Select;
