import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';



function HomeScreen({navigation}) {
    return (

      <SafeAreaView style={styles.container}>
          <TouchableOpacity style={styles.login_button} onPress={() => navigation.navigate("Recipe")}>
            <Text style={styles.loginText}>Search Recipes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.login_button} onPress={() => navigation.navigate("Recipe")}>
            <Text style={styles.loginText}>My Recipes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.login_button} onPress={() => navigation.navigate("Recipe")}>
            <Text style={styles.loginText}>My Diet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.login_button} onPress={() => navigation.navigate("Profile")}>
            <Text style={styles.loginText}>MyAccount</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Recipe")}>
            <Text style={styles.loginText}>Optional Backup</Text>
          </TouchableOpacity>
          
    
  

      </SafeAreaView>
    );
  };

  export default HomeScreen;

  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
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
    inputText:{
        height:50,
        color:"white"
    },
    loginText:{
        color:"black"
    }
        
});