import React, { useContext } from 'react';
import { UserContext } from '../constants/UserContext';
import { View, Text, StyleSheet } from 'react-native';

function ProfileScreen() {
    const { userData } = useContext(UserContext);
    return (
        <View style = {styles.container}>
            <Text style={styles.baseText}>{userData.name}</Text>
            <Text style={styles.baseText}>{userData.email}</Text>
            <Text style={styles.baseText}>Diet Restrictions: {userData.diet}</Text>
            <Text style={styles.baseText}>Number of Dish Searches: {userData.dish_searches}</Text>
        </View>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },
    baseText: {
        fontSize: 25,
    },
})