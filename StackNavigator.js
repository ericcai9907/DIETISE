import React, { useState, useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen'
import RecipeScreen from './RecipeScreen';
import SignInScreen from './SignInScreen';
import CameraScreen from './Camera.js';
import FoodProfileScreen from './FoodProfileScreen';
import FoodProfileScreen2 from './FoodProfileScreen2';
import PictureScreen from './PictureScreen';
import SignUpScreen from './SignUpScreen';
import recipeDetailsScreenfavorite from './recipeDetailsScreenfavorite';
import insertOrPictureScreen from './insertOrPictureScreen';
import recipeDetailsScreen from './recipeDetailsScreen';
import { UserContext } from './UserContext';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    const [userData, setUserData] = useState(null);
    const value = useMemo(() => ({userData, setUserData}), [userData, setUserData]);
    return (
        <UserContext.Provider value = {value}>
            <Stack.Navigator>
                <Stack.Screen 
                name="SignIn" 
                component={SignInScreen} 
                options={{ 
                title: "SignIn",
                }}
                />
                
         <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Recipe" component={RecipeScreen} />
        <Stack.Screen name="camera" component={CameraScreen} />
         <Stack.Screen name="profile" component={FoodProfileScreen} />
          <Stack.Screen name="Picture" component={PictureScreen} />
           <Stack.Screen name="recipeDetails" component={recipeDetailsScreen} />
           <Stack.Screen name="text" component={insertOrPictureScreen} />
            <Stack.Screen name="recipeDisplay" component={FoodProfileScreen2} />
            <Stack.Screen name="recipeDetailsFavorite" component={recipeDetailsScreenfavorite} />
                
                
                
                
            </Stack.Navigator>
        </UserContext.Provider>
    );
}

export default MainStackNavigator;
