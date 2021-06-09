import React, { useContext } from 'react';
import { UserContext } from '../constants/UserContext';
import { View, SafeAreaView, Text, ImageBackground, Button, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

function ProfileScreen({navigation}) {
    const { userData } = useContext(UserContext);
    let my_diet = userData.diet;
    if (my_diet === "all") {
        my_diet = "None";
    }
    const logOut = async () => {
        await auth()
            .signOut()
        navigation.navigate("SignIn");
    } 
    return (
        <SafeAreaView style = {styles.container}>
            <ImageBackground source={require('../assets/pancake.jpg')} style={styles.image} imageStyle={{opacity: 0.3}}>
            <View style = {{justifyContent : "center"}, {alignItems : 'center'}}>
            <Text style={styles.baseText}>Username: {userData.name}</Text>
            </View>
            <View style = {{justifyContent : "center"}, {alignItems : 'center'}}>
            <Text style={styles.baseText}>Email: {userData.email}</Text>
            </View>
            <View style = {{justifyContent : "center"}, {alignItems : 'center'}}>
            <Text style={styles.baseText}>Diet Restrictions: {my_diet}</Text>
            </View>
            <View style = {{justifyContent : "center"}, {alignItems : 'center'}}>
            <Button title="Logout" onPress={() => logOut()}/>
            </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default ProfileScreen;

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
    },
    baseText: {
        fontSize: 25,
        textShadowColor:'black',
        textShadowOffset:{width: 10, height: 10},
    },
        
});
{/*const styles = StyleSheet.create({
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
})*/}