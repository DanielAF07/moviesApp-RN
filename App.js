import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import Navigation from './src/navigation/Navigation';
import FadeScreen from './src/screens/FadeScreen';
import GradientProvider from './src/context/GradientContext';

export default function App() {
  return (
    <AppState>
      <Navigation />
      {/* <FadeScreen /> */}
    </AppState>
  );
}

const AppState = ({children}) => {
  return (
    <GradientProvider>
      <NavigationContainer>
        {children}
      </NavigationContainer>
    </GradientProvider>
  )
}