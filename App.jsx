import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppNavigator />
    </SafeAreaView>
  );
};

export default App;
