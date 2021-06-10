

import React from 'react';
import {ImageBackground,Image, Component, SafeAreaView,Button, View, Text,StyleSheet,TextInput, FlatList,TouchableOpacity,TouchableHighlight } from 'react-native';

import './context.js';
import image1 from './strawberry.jpg';
function insertOrPictureScreen({navigation}) {
  const [recipe, setRecipe] = React.useState('');
global.config.collection = recipe;

  return (
      <SafeAreaView style = {styles.container}>
              <ImageBackground source={image1} style={styles.image}>
                              <View style = {{justifyContent : "center"}, {alignItems : 'center'}}> 
<Text style={styles.logo}> Recipe here</Text>
      </View>

                <View style = {{justifyContent : "center"}, {alignItems : 'center'}}> 
        <View style={styles.inputView} >
      <TextInput
      style={styles.inputText}
       PlaceholderTextColor="#555555"
        placeholder="recipe here"
        value={recipe}
        onChangeText={setRecipe}
      />


      </View>
      </View>
         <View style = {{justifyContent : "center"}, {alignItems : 'center'}}>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('recipeDisplay')}>
          <Text style={styles.loginText}>take me to recipe</Text>
        </TouchableOpacity>
               </View>
         <View style = {{justifyContent : "center"}, {alignItems : 'center'}}>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Album')}>
          <Text style={styles.loginText}>Use Local Album</Text>
        </TouchableOpacity>
               </View>
          </ImageBackground>
       	</SafeAreaView>
  );
}

 export default insertOrPictureScreen;
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
   
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#ffffff",
    marginBottom:40
  },
  inputView:{
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
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10,
  

  },
   image: {
   flex:1,
  resizeMode: 'stretch',
   justifyContent:'center',
  },
  loginText:{
    color:"black"
  },
    baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
   item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  separatorLine: {
    height: 1,
    backgroundColor: 'plum',
    paddingTop: 2,
  },
   sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  footer: {
    paddingBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  
  
});


