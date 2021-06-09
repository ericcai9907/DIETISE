import React, { useState, useEffect, useContext }from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, 
    SafeAreaView, Image, FlatList, TextInput, TouchableHighlight } from 'react-native';
import { UserContext } from '../constants/UserContext';
import firestore from '@react-native-firebase/firestore';

function DietScreen({navigation}) {
    const [fileText, setFileText] = useState([]);
    const {userData, setUserData} = useContext(UserContext);
    const db = firestore();
    const getDiets = async () => {
        await db.collection('diets')
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
            setFileText(fileText => [...fileText, {'Diet': documentSnapshot.id, 'Details': documentSnapshot.data().description}]);
            });
        });
    }

    useEffect(() => {
        getDiets();
    },[])

    const AuthorInfo = ({item}) => (
        <View style={styles.item}>
            <Text style={styles.title}>{'Diet: ' + item.Diet}</Text>
            <Text style={styles.sectionDescription}>{'Description: ' + item.Details}</Text>
        </View>
    );


    const SeparatorComponent = () => {
        return <View style={styles.separatorLine}/>
    }

    const HeaderComponent = () => {
        return (
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionDescription}>Our List of Diet Restrictions!!</Text>
            </View>
        );
    }

    const FooterComponent = () => {
        return (
        <View style={styles.sectionContainer}>
            <Button title="Go back to Home"  onPress={() => {navigation.navigate("Home") }} />
        </View>
        );
    }

    const pressEvent = (id) => {
        userData.diet = id;
        if (id === 'None') {
          userData.diet = 'all';
        }
        setUserData(userData);
        db.collection('user_profile_example').doc(userData.name).update({diet: id});
    }
    const renderItem = ({ item }) => (
        <React.Fragment>
            <AuthorInfo item = {item}/>
            <Button title = "Choose as Diet" onPress={() => pressEvent(item.Diet)}/>
        </React.Fragment>
    );
    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                data={fileText}
                renderItem={renderItem}
                keyExtractor={(item,index) => String(index)}
                ItemSeparatorComponent={SeparatorComponent}
                ListHeaderComponent={HeaderComponent}
                ListFooterComponent={FooterComponent}
            />
        </SafeAreaView>
    );
}
export default DietScreen;

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