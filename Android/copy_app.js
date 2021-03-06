import * as React from 'react';
import {useState,useEffect, useContext} from 'react';
import {Image, Component, SafeAreaView,Button, View, Text,StyleSheet,TextInput, FlatList,TouchableOpacity,TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CameraScreen from './Camera.js';
import Tflite from 'tflite-react-native';
import './context.js';

let tflite = new Tflite();
let imagepath = 'file://sdcard/Download/3_2.jpg';
tflite.loadModel({
  model: 'food-id-red23lite.tflite',// required
  labels: 'dishforandroid.txt',  // required
  numThreads: 1,                              // defaults to 1  
},
(err, res) => {
  if(err)
    console.log(err);
  else
    console.log(res);
        console.log(imagepath);
});


tflite.runModelOnImage({
  path: imagepath,  // required
  numResults: 5,    // defaults to 5
  threshold: 0.1   // defaults to 0.1
},
(err, res) => {
  if(err)
    console.log(err);
  else
    console.log(res[0].label);
});



//import firebase from "firebase/app";

//import "firebase/analytics";


//import "firebase/auth";
//import "firebase/firestore";

import firestore from "@react-native-firebase/firestore";

const CurrentUser = "kevin Gao";
const AuthContext = React.createContext();

function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
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

function HomeScreen({navigation}) {
  const { signOut } = React.useContext(AuthContext);
const usersCollection = firestore().collection('Users');



  return (
    <SafeAreaView style = {styles.container}>   
         <View>
    </View>
      
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('text')}>
          <Text style={styles.loginText}>Search Recipes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('profile')}>
          <Text style={styles.loginText}>My Recipes</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Picture')}>
          <Text style={styles.loginText}>Display the picture</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>My Diet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>MyAccount</Text>
        </TouchableOpacity>
   <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('recipleDisplay')}>
          <Text style={styles.loginText}>Show picture recipe</Text>
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

function SignInScreen({navigation}) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
      <SafeAreaView style = {styles.container}>
<Text style={styles.logo}>Dietise</Text>
        <View style={styles.inputView} >
    
      <TextInput
      style={styles.inputText}
       PlaceholderTextColor="#003f5c"
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      </View>
              <View style={styles.inputView} >
      <TextInput
       style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="#003f5c"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
              </View>
              
               <TouchableOpacity  onPress={() => navigation.navigate('Forget')} >
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => signIn({ username, password })}>
          <Text style={styles.loginText}>LOGIN</Text>
          
        </TouchableOpacity>
        
        
        <TouchableOpacity  onPress={() => navigation.navigate('First')}>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
        
      <Button title="Sign in" onPress={() => signIn({ username, password })} />
       	</SafeAreaView>
  );
}

function insertOrPictureScreen({navigation}) {
  const [recipe, setRecipe] = React.useState('');
global.config.collection = recipe;

  return (
      <SafeAreaView style = {styles.container}>
<Text style={styles.logo}>Please input your recipe here</Text>
        <View style={styles.inputView} >
      <TextInput
      style={styles.inputText}
       PlaceholderTextColor="#003f5c"
        placeholder="recipe here"
        value={recipe}
        onChangeText={setRecipe}
      />


      </View>
      <Button title="take me to recipe" onPress={() => navigation.navigate('recipleDisplay')} />
         <TouchableOpacity  onPress={() => navigation.navigate('camera')} >
          <Text style={styles.forgot}>Go to Camera</Text>
        </TouchableOpacity>
      
       	</SafeAreaView>
  );
}
function PictureScreen({navigation}) {
 


  return (
              <React.Fragment>
    <Image source={require('./selfie.png')} style = {{height: 700, width: 500, resizeMode : 'stretch',}} />
    
          <Button title="retake the picture"  onPress={() => navigation.navigate('camera')} />
              </React.Fragment>
  );
}



