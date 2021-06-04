import React, {useState} from 'react';
import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native';

function RecipeScreen({navigation}) {
    const [dish, setDish] = useState('');
    const [error, setError] = useState('');
    
    const searchRecipe = () => {
      let temp_dish = dish;
      if (temp_dish.length == 0) return;
      temp_dish = temp_dish.toLowerCase().replaceAll(' ', '_');
      navigation.navigate('RecipeDisplay', {search_dish: temp_dish});
    }
    
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../assets/pasta.jpg')} style={styles.image} imageStyle={{opacity: 0.6}}>
        <View style = {{justifyContent : "center"}, {alignItems : 'center'}}>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Enter a dish here" 
            placeholderTextColor="#fff"
            onChangeText={setDish}
            value = {dish} />
        </View>
        </View>
        <View style = {{justifyContent : "center"}, {alignItems : 'center'}}>
        <Button title = "Get me the recipe" onPress={() => searchRecipe()}/>
        </View>
        </ImageBackground>
      </SafeAreaView>
      
    );
  };

  export default RecipeScreen;
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
       
    },
    logo_title: {
        
        fontWeight:"bold",
        fontSize:60,
        color:"#fb5b5a",
        marginBottom: 120,
        textShadowColor:'black',
        textShadowOffset:{width: 10, height: 10},
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
    image: {
      flex:1,
      resizeMode: 'stretch',
      justifyContent:'center',
  },
    forgot:{
        color:"white",
        fontSize:11
    },
    loginText:{
        color:"white"
    }
        
});
  {/*const styles = StyleSheet.create({
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
});*/}