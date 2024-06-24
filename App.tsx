import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './src/navigators';
import './src/api';

function App() {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
}

export default App;
