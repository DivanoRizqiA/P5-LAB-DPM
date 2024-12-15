import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from 'native-base';

import HomeScreen from './components/HomeScreen';
import News from './components/News';
import Information from './components/Information';
import News1 from './components/News1'; 
import News2 from './components/News2'; 
import News3 from './components/News3'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Berita" component={News} />
          <Stack.Screen name="Information" component={Information} />
          <Stack.Screen name="News1" component={News1} options={{ title: 'Berita 1' }} />
          <Stack.Screen name="News2" component={News2} options={{ title: 'Berita 2' }} />
          <Stack.Screen name="News3" component={News3} options={{ title: 'Berita 3' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
