
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/HomeScreen';
import LeftScreen from "./src/LeftScreen";
import RightScreen from "./src/RightScreen";

const navigator = createStackNavigator (
  {
  Home: HomeScreen,
  Left: LeftScreen,
  Right: RightScreen
  
  }, 
  {
  initialRouteName:'Home',
  defaultNavigationOptions:{
    title: 'Directions'
  }
}
);

export default createAppContainer(navigator);