/**
 *
 * Checkbox2
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'rebass';

const Container = styled(Box)`
  margin-top: ${props => (props.mt ? props.mt : 'auto')};
  margin-bottom: ${props => (props.mb ? props.mb : 'auto')};
  background: ${props => (props.bg ? props.bg : 'none')};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'transparent'};
`;

const Icon = styled.svg`
  vertical-align: baseline;
  fill: none;
  stroke: ${props => (props.checkColor ? props.checkColor : 'white')};
  stroke-width: 3px;
`;

const Label = styled.label`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  padding: ${props => (props.labelPadding ? props.labelPadding : '0 0 0 30px')};
  height: ${props => (props.labelHeight ? props.labelHeight : '25px')};
  font-size: ${props => (props.fontSize ? props.fontSize : '15px')};
  background: ${props => (props.bg ? props.bg : 'none')};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'transparent'};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
`;

const Checkmark = styled.span`
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '4px')};
  vertical-align: baseline;
  position: absolute;
  top: 0;
  left: 0;
  height: ${props => (props.size ? props.size : '18px')};
  width: ${props => (props.size ? props.size : '18px')};
  background: ${props => {
    if (props.checked && props.disabled) {
      return '#84898e';
    }
    if (props.checked) {
      return props.bg || '#2196f3';
    }
    return 'none';
  }};
  border: ${props => {
    if (props.disabled) {
      return '2px solid #84898e';
    }
    return props.border || '2px solid #2196f3';
  }};
`;

const Checkbox2 = ({
  checked,
  disabled,
  onClick,
  onChange,
  readOnly,
  name,
  value,
  label,
  bg,
  border,
  size,
  labelPadding,
  labelHeight,
  fontSize,
  borderRadius,
  checkColor,
  ...props
}) => {
  const disableClick = e => {
    if (disabled === true) {
      e.preventDefault();
    }
  };
  return (
    <Container {...props}>
      <Label
        label={label}
        labelPadding={labelPadding}
        labelHeight={labelHeight}
        fontSize={fontSize}
      >
        {label}
        <input
          type="checkbox"
          value={value}
          name={name}
          readOnly={readOnly}
          onClick={disabled ? disableClick : onClick}
          disabled={disabled}
        />
        <Checkmark
          bg={bg}
          border={border}
          size={size}
          borderRadius={borderRadius}
          checked={checked}
          value={value}
          name={name}
          readOnly={readOnly}
          onClick={disabled ? disableClick : onClick}
          disabled={disabled}
        >
          {checked && (
            <Icon viewBox="0 0 24 24" checkColor={checkColor}>
              <polyline points="20 6 9 17 4 12" />
            </Icon>
          )}
        </Checkmark>
      </Label>
    </Container>
  );
};
Checkbox2.propTypes = {
  readOnly: PropTypes.bool,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  background: PropTypes.string,
};

export default Checkbox2;
