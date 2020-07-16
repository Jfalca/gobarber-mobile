import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

const App = createBottomTabNavigator();

const AppRoutes = () => (
  <App.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        switch (route.name) {
          case 'Agendamento':
            iconName = focused ? 'event' : 'event';
            break;
          case 'Meu perfil':
            iconName = focused ? 'person' : 'person';
            break;
          default:
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      keyboardHidesTabBar: true,
      activeTintColor: '#FFF',
      style: {
        backgroundColor: '#8d41a8',
      },
      inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
    }}
  >
    <App.Screen name="Agendamento" component={Dashboard} />
    <App.Screen name="Meu perfil" component={Profile} />
  </App.Navigator>
);

export default AppRoutes;
