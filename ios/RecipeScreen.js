import React, {useState} from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native';

function RecipeScreen({navigation}) {
    const [dish, setDish] = useState('');
    const [error, setError] = useState('');
    
    const searchRecipe = () => {
      let temp_dish = dish;
      if (temp_dish.length == 0) return;
      temp_dish = temp_dish.toLowerCase().replaceAll(' ', '_');
      console.log(temp_dish);
      navigation.navigate('RecipeDisplay', {search_dish: temp_dish});
    }
    
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.login_button} onPress={() => navigation.navigate("Camera")}>
          <Text style={styles.loginText}>Use Picture</Text>
        </TouchableOpacity>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Enter a dish here" 
            placeholderTextColor="#fff"
            onChangeText={setDish}
            value = {dish} />
        </View>
        <Button title = "Get me the recipe" onPress={() => searchRecipe()}/>
      </SafeAreaView>
      
    );
  };

  export default RecipeScreen;

  const styles = StyleSheet.create({
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
});