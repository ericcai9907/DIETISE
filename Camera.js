
import React, {PureComponent} from 'react';
import {RNCamera} from 'react-native-camera';  
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet,TouchableOpacity, Alert, View} from 'react-native';
export default class Camera extends PureComponent {constructor(props){super(props);
this.state = {takingPic:false,}
}
takePicture = async () => {
	if (this.camera && !this.state.takingPic){
		let options = {
			quality:0.85,
			fixOrientation:true,
			forceUpOrientation:true,
		}
	
	
		this.setState({takingPic:true})
		try{
			const data = await this.camera.takePictureAsync(options);
			Alert.alert('success',JSON.stringify(data));
		} catch (err) {
			alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
			return;
		} finally {
			this.setState({takingPic: false});
		}

	}
}
  render() {
    return (
    	  <>   
      <RNCamera
      ref={ref => {
            this.camera = ref
            
          }}
         style={{ flex: 1, alignItems: 'center' }}
          type = {RNCamera.Constants.Type.back}
          androidCameraPermissionOptions = {{
          	title:'Permission to use camera',
          	message: 'We need your permission to use your camera',
          	buttonPositive : 'okay',
          	buttonNegative : 'Cancel',
          }}
          
          activeOpacity = {0.5}
          style = {styles.btnAlignment}
          onPress = {this.takePicture}
          
          
          
          />
        
	<Icon name ="camera" size = {50} color = "#444" />
         
          </>
       
    )
   
  }
  
}

const styles = StyleSheet.create({
  btnAlignment: {
    flex: 1,
    flexDirection: 'column',
    //backgroundColor: 'black',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  }
})



