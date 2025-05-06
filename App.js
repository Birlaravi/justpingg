// App.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './components/BottomTabNavigator';  // Your BottomTabNavigator
import LoginScreen from './screen/LoginPage';  // Your Login Screen
import SignupScreen from './screen/SignupPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Main screen is BottomTabNavigator */}
        <Stack.Screen
          name="Main"
          component={BottomTabNavigator}
          options={{ headerShown: false }}  // Hide header for BottomTabNavigator
        />

        {/* Login screen as modal or pushed on stack */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ 
            headerShown: false,   // Hide header for Login screen
            presentation: 'modal',  // Show it as a modal screen
          }}
        />

         <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            headerShown: false,
            presentation: 'modal', // Show it as a modal screen
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
