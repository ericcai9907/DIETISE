import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

function PictureScreen({route}) {
    const { photo } = route.params;
    
    return (
        <View style={styles.Container}>
            <Image source={{ uri: photo.uri }} style={{width:380,height:550}}/>
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
        flexDirection: "column",
    },
        
});