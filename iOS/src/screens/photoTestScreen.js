import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Button } from 'react-native';
import * as tf from '@tensorflow/tfjs';
import * as jpeg from 'jpeg-js';
import { bundleResourceIO, decodeJpeg } from '@tensorflow/tfjs-react-native';
import * as ImageManipulator from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system';

function photoTestScreen() {
    const [url, setUrl] = useState('file:///Users/matthewbilello/Desktop/MAFood121%202/images/baby_back_ribs/2432.jpg')
    const [displayText, setDisplayText] = useState('loading');
    const [model, setModel] = useState(null);
    
    async function parseURI(d){
        var reader = new FileReader();    /* https://developer.mozilla.org/en-US/docs/Web/API/FileReader */
        reader.readAsDataURL(d);          /* https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL */
        reader.onLoadend = function() {
            var base64data = reader.result;
            console.log(base64data);
            return base64data;
        }
    } 
      
     {/*} async function getDataBlob(url){
        var res = await fetch(url);
        var blob = await res.blob();
        var uri = await parseURI(blob);
        return uri;
      }*/}
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    const atob = (input = '') => {
        let str = input.replace(/=+$/, '');
        let output = '';

        if (str.length % 4 == 1) {
            throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
        }
        for (let bc = 0, bs = 0, buffer, i = 0;
            buffer = str.charAt(i++);

            ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
                bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
        ) {
            buffer = chars.indexOf(buffer);
	    }

	    return output;
    }
      function convertToBinaryArray(base64) {
        var binaryString = atob(base64);
        //console.log("Binary string: " + binaryString);
        var len = binaryString.length;
        var bytes = new Uint8Array(len);
      
        for(let i = 0; i < len; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        
        return bytes;
      } 
      
    async function loadModel() {
        await tf.ready();
        //await tf.setBackend('cpu');
        const modelJson = require('./assets/model.json');
        const modelWeights = [require('./assets/group1-shard1of4.bin'),
        require('./assets/group1-shard2of4.bin'), require('./assets/group1-shard3of4.bin'),
        require('./assets/group1-shard4of4.bin')];
        //const loaded = await tf.loadLayersModel('file:///Users/matthewbilello/Desktop/dietise_ios/src/assets/model/model.json');
        //var loaded = await tf.loadLayersModel(bundleResourceIO(modelJson,modelWeights));
        var loaded = await tf.loadGraphModel('file:///Users/matthewbilello/Desktop/TFJS_Models/Graph_Model/model.json');
        setModel(loaded);
        //loaded.summary();
        return loaded;
    }
    function imageToTensor(rawImageData){
        //Function to convert jpeg image to tensors
        const TO_UINT8ARRAY = true;
        const { width, height, data } = jpeg.decode(rawImageData, {useTArray: true});
        
        // Drop the alpha channel info for mobilenet
        //const buffer = new Uint8Array(width * height * 3);
        const buffer = new Uint8Array(width * height * 3);
        let offset = 0; // offset into original data
        for (let i = 0; i < buffer.length; i += 3) {
          buffer[i] = data[offset];
          buffer[i + 1] = data[offset + 1];
          buffer[i + 2] = data[offset + 2];
          offset += 4;
        }
        return tf.tensor4d(buffer, [1, height, width, 3]);
      }

      async function getPrediction(url) {
        setDisplayText("Loading Model");
        var my_model = await loadModel();
        setDisplayText("Getting Image Buffer");
        
        const fileUri = url;
        const imgB64 = await FileSystem.readAsStringAsync(fileUri, {
          encoding: FileSystem.EncodingType.Base64,
        });
        //const response = await fetch(fileUri, {}, {isBinary: true});
       // const dataBuffer = await response.arrayBuffer();
        //let imageTensor = imageToTensor(dataBuffer);
        const imgBuffer = tf.util.encodeString(imgB64, 'base64').buffer;
        const rawData = new Uint8Array(imgBuffer);
        setDisplayText("Getting Image Tensor");
        let imageTensor = decodeJpeg(rawData);
        imageTensor = imageTensor.resizeBilinear([224,224]).reshape([1,224,224,3]);
        // HERE var imageTensor = imageToTensor(rawData);
        imageTensor = tf.cast(imageTensor, 'float32');
        setDisplayText("Getting prediction");
        //imageTensor = imageTensor.expandDims();
        imageTensor.print(true);
        
        const prediction = await my_model.predict(imageTensor).arraySync();
        console.log(prediction[0]);
       
        //setDisplayText(JSON.stringify(prediction));
        console.log(Array.isArray(prediction[0]));
        const my_max = Math.max(...prediction[0]);
        console.log(my_max);
        console.log(prediction[0].indexOf(my_max));

        // below removes base64 tag from beginning of string
       
      }
    return (
        <View style={styles.container}>
            <Text>Test the machine learning model</Text>
            <TextInput 
            style={{ height: 40, width:"90%", borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setUrl(text)}
            value={url}
            />
            <Image style={styles.imageStyle} source={{uri: url}}></Image>
            <Button title="classify Image" onPress={() => getPrediction(url)}></Button>
            <Text>{displayText}</Text>
        </View>
    );
}

export default photoTestScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
    },
    imageStyle:{
        width: 200,
        height: 200
    }
});