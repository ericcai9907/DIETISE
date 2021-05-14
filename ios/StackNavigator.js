import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen'
import RecipeScreen from '../screens/RecipeScreen';
import SignInScreen from '../screens/SignInScreen';
import CameraScreen from '../screens/CameraScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PictureScreen from '../screens/PictureScreen';
const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
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
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Picture" component={PictureScreen} />
        </Stack.Navigator>
    );
}

export default MainStackNavigator;