import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import RecipeScreen from './screens/RecipeScreen';
import SignInScreen from './screens/SignInScreen';
import CameraScreen from './screens/CameraScreen';
const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Login" 
        component={SignInScreen} 
        options={{ 
          title: "Sign in",
        }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Recipe" component={RecipeScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
      
    
  );
}
export default App;
