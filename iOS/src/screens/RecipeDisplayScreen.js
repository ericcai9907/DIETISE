import React, {useState, useEffect, useContext} from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native';
import { UserContext } from '../constants/UserContext';
import firestore from '@react-native-firebase/firestore';

function RecipeDisplayScreen({route, navigation}) {
    const { userData } = useContext(UserContext);
    const [fileText, setFileText] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const dish = route.params.search_dish;
    const db = firestore();

    const getRecipes = async () => {
        await db.collection('recipes')
        .doc(dish)
        .collection(userData.diet.toLowerCase())
        .get()
        .then(querySnapshot => {
            if (querySnapshot.empty) {
                setErrorMessage("I'm sorry, we don't seem to have the recipe you searched for.");
                return;
            }
            querySnapshot.forEach(documentSnapshot => {
                setFileText(fileText => [...fileText, {'Title': documentSnapshot.data().title, 'ID': documentSnapshot.id}]);
            });
        });
    }
    
    useEffect(() => {
        getRecipes();
    },[])

    const AuthorInfo = ({ recipe }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{'Recipe: ' + recipe}</Text>
        </View>  
    );
    
    const SeparatorComponent = () => {
        return <View style={styles.separatorLine}/>
    }

    const HeaderComponent = () => {
        if (errorMessage.length === 0) {
            return (
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionDescription}>Our List of Recipes!</Text>
                </View>
            );
        }
        else {
            return (
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionDescription}>{errorMessage}</Text>
                </View>
            );
        }
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
    const clickRecipe = ({item}) => {
        const id = item.ID;
        return (
            navigation.navigate('RecipeDetails', {dish: dish, id: id})
        );
        
    }
    const renderItem = ({item}) => (
      <React.Fragment>
        <AuthorInfo recipe = {item.Title} />
        <Button title="Show Recipe" onPress={() => clickRecipe({item})}/>
      </React.Fragment>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data = {fileText}
                renderItem={renderItem}
                keyExtractor={(item,index) => String(index)}
                ItemSeparatorComponent={SeparatorComponent}
                ListHeaderComponent={HeaderComponent}
                ListFooterComponent={FooterComponent}
            />
        </SafeAreaView>
    );
}

export default RecipeDisplayScreen;

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