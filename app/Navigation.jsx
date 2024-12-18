import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import UserListScreen from './UserListScreen';
import UserDetailsScreen from './UserDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="UserList"
      >
        <Stack.Screen 
          name="UserList" 
          component={UserListScreen} 
          options={{ title: 'UserList' }} 
        />
        <Stack.Screen 
          name="UserDetails" 
          component={UserDetailsScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
