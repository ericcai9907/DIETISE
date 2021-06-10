
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import firestore from "@react-native-firebase/firestore";
import './context.js';
import {useState,useEffect, useContext} from 'react';
import {Image, Component,TextInput, FlatList,TouchableHighlight } from 'react-native';



 export default function ExtraNullDetailScreen({navigation}) {
 

  
    
    const AuthorInfo = ({  recipe }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{'Result : ' + recipe}</Text>
  </View>
);



  const SeparatorComponent = () => {
  return <View style={styles.separatorLine} />
}

const HeaderComponent = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionDescription}>Our List of Recipe!!</Text>
    </View>
  );
};

const FooterComponent = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionDescription}>
        credit to the dietise group.
      </Text>
    </View>
  );
};
  
const renderItem = ({ item }) => (
            <React.Fragment>
    <AuthorInfo recipe={item} />
                </React.Fragment>
  );


  return (
  
     <SafeAreaView style={styles.container}>
      <FlatList
        data={["We either do not have recipes under that diet restriction or the recipe you searched for is not in our databse. Sorry about that"]}
        renderItem={renderItem}
        keyExtractor={item => item}
        ItemSeparatorComponent={SeparatorComponent}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={FooterComponent}
        
      />
      
    </SafeAreaView>
  );
}

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





