import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SearchBar } from '@rneui/themed';


export const HomePage = () => {

    const [search, setSearch]= useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    return (
        <View className="h-full w-full bg-white">
            <StatusBar style="auto" />
                  <View className="mt-10 px-4">
                        <SearchBar style={styles.searchBar} value={search} lightTheme={true} onChangeText={updateSearch} />
                  </View>

        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: 'white',
        borderBottomColor: 'white',
        borderTopColor: 'white',
    }
});
