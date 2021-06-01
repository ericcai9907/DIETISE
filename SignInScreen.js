import React from 'react';
import { useState, useContext } from 'react';
import {
    SafeAreaView,
    TextInput,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import image1 from './eggs.jpg';
import { UserContext } from './UserContext';
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

const config = {
	apiKey: "AIzaSyB-FhJXYwoBRZ8ys_MRtrLi8nAp1S77Ppo",
	projectId: "recipes-a6ca1",
	storageBucket: "recipes-a6ca1.appspot.com",
	databaseURL:  "https://recipes-a6ca1-default-rtdb.firebaseio.com"
	 
};


function SignInScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { setUserData } = useContext(UserContext);
   // const db = firebase.firestore();
    const signIn = async () => {
        try {
            await auth().signInWithEmailAndPassword(email, password);
            getUser();
            navigation.navigate('Home');
        } catch (err) {
            setError(err.message);
        }
    }

    const getUser = async () => {
        const querySnapshot = await firestore().collection('user_profile_example').where("email", "==", email).get();
        const profDocs = querySnapshot.docs;
      //  console.log(profDocs[0].data());
        
        //set hte userName to be the email address
        global.config.userName = profDocs[0].data().name;
         //       console.log(global.config.userName);
        setUserData(profDocs[0].data());
       // console.log(JSON.stringify(snapshot.data(), null, 2));
    }
    return (
        <SafeAreaView style={styles.container}>
                           <ImageBackground source={image1} style={styles.image}>
                 <View style = {{justifyContent : "center"}, {alignItems : 'center'}}>
            <Text style={styles.logo_title}>Dietise</Text>
                    </View>
                 <View style = {{justifyContent : "center"}, {alignItems : 'center'}}>     
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
                                </View>
                <View style = {{justifyContent : "center"}, {alignItems : 'center'}}>     
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
                        </View>
            {
                error ?
                    <Text style={{ color: 'red'}}>{error}</Text>
                    : null
            }
                            <View style = {{justifyContent : "center"}, {alignItems : 'center'}}>     
            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password</Text>
            </TouchableOpacity>
            
                        </View>
                            <View style = {{justifyContent : "center"}, {alignItems : 'center'}}>     
            <TouchableOpacity 
                style={styles.login_button}
                onPress={() => signIn()} >
                    <Text>Login</Text>
            </TouchableOpacity>
                        </View>
            
                            <View style = {{justifyContent : "center"}, {alignItems : 'center'}}>     
            <TouchableOpacity
                onPress={() => navigation.navigate("SignUp")}>
                <Text style={styles.loginText}>Sign-Up</Text>
            </TouchableOpacity>
                        </View>
            
                             </ImageBackground>
        </SafeAreaView>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
       
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
    }
        
});
