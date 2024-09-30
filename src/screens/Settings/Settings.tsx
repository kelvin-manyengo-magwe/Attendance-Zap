import React from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';


export default function Settings() {

  return (
      <View className="h-full w-full bg-white" style={styles.container}>
            <Text>Settings Page</Text>
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
