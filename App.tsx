import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <StackNavigator />
    </View>
  )
};

export default App;


const container = StyleSheet.create({
  backgroundColor: '#fff',
  display: 'flex'
});