function ProfileScreen({navigation}) {

 
  const [filetext, setNewArray] = useState([]);
  const config = {
	apiKey: "AIzaSyB-FhJXYwoBRZ8ys_MRtrLi8nAp1S77Ppo",
	projectId: "recipes-a6ca1",
	storageBucket: "recipes-a6ca1.appspot.com",
	databaseURL:  "https://recipes-a6ca1-default-rtdb.firebaseio.com"
	 
};

 

   const getUser = async () => {
   global.config.userName = CurrentUser;
   	const recipeRef = firestore().collection('user_profile_example').doc(global.config.userName).collection('recipes');
	
	const snapshot = await recipeRef.get();
	snapshot.forEach(doc => { doc.id, '=>', doc.data();
	
 	setNewArray(filetext => [...filetext, doc.id ]       )    ;

	console.log("\n");
       console.log(filetext);
        })
        
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
    
    <Button title="press me to show you the recipe"  onPress={() => {navigation.navigate('recipeDetailsFavorite');global.config.title = item }} />
                </React.Fragment>
  );


  return (
  
     <SafeAreaView style={styles.container}>
      <FlatList
        data={filetext}
        renderItem={renderItem}
        keyExtractor={item => item}
        ItemSeparatorComponent={SeparatorComponent}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={FooterComponent}
        
      />
       <Button title="press me"  onPress={() => console.log(global.config.id)} />
    </SafeAreaView>
  );
}

function recipeDetailsScreenfavorite({navigation}) {
  const [filetext, setNewArray] = useState([]);
  const config = {
	apiKey: "AIzaSyB-FhJXYwoBRZ8ys_MRtrLi8nAp1S77Ppo",
	projectId: "recipes-a6ca1",
	storageBucket: "recipes-a6ca1.appspot.com",
	databaseURL:  "https://recipes-a6ca1-default-rtdb.firebaseio.com"
	 
};



   const getUser = async () => {
	const recipeRef = firestore().collection('user_profile_example').doc(global.config.userName).collection('recipes').doc(global.config.title);
	const snapshot = await recipeRef.get();
	setNewArray(filetext => [...filetext, snapshot.data().ingredients]);
	 setNewArray(filetext => [...filetext, snapshot.data().instructions]);
        
    }
    useEffect( () => {
        getUser();
    },[])
     const AuthorInfo = ({ ingred }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{'Recipe Details : ' + ingred}</Text>

  </View>
);

  const renderItem = ({ item }) => (
     <React.Fragment>
    <AuthorInfo ingred={item}  />
    
                </React.Fragment>

  );

  const SeparatorComponent = () => {
  return <View style={styles.separatorLine} />
}


const HeaderComponent = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionDescription}>Our List of Recipe details!!</Text>
    </View>
  );
};

const FooterComponent = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionDescription}>
        credit to dietise group
      </Text>
    </View>
  );
}

  return (
      <SafeAreaView style = {styles.container}>
   <FlatList
        data={filetext}
        renderItem={renderItem}
        keyExtractor={item => item}
        ItemSeparatorComponent={SeparatorComponent}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={FooterComponent}
        
      />
           
       	</SafeAreaView>
  );
}


export function ProfileScreen2({navigation}) {

 
  const [filetext, setNewArray] = useState([]);
  const config = {
	apiKey: "AIzaSyB-FhJXYwoBRZ8ys_MRtrLi8nAp1S77Ppo",
	projectId: "recipes-a6ca1",
	storageBucket: "recipes-a6ca1.appspot.com",
	databaseURL:  "https://recipes-a6ca1-default-rtdb.firebaseio.com"
	 
};

  

   const getUser = async () => {

	const recipeRef = firestore().collection(global.config.collection);
	const snapshot = await recipeRef.get();
	snapshot.forEach(doc => { doc.id, '=>', doc.data();
	
 	setNewArray(filetext => [...filetext, {'title' :doc.data().title , 'ID': doc.id } ]       )    ;

	console.log("\n");
       console.log(filetext);
        })
        
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
    <AuthorInfo recipe={item.title} />
    
    <Button title="press me to show you the recipe"  onPress={() => {navigation.navigate('recipeDetails');console.log(item.title);global.config.id = item.ID,global.config.title = item.title }} />
                </React.Fragment>
  );


  return (
  
     <SafeAreaView style={styles.container}>
      <FlatList
        data={filetext}
        renderItem={renderItem}
        keyExtractor={item => item}
        ItemSeparatorComponent={SeparatorComponent}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={FooterComponent}
        
      />
       <Button title="press me"  onPress={() => console.log(global.config.id)} />
    </SafeAreaView>
  );
}
function recipeDetailsScreen({navigation}) {
  const [filetext, setNewArray] = useState([]);
  const config = {
	apiKey: "AIzaSyB-FhJXYwoBRZ8ys_MRtrLi8nAp1S77Ppo",
	projectId: "recipes-a6ca1",
	storageBucket: "recipes-a6ca1.appspot.com",
	databaseURL:  "https://recipes-a6ca1-default-rtdb.firebaseio.com"
	 
};

  

   const getUser = async () => {
	const recipeRef = firestore().collection(global.config.collection).doc(global.config.id);
	const snapshot = await recipeRef.get();
	setNewArray(filetext => [...filetext, snapshot.data().ingredients]);
	 setNewArray(filetext => [...filetext, snapshot.data().instructions]);
        
    }
    useEffect( () => {
        getUser();
    },[])
     const AuthorInfo = ({ ingred }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{'Recipe Details : ' + ingred}</Text>

  </View>
);

  const renderItem = ({ item }) => (
     <React.Fragment>
    <AuthorInfo ingred={item}  />
    
                </React.Fragment>

  );

  const SeparatorComponent = () => {
  return <View style={styles.separatorLine} />
}

 const pushData = async () => {
	const recipeRef = firestore().collection('user_profile_example').doc(global.config.userName).collection('recipes').doc(global.config.title);
	const snapshot = await recipeRef.set({'ingredients' : filetext[0], 'instructions' : filetext[1]});
	
        
    }
const HeaderComponent = () => {
  return (
    <View style={styles.sectionContainer}>
     <Button title="press me to save a reciple for you"  onPress={() => {console.log(global.config.title); global.config.userName = CurrentUser; console.log(global.config.userName);console.log(filetext[0]);pushData() }} />
      <Text style={styles.sectionDescription}>Our List of Recipe details!!</Text>
    </View>
  );
};

const FooterComponent = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionDescription}>
        credit to dietise group
      </Text>
    </View>
  );
}

  return (
      <SafeAreaView style = {styles.container}>
   <FlatList
        data={filetext}
        renderItem={renderItem}
        keyExtractor={item => item}
        ItemSeparatorComponent={SeparatorComponent}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={FooterComponent}
        
      />
           
       	</SafeAreaView>
  );
}

function FirstSignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
      <SafeAreaView style = {styles.container}>
<Text style={styles.logo}>First time log in</Text>
        <View style={styles.inputView} >
    
      <TextInput
      style={styles.inputText}
       PlaceholderTextColor="#003f5c"
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      </View>
              <View style={styles.inputView} >
      <TextInput
       style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="#003f5c"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
              </View>
              
               <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => signIn({ username, password })}>
          <Text style={styles.loginText}>LOGIN</Text>
          
        </TouchableOpacity>
        
        
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
        
      <Button title="Sign in" onPress={() => signIn({ username, password })} />
       	</SafeAreaView>
  );
}
function ForgetSignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
      <SafeAreaView style = {styles.container}>
<Text style={styles.logo}>You can reset your password here</Text>
        <View style={styles.inputView} >
    
      <TextInput
      style={styles.inputText}
       PlaceholderTextColor="#003f5c"
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      </View>
              <View style={styles.inputView} >
      <TextInput
       style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="#003f5c"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
              </View>
              
               <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => signIn({ username, password })}>
          <Text style={styles.loginText}>LOGIN</Text>
          
        </TouchableOpacity>
        
        
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
        
      <Button title="Sign in" onPress={() => signIn({ username, password })} />
       	</SafeAreaView>
  );
}

const Stack = createStackNavigator();

 export const config = {
	apiKey: "AIzaSyB-FhJXYwoBRZ8ys_MRtrLi8nAp1S77Ppo",
	projectId: "recipes-a6ca1",
	storageBucket: "recipes-a6ca1.appspot.com",
	databaseURL: "https://recipes-a6ca1-default-rtdb.firebaseio.com"
	 
};
export default function App({ navigation }) {








  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken=null;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
         userToken = await SecureStore.getItemAsync('userToken');
         console.log(userToken);
        //userToken = Base64.encode('userToken');
        
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            // No token found, user isn't signed in
           <React.Fragment>
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{
                title: 'Sign in',
                // When logging out, a pop animation feels intuitive
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
            
           <Stack.Screen name="First" component={FirstSignInScreen} />
           <Stack.Screen name="Forget" component={ForgetSignInScreen} />

            </React.Fragment>
          ) : (
            // User is signed in
            <React.Fragment>
            <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Recipe" component={RecipeScreen} />
        <Stack.Screen name="camera" component={CameraScreen} />
         <Stack.Screen name="profile" component={ProfileScreen} />
          <Stack.Screen name="Picture" component={PictureScreen} />
           <Stack.Screen name="recipeDetails" component={recipeDetailsScreen} />
           <Stack.Screen name="text" component={insertOrPictureScreen} />
            <Stack.Screen name="recipleDisplay" component={ProfileScreen2} />
            <Stack.Screen name="recipeDetailsFavorite" component={recipeDetailsScreenfavorite} />
          </React.Fragment>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
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



