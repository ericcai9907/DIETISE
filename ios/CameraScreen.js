import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Dimensions, StyleSheet, View, TouchableOpacity, Text, SafeAreaView} from 'react-native';
import { Camera } from 'expo-camera';

const WINDOW_HEIGHT = Dimensions.get("window").height;

const closeButtonSize = Math.floor(WINDOW_HEIGHT * 0.032);
const captureSize = Math.floor(WINDOW_HEIGHT * 0.09);

function CameraScreen() {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
    const [isPreview, setIsPreview] = useState(false);
    const [isCameraReady, setIsCameraReady] = useState(false);
    const cameraRef = useRef();
    
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const onCameraReady = () => {
        setIsCameraReady(true);
    };

    const takePicture = async () => {
        if (cameraRef.current) {
            const options = { quality: 0.5, base64: true, skipProcessing: true };
            const data = await cameraRef.current.takePictureAsync(options);
            const source = data.uri;
            if (source) {
                await cameraRef.current.pausePreview();
                setIsPreview(true);
                console.log("picture source", source);
            }
        }
    };
    
    const switchCamera = () => {
        if (isPreview) {
            return;
        }
        setCameraType((prevCameraType) =>
            prevCameraType === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        );
    };

    const cancelPreview = async () => {
        await cameraRef.current.resumePreview();
        setIsPreview(false);
    };

    const renderCancelPreviewButton = () => (
        <TouchableOpacity onPress={cancelPreview} style={styles.closeButton}>
            <View style={[styles.closeCross, { transform: [{ rotate: "45deg" }] }]}/>
            <View
                style={[styles.closeCross, { transform: [{ rotate: "-45deg" }] }]}
            />
        </TouchableOpacity>
    );
    
    const renderCaptureControl = () => (
        <View style={styles.control}>
            <TouchableOpacity disabled={!isCameraReady} onPress={switchCamera}>
                <Text style={styles.text}>{"Flip"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.7}
                disabled={!isCameraReady}
                onPress={takePicture}
                style={styles.capture}
            />
        </View>
    );
    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text style={styles.text}>No access to camera</Text>;
    }
    return (
        <SafeAreaView style={styles.container}>
            <Camera
                ref={cameraRef}
                style={styles.container}
                type={cameraType}
                onCameraReady={onCameraReady}
                onMountError={(error) => {
                    console.log("camera error", error);
                }}
            />
            <View style={styles.container}>
                {isPreview && renderCancelPreviewButton()}
                {!isPreview && renderCaptureControl()}
            </View>
        </SafeAreaView>
    );
}

export default CameraScreen;

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
    },
    closeButton: {
      position: "absolute",
      top: 35,
      left: 15,
      height: closeButtonSize,
      width: closeButtonSize,
      borderRadius: Math.floor(closeButtonSize / 2),
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#c4c5c4",
      opacity: 0.7,
      zIndex: 2,
    },
    media: {
      ...StyleSheet.absoluteFillObject,
    },
    closeCross: {
      width: "68%",
      height: 1,
      backgroundColor: "black",
    },
    control: {
      position: "absolute",
      flexDirection: "row",
      bottom: 38,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    capture: {
      backgroundColor: "#f5f6f5",
      borderRadius: 5,
      height: captureSize,
      width: captureSize,
      borderRadius: Math.floor(captureSize / 2),
      marginHorizontal: 31,
    },
    text: {
      color: "#fff",
    },
  });

