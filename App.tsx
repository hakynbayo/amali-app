import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SetPin from './app/Screens/SetPin';
import Login from './app/Screens/Login';
import ResetPin from './app/Screens/ResetPin';
import GetStarted from './app/Screens/GetStarted';
import SavingGoals from './app/Screens/SavingGoals';
import Welcome from './app/Screens/Welcome';
import EarnMoney from './app/Screens/EarnMoney';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <View style={{ flex: 1, width: "100%", }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="EarnMoney" component={Welcome} options={{ headerShown: false }} />
          <Stack.Screen name="SavingGoals" component={SavingGoals} options={{ headerShown: false }} />
          <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }}/>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="SetPin" component={SetPin} options={{ headerShown: false }} />
          <Stack.Screen name="ResetPin" component={ResetPin} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
};

export default App;
