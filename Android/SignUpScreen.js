import React, { useState } from 'react';
import {StyleSheet, TextInput, SafeAreaView, TouchableOpacity, Text} from 'react-native';
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
function SignUpScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const signUp = async () => {
        try {
            await auth().createUserWithEmailAndPassword(email, password);
            createProfile();
            navigation.navigate('SignIn');
        } catch (err) {
            setError(err.message);
        }
    }

    const createProfile = () => {
        firestore().collection("user_profile_example").doc(username).set({
            name: username,
            diet: "None",
            email: email,
            dish_searches: 0
        })
        .then(() => {
           // console.log("Profile successfully created!");
        })
        .catch((error) => {
            console.error("Error creating profile: ", error);
        });
    }
    return (
        <SafeAreaView style={styles.container}>
            <TextInput style = {styles.inputText}
                autoCapitalize = 'none'
                placeholder = "email"
                onChangeText = {setEmail}
                value = {email}
            />
            <TextInput style = {styles.inputText}
                autoCapitalize = 'none'
                placeholder = 'username'
                onChangeText = {setUsername}
                value = {username}
            />
            <TextInput style = {styles.inputText}
                autoCapitalize = 'none'
                placeholder = 'password'
                onChangeText = {setPassword}
                value = {password}
                secureTextEntry
            />
            {
                error ? 
                    <Text style={{ color: 'red' }}>{error}</Text>
                    : null 
            }
            <TouchableOpacity onPress={() => signUp()}>
                <Text style={styles.text}>Sign up!</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.text}> Already have an account? Sign In!</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
    },
    text: {
        fontSize: 25
    },
    inputText: {
        fontSize: 25,
        height:50,
        color:"black"
    },
        
});
