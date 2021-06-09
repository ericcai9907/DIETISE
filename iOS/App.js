/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 
 import MainStackNavigator from "./src/navigation/StackNavigator";
 
 
 
 const App = () => {
   
   return (
     <NavigationContainer>
       <MainStackNavigator/>
     </NavigationContainer>
     
   );
 }
 export default App;