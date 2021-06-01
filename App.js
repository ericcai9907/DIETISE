import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStackNavigator from "./StackNavigator.js";



const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator/>
    </NavigationContainer>
    
  );
}
console.disableYellowBox = true;
export default App;


