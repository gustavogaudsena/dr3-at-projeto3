import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {  useState } from 'react';
import AuthenticationScreen from './screens/AuthenticationScreen';
import { MOCK_USER } from './utils/mocks';


const Stack = createNativeStackNavigator();

export default function App() {
  const [usersDB, setUsersDB] = useState(MOCK_USER)


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Authentication" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Authentication" options={({ navigation }) => ({
          headerShown: false,
          title: 'Github'
        })} >
          {(props) => <AuthenticationScreen usersDB={usersDB} setUsersDB={setUsersDB} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer >
  );
}
