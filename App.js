import * as React from 'react';
import {useState} from 'react';
import {Component, SafeAreaView,Button, View, Text,StyleSheet,TextInput, TouchableOpacity,TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Camera from './Camera.js';
function HomeScreen({ navigation }) {
 /*
 state={
    name:"",
    password:""
  }
  */
  return (
  
      <SafeAreaView style = {styles.container}>
     
        <Text style={styles.logo}>Dietise</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="UserName" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({name:text})}/>
        </View>
        
         <View>
      
      <Button
        title="Press me to go to next page."
        onPress={() => navigation.navigate('Details')}
      />
    </View>
      
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>


    	</SafeAreaView>

  );
}

function DetailsScreen({ navigation }) {
  return (
   <SafeAreaView style = {styles.container}>
     
       
        
         <View>
      
     
    </View>
      
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Search Recipes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>My Recipes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>My Diet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>MyAccount</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Optional Backup</Text>
        </TouchableOpacity>

    <View>
      
      <Button
        title="Press me to go to next page."
        onPress={() => navigation.navigate('Recipe')}
      />
    </View>

    	</SafeAreaView>
  );
}

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
          <Camera onPicture={onPicture} />
        )}
      </SafeAreaView>
      
    </>
  );
}
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Recipe" component={RecipeScreen} />
        <Stack.Screen name="camera" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
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
  }
  
});

