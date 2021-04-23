import React from 'react';
import {useState} from 'react';
import { Component, SafeAreaView, TouchableHighlight, Image } from 'react-native';
import UseCamera from './Camera.js';

function onPicture({uri}) {
    setImg(uri);
}

function onBackToCamera() {
    setImg(null);
}
function CameraScreen() {
    const [img, setImg] = useState(null);
    return (
       <>
        <SafeAreaView style={{flex: 1}}>
         {img ? (
            <TouchableHighlight
            style={{flex: 1}}
            onPress={() => {
                onBackToCamera();
            }}>
            <Image source={{uri: img}} style={{flex: 1}} />
            </TouchableHighlight>
              
            ) : (
              <UseCamera onPicture={onPicture} />
            )}
          </SafeAreaView>
          
        </>
      );
}

export default CameraScreen;
