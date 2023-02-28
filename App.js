import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ViewBase } from 'react-native';
import AppNavigator from './screen/AppNavigator';

export default function App() {
  return (
<>
     <StatusBar backgroundColor="#f4b63e" />
    <AppNavigator/>
    </> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
