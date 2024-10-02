import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <StackNavigator />
    </>
  )
};

export default App;


const container = StyleSheet.create({
    styles: {
      backgroundColor: '#fff',
      display: 'flex'
    }
});
