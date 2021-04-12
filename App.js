import React, { Component } from 'react'
import {useState} from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import { RNCamera } from 'react-native-camera'
import Icon from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView, TouchableHighlight, Image} from 'react-native';
import Camera from './Camera.js';


const App = () =>{
	const [img,setImg] = useState(null)
	function onPicture({uri}){
		setImg(uri);
	
	}
	function onBackToCamera(){
		setImg(null);
	}
	
	

    return (
    
      <SafeAreaView style={styles.container}>
      
      <Camera/>
      </SafeAreaView>
      

    )
  }



export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
   // flexDirection: 'column',
    //backgroundColor: 'black',
    //justifyContent: 'flex-end',
    //alignItems: 'center',
   // marginBottom: 20,
  }
})

