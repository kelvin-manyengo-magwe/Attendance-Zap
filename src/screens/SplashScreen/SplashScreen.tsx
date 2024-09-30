import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet } from 'react-native';
import Animated, { BounceIn, BounceOut } from 'react-native-reanimated';
import { StackNavigationProp } from '@react-navigation/stack';


type RootStackParmList = {
    SplashScreen: undefined,
    LandingPage: undefined
};

type SplashScreenNavigationProp = StackNavigator<RootStackParmList, 'SplashScreen'>;

interface SplashScreenProps {
    navigation: SplashScreenNavigationProp
};


export const SplashScreen = ({navigation}: SplashScreenProps) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('LandingPage');
        }, 3000);
    }, []);

    return (
        <View entering={BounceIn.duration(500).springify().damping(3)} exiting={BounceOut} style={styles.container}>
              <StatusBar style="light" />
                  <Animated.View>
                            <Text style={styles.text}>
                                  <Text style={styles.largerA}>A</Text>
                                      ttendance-
                                  <Text style={styles.largerZ}>Z</Text>
                                      ap
                            </Text>
                            <Text className="pt-4 font-extrabold">Effortless classroom check-in</Text>
                  </Animated.View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    text: {
      fontSize: 28,
      fontWeight: 'bold',
      fontStyle: 'sans-serif',
      color: '#F57801'
    },
    largerA: {
      fontSize: 38
    },
    largerZ: {
      fontSize: 38,
    }
});
