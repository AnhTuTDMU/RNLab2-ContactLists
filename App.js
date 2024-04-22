import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Contacts from './screens/Contacts';
import Profile from './screens/Profile';
import Favorites from './screens/Favorites'
import User from './screens/User'
import Options from './screens/Options';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './contact-list/routes';
import TabNavigator from './contact-list/routes';
const MyScreen = ({ navigation }) => {
  return (
    <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
  );
};

export default MyScreen;