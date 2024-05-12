import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Recursos from './screens/Recursos'; 
import Home from './screens/Home'; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="Home" component={Home} options={{ title: 'Inicio' }} />
        <Stack.Screen name="Lista_Recursos" component={Recursos} options={{ title: 'Lista Recursos' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
