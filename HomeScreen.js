import React from 'react';
import { ImageBackground, View, Text, Button, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

import image1 from './strawberry.jpg';

function HomeScreen({navigation}) {

  return (
    <SafeAreaView style = {styles.container}>   
        <ImageBackground source={image1} style={styles.image}>
     
      <View style = {{justifyContent : "center"}, {alignItems : 'center'}}>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('SearchDish')}>
          <Text style={styles.loginText}>Search Recipes</Text>
        </TouchableOpacity>
        
        </View>
              <View style = {{justifyContent : "center"}, {alignItems : 'center'}}>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('MyRecipe')}>
          <Text style={styles.loginText}>My Recipes</Text>
        </TouchableOpacity>
               </View>
                             <View style = {{justifyContent : "center"}, {alignItems : 'center'}}>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Diet')}>
          <Text style={styles.loginText}>My Diet</Text>
        </TouchableOpacity>
                       </View>
                      <View style = {{justifyContent : "center"}, {alignItems : 'center'}}>
        <TouchableOpacity style={styles.loginBtn}  onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.loginText}>MyAccount</Text>
        </TouchableOpacity>
                       </View>
               
   
    </ImageBackground>
    	</SafeAreaView>
  );
}

 export default HomeScreen;
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
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



