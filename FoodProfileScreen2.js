
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import firestore from "@react-native-firebase/firestore";
import './context.js';
import {useState,useEffect, useContext} from 'react';
import {ImageBackground,Image, Component,TextInput, FlatList,TouchableHighlight } from 'react-native';
import image1 from './strawberry.jpg';
 export default function FoodProfileScreen2({navigation}) {

 
  const [filetext, setNewArray] = useState([]);
  const config = {
	apiKey: "AIzaSyB-FhJXYwoBRZ8ys_MRtrLi8nAp1S77Ppo",
	projectId: "recipes-a6ca1",
	storageBucket: "recipes-a6ca1.appspot.com",
	databaseURL:  "https://recipes-a6ca1-default-rtdb.firebaseio.com"
	 
};

  

   const getUser = async () => {

	//const recipeRef = firestore().collection(global.config.collection);
	global.config.collection = global.config.collection.toLowerCase().replace(/\s/g,'_');

	const recipeRef = firestore().collection("recipes").doc(global.config.collection).collection("all");
	
	const snapshot = await recipeRef.get();
	if(snapshot._docs.length===0){

		navigation.navigate('Extra');

	}
	else{
	snapshot.forEach(doc => { doc.id, '=>', doc.data();
	
 	setNewArray(filetext => [...filetext, {'title' :doc.data().title , 'ID': doc.id } ]       )    ;

	
        })
        
        
        }
    }
    useEffect( () => {
        getUser();
    },[])
    
    const AuthorInfo = ({  recipe }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{'Recipe : ' + recipe}</Text>
  </View>
);



  const SeparatorComponent = () => {
  return <View style={styles.separatorLine} />
}

const HeaderComponent = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionDescription}>Our List of Recipe!!</Text>
      <Button title="press me to go to Diet specific recipes"  onPress={() => {navigation.navigate('FilterRecipe'); }} />
    </View>
  );
};

const FooterComponent = () => {
  return (
    <View style={styles.sectionContainer}>
          <Button title="Go back to Home"  onPress={() => {navigation.navigate("Home") }} />
    </View>
  );
};
  
const renderItem = ({ item }) => (
            <React.Fragment>
    <AuthorInfo recipe={item.title} />
    
    <Button title="press me to show you the recipe"  onPress={() => {navigation.navigate('recipeDetails');global.config.id = item.ID,global.config.title = item.title }} />
                </React.Fragment>
  );


  return (
  
     <SafeAreaView style={styles.container}>
                   <ImageBackground source={image1} style={styles.image} imageStyle = {{   opacity:0.4,}} >
      <FlatList
        data={filetext}
        renderItem={renderItem}
        keyExtractor={item => item}
        ItemSeparatorComponent={SeparatorComponent}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={FooterComponent}
        
      />

                 </ImageBackground>
    </SafeAreaView>
  );
}

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
    marginBottom:10
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

