import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SentScreen from '../screens/SentScreen';

const screens = {
  Home: {
    screen: HomeScreen
  },
  Sent: {
    screen: SentScreen
  }
}

const HomeStack = createNativeStackNavigator(screens);

export default createAppContainer(HomeStack);