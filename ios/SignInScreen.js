// @refresh reset
import React from 'react';
import { useState, useContext } from 'react';
import {
    SafeAreaView,
    TextInput,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import { UserContext } from '../constants/UserContext';
import firebase from '../constants/firebase.config';

function SignInScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { setUserData } = useContext(UserContext);
    const db = firebase.firestore();
    const signIn = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            getUser();
            navigation.navigate('Home');
        } catch (err) {
            setError(err.message);
        }
    }

    const getUser = async () => {
        const querySnapshot = await db.collection('user_profile_example').where("email", "==", email).get();
        const profDocs = querySnapshot.docs;
        console.log(profDocs[0].data());
        setUserData(profDocs[0].data());
       // console.log(JSON.stringify(snapshot.data(), null, 2));
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.logo_title}>Dietise</Text>
            <View style={styles.inputView}>
                <TextInput 
                    style={styles.inputText}
                    autoCapitalize = 'none'
                    placeholder="Email"
                    placeholderTextColor="#fff"
                    onChangeText = {setEmail}
                    value = {email}
                />
            </View>
            
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    autoCapitalize = 'none'
                    placeholder="Password"
                    placeholderTextColor="#fff"
                    onChangeText = {setPassword}
                    value = {password}
                    secureTextEntry
                />
            </View>
            {
                error ?
                    <Text style={{ color: 'red'}}>{error}</Text>
                    : null
            }
            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.login_button}
                onPress={() => signIn()} >
                    <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("SignUp")}>
                <Text style={styles.loginText}>Sign-Up</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
    },
    logo_title: {
        
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom: 120
    },
    login_button: {
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    inputView: {
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20 
    },
    inputText:{
        height:50,
        color:"white"
    },
    forgot:{
        color:"black",
        fontSize:11
    },
    loginText:{
        color:"black"
    }
        
});