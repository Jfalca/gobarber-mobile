import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Left, Avatar, Info, Name, Time } from './styles';

const Appointment = () => {
  return (
    <Container>
      <Left>
        <Avatar
          source={{ uri: 'https://api.adorable.io/avatar/50/rocketseat.png' }}
        />
        <Info>
          <Name>Jorge Falca</Name>
          <Time>em 3 horas</Time>
        </Info>
      </Left>
      <TouchableOpacity>
        <Icon name="even-busy" size={20} color="#f64c75" />
      </TouchableOpacity>
    </Container>
  );
};

export default Appointment;
