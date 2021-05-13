import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import db from '../constants/firebase.config';



function ProfileScreen() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [diet, setDiet] = useState("");
    const [searches, setSearches] = useState(null);
    const getUser = async () => {
        const profileRef = await db.collection('user_profile_example').doc('john_doe').get();
        const userEmail = profileRef.data().email;
        const userName = profileRef.data().name;
        const userDiet = profileRef.data().diet;
        const userDishSearches = profileRef.data().dish_searches;
        setName(userName);
        setEmail(userEmail);
        setDiet(userDiet);
        setSearches(userDishSearches);
    }
    useEffect(() => {
        getUser();
    },[])
    return (
        <View style = {styles.container}>
            <Text style={styles.baseText}>{name}</Text>
            <Text style={styles.baseText}>{email}</Text>
            <Text style={styles.baseText}>Diet Restrictions: {diet}</Text>
            <Text style={styles.baseText}>Number of Dish Searches: {searches}</Text>
        </View>
    );
}
        {/*profileRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        
        })*/}
    

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