import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DecryptMessage from './components/DecryptMessage';
import EncryptMessage from './components/EncryptMessage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';

export default function App() {
  
const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Encrypt" component={EncryptMessage} />
        <Stack.Screen name="Decrypt" component={DecryptMessage} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <EncryptMessage/>
    //   <DecryptMessage/>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
