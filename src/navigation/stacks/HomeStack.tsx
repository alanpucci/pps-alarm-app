import { createStackNavigator } from '@react-navigation/stack';
import { Screens } from '../Screens';
import React from 'react';
import HomeScreen from '../../components/screens/HomeScreen/HomeScreen.component';

export type LoginStackParamList = {
    Home: undefined;
};
const Stack = createStackNavigator<LoginStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={Screens.Home} screenOptions={{headerShown:false}}>
        <Stack.Screen name={Screens.Home} component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack