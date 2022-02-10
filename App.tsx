import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MainFlowTab = createBottomTabNavigator();
const SignUpStack = createNativeStackNavigator();
const TrackStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SignUpStack.Navigator>
          <SignUpStack.Screen></SignUpStack.Screen>
      </SignUpStack.Navigator>

    </NavigationContainer>
  );
}