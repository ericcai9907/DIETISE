import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../constants/UserContext';
import { SafeAreaView, Button, FlatList, View, Text, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';

function SavedRecipesDetailsScreen({route,navigation}) {
    const { userData } = useContext(UserContext);
    const title = route.params.title;
    const db = firestore();
    const [fileText, setFileText] = useState([]);
    
    const getDetails = async () => {
        await db.collection('user_profile_example')
        .doc(userData.name)
        .collection('recipes')
        .doc(title)
        .get()
        .then(documentSnapshot => {
            setFileText(fileText => [...fileText, {"key" : "Dish", "value" : documentSnapshot.id}]);
            setFileText(fileText => [...fileText, {"key" : "Ingredients", "value" : documentSnapshot.data().ingredients}]);
            setFileText(fileText => [...fileText, {"key" : "Instructions", "value" : documentSnapshot.data().instructions}]);
        });
    }
    useEffect(() => {
        getDetails();
    },[])

    
    const AuthorInfo = ({ details }) => {
        //console.log(details.key + " is array: " + Array.isArray(details.value));
        if (details.key === "Ingredients") {
            return (
            <FlatList
                data = {details.value}
                renderItem ={({item}) => (
                    <Text style={styles.title}>{item}</Text>
                )}
                keyExtractor={(item,index) => String(index)}
            />
            );
               
        }
        else {
            return (
                <View style={styles.item}>
                    <Text style={styles.title}>{details.key + ': ' + details.value}</Text>
                </View>
        );
        }
    }

    const renderItem = ({ item }) => (
        <React.Fragment>
            <AuthorInfo details = {item}/>
        </React.Fragment>
    );

    const SeparatorComponent = () => {
        return <View style={styles.separatorLine}/>
    }

    const HeaderComponent = () => {
        return (
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionDescription}>Our List of Recipe Details!</Text>
            </View>
        );
    }

    const FooterComponent = () => {
        return (
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionDescription}>
                    Credit to the Dietise group.
                </Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={fileText}
                renderItem={renderItem}
                keyExtractor={(item, index) => String(index)}
                ItemSeparatorComponent={SeparatorComponent}
                ListHeaderComponent={HeaderComponent}
                ListFooterComponent={FooterComponent}
            />
        </SafeAreaView>
    );
}

export default SavedRecipesDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
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
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: 'black',
    },
});