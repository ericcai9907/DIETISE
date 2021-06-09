import React, { useState } from 'react';
import {StyleSheet, View, TextInput, ImageBackground, SafeAreaView, TouchableOpacity, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

function SignUpScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const db = firestore();
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
        db.collection("user_profile_example").doc(username).set({
            name: username,
            diet: "all",
            email: email,
        })
        .then(() => {
            console.log("Profile successfully created!");
        })
        .catch((error) => {
            console.error("Error creating profile: ", error);
        });
    }
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source ={require('../assets/pancake.jpg')} style={styles.image} imageStyle={{opacity: 0.4}}>
            <View style = {{justifyContent : "center"}, {alignItems : 'center'}}>
            <TextInput style = {styles.inputText}
                autoCapitalize = 'none'
                placeholder = "email"
                onChangeText = {setEmail}
                value = {email}
                placeholderTextColor="#808080"
            />
            </View>
            <View style = {{justifyContent : "center"}, {alignItems : 'center'}}>
            <TextInput style = {styles.inputText}
                autoCapitalize = 'none'
                placeholder = 'username'
                onChangeText = {setUsername}
                value = {username}
                placeholderTextColor="#808080"
            />
            </View>
            <View style = {{justifyContent : "center"}, {alignItems : 'center'}}>
            <TextInput style = {styles.inputText}
                autoCapitalize = 'none'
                placeholder = 'password'
                onChangeText = {setPassword}
                value = {password}
                secureTextEntry
                placeholderTextColor="#808080"
            />
            </View>
            {
                error ? 
                    <Text style={{ color: 'red' }}>{error}</Text>
                    : null 
            }
            <View style = {{justifyContent : "center"}, {alignItems : 'center'}}>
            <TouchableOpacity onPress={() => signUp()}>
                <Text style={styles.text}>Sign up!</Text>
            </TouchableOpacity>
            </View>
            <View style = {{justifyContent : "center"}, {alignItems : 'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.text}> Already have an account? Sign In!</Text>
            </TouchableOpacity>
            </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
       
    },
    logo_title: {
        
        fontWeight:"bold",
        fontSize:60,
        color:"#fb5b5a",
        marginBottom: 120,
        textShadowColor:'black',
        textShadowOffset:{width: 10, height: 10},
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
        fontWeight: "bold",
        fontSize: 20,
        color:"black"
    },
    image: {
        flex:1,
        resizeMode: 'stretch',
        justifyContent:'center',
  },
    forgot:{
        color:"white",
        fontSize:11
    },
    loginText:{
        color:"white"
    },
    text: {
        fontSize: 25
    }
        
});
{/*const styles = StyleSheet.create({
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
        
});*/}