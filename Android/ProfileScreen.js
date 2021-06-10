import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { View, Text, StyleSheet } from 'react-native';

function ProfileScreen() {
    const { userData } = useContext(UserContext);
    return (
        <View style = {styles.container}>
            <Text style={styles.baseText}>User Name: {userData.name}</Text>
            <Text style={styles.baseText}>User's email: {userData.email}</Text>
            <Text style={styles.baseText}>Diet Restrictions: {global.config.diet_res}</Text>

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
