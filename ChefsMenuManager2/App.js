import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MenuProvider } from './context/MenuContext';
import HomeScreen from './screens/HomeScreen';
import AddMenuItemScreen from './screens/AddMenuItemScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddMenuItem" component={AddMenuItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}
