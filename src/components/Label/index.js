import React from "react";
import styled, { useTheme } from "styled-components/native";
import Texts from "../Text";
import PropTypes from "prop-types";
import Icon from "../Icon";
import { getByScreenSize } from "../../Utils/responsive";

const RowView = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

const Text = styled(Texts)`
  color: ${({ theme }) => theme.label.textPrimary};
  font-weight: bold;
  font-size: ${({ theme }) => getByScreenSize(theme.text.s8, theme.text.s9)}px;
  margin-left: 3px;
  margin-bottom: 5px;
`;

const Required = styled(Text)`
  font-size: ${({ theme }) => theme.text.s8}px;
  color: ${({ theme }) => theme.label.required};
  padding-horizontal: 3%;
`;

const Label = ({ label, iconName, iconType, required, style }) => {
  const theme = useTheme();

  return (
    <RowView>
      <Text style={style}>{label}</Text>
      {required && <Required>*</Required>}
      {iconName !== "" && (
        <Icon
          name={iconName}
          type={iconType}
          color={theme.text.icon}
          size={getByScreenSize(theme.text.s6, theme.text.s7)}
        />
      )}
    </RowView>
  );
};

Label.propTypes = {
  label: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  required: PropTypes.bool,
  style: null,
};

Label.defaultProps = {
  iconName: "",
  iconType: "",
  required: false,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
export default Label;
