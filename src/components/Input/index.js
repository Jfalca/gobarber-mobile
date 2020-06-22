import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Proptypes from 'prop-types';
import { Container, TInput } from './styles';

function Input({ style, icon, ...rest }, ref) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255,255,255,0.6)" />}
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

Input.prototype = {
  icon: Proptypes.string,
  style: Proptypes.oneOfType([Proptypes.object, Proptypes.array]),
};

Input.defaultProps = {
  icon: null,
  style: {},
};

export default forwardRef(Input);
