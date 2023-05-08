import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CalculatorScreen from './src/pages/Calculator/CalculatorScreen';
import HomeScreen from './src/pages/HomeScreen';
import ResultScreen from './src/pages/ResultScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Рассчет">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Рассчет" component={CalculatorScreen} />
        <Stack.Screen name="Results" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}