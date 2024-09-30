import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { Camera, useCameraPermission, useCameraDevice, useCodeScanner } from 'react-native-vision-camera';

export const Scanner = () => {

    const {hasPermission, requestPermission} = useCameraPermission();

    const [lastestScannedData, setLatestScannedData]= useState(null);
    const device = useCameraDevice('back');

    React.useEffect(() => {
        requestPermission();
    });

    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: (codes: Code[]) => {

            setLatestScannedData(codes[0].value);
            console.log(codes[0].value);
        }
    });

    if(device == null) {
        return (
            <View>
                  <Text>Device Camera not found</Text>
            </View>
        )
    }

    return (
      <View style={styles.container} className="bg-white w-full h-full">
          <Text>Scanner</Text>
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
