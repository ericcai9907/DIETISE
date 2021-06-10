import * as React from 'react';
import {useState,useEffect, useContext} from 'react';
import {Image, Component, SafeAreaView,Button, View, Text,StyleSheet,TextInput, FlatList,TouchableOpacity,TouchableHighlight } from 'react-native';

function RecipeScreen({navigation}) {
  return (
   <SafeAreaView style = {styles.container}>
    
     
        <TouchableOpacity style={styles.loginBtn}>
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
         <View>
      
      <Button
        title="Press me to go to next page."
        onPress={() => navigation.navigate('camera')}
      />
    </View>
    	</SafeAreaView>
  );
}
 export default RecipeScreen;
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   justifyContent: 'center',
   flexDirection: "column",
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
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
    marginBottom:10
  },
   image: {
   flex:1,
   position: 'absolute',
   top:0,
   left:0,
   right:0,
   bottom:0,
   opacity:0.4,
   justifyContent:'center'
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


