import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';

const MainFlowTab = createBottomTabNavigator();
const LoginStack = createNativeStackNavigator();
const TrackStack = createNativeStackNavigator();


export default function App() {
  let isSignedIn= null;
  return (
    <NavigationContainer>
       {  isSignedIn == null ? ( 
          <LoginStack.Navigator>
            <LoginStack.Screen name="Signup" component={SignupScreen} />
            <LoginStack.Screen name="Signin" component={SigninScreen} />
          </LoginStack.Navigator>
       ): 
       (
         <MainFlowTab.Navigator>
          <MainFlowTab.Screen name="TrackCreate" component={TrackCreateScreen} />
          <MainFlowTab.Screen name="Account" component={AccountScreen} />
          <MainFlowTab.Screen name="TrackListFlow">
          {() => (
            <TrackStack.Navigator>
              <TrackStack.Screen  name="TrackList" component={TrackListScreen} />
              <TrackStack.Screen name="TrackDetail" component={TrackDetailScreen} />
            </TrackStack.Navigator>
          )}
        </MainFlowTab.Screen>
      </MainFlowTab.Navigator>
       )
      }
      

    </NavigationContainer>
  );
}