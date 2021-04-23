import React from 'react';
import {useState} from 'react';
import {
    Component,
    SafeAreaView,
    ImageBackground,
    TextInput,
    View,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity,
    Touchable
} from 'react-native';

function SignInScreen({navigation}) {
    
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.logo_title}>Dietise</Text>
            <View style={styles.inputView}>
                <TextInput 
                    style={styles.inputText}
                    placeholder="Username"
                    placeholderTextColor="#fff"
                    onChangeText={text => this.setState({name:text})}
                />
            </View>
            
            <View style={styles.inputView}>
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Password"
                    placeholderTextColor="#fff"
                    onChangeText={text => this.setState({password:text})}
                />
            </View>
            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.login_button}
                onPress={() => navigation.navigate("Home")} >
                    <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.loginText}>Signup</Text>
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