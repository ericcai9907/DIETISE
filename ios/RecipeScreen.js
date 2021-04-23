import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native';

function RecipeScreen({navigation}) {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.login_button} onPress={() => navigation.navigate("Camera")}>
          <Text style={styles.loginText}>Take Picture</Text>
        </TouchableOpacity>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Enter a recipe here" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
      </SafeAreaView>
      
    );
  };

  export default RecipeScreen;

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
    loginText:{
        color:"black"
    }
});