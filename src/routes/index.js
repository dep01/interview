import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {SplashScreen, MapsScreen} from '../view';
import {sys_colors, sys_font} from '../utils/constants';
import {static_routes} from './static_routes';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={static_routes.splash}>
        <Stack.Screen
          name={static_routes.splash}
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={static_routes.maps}
          component={MapsScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
