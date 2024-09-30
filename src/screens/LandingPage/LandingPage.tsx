import React from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamList } from '../../navigation/routes';
import { useNavigation } from '@react-navigation/native';

type HomePageNavigationProp = StackNavigationProp<AppStackParamList, 'LandingPage'>;


export const LandingPage = () => {


    const navigation = useNavigation<HomePageNavigationProp>();

    return (
        <View className="h-full w-full bg-white">
            <StatusBar style="light" />
                  <View className="mt-4 flex items-center pt-2">
                        <Text style={styles.zapWord} className="mt-4 font-bold text-2xl text-extrabold">Attendance-Zap</Text>
                  </View>

                  <View className="flex items-center mt-2 mx-2">
                      <Image className="h-[280] w-[350]" source={require('../../../assets/scan_image.jpeg')} />
                  </View>

                  <View className="border rounded h-[280] m-4">
                        <View className="grid grid-columns-3 gap-6 p-4">
                              <Text className="font-bold text-xl">Signin</Text>
                              <Text className="mt-4">Enter email or Phone no</Text>

                              <TextInput style={styles.textInput} placeholder="something@gmail.com" />

                              <View>
                                    <TouchableOpacity className="bg-sky-400 w-[100] py-2 rounded"
                                                  onPress={() => navigation.navigate('Tabs')}>
                                          <Text className="font-bold text-xl text-center text-white">SignIn</Text>
                                    </TouchableOpacity>
                              </View>
                        </View>


                  </View>
        </View>
    )
}


const styles= StyleSheet.create({
    zapWord: {
      color: '#F57801'
    },
    textInput: {
      backgroundColor: '#F5F5F5',
      borderRadius: 10,
      padding: 10,
      marginTop: 10,
    }
});
