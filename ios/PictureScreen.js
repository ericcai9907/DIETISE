import React from 'react';
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';

function PictureScreen({route}) {
    const { photo } = route.params;
    
    return (
        <View style={styles.container}>
            <Image source={{ uri: photo.uri }} style={styles.photo}/>
        </View>
    );
}

export default PictureScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    photo: {
        width: 300,
        height: 300,
    }
        
});