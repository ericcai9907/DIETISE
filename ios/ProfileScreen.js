import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import db from '../constants/firebase.config';



function ProfileScreen() {
    const [userInfo, setUserInfo] = useState([]);
    const getUser = async () => {
        const profileRef = db.collection('user_profile_example');
        const snapShot = await profileRef.get();
        snapShot.docs.forEach(item => {
            setUserInfo([...userInfo,item.data().email])
        })
        
    }
    useEffect( () => {
        getUser();
    },[])
    return (
        <View style = {styles.container}>
            <Text style={styles.baseText}>{userInfo}</Text>
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
        fontSize: 30,
    },
})