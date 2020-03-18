import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import EditScreen from './src/screens/EditScreen';
import CreateScreen from './src/screens/CreateScreen';
import { Provider  } from './src/context/BlogContext';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Index:IndexScreen,
    Show:ShowScreen,
    Create:CreateScreen,
    Edit:EditScreen
    
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#2F95D6',
        borderBottomColor: '#ffffff',
        borderBottomWidth: 3,
      },
      headerTitleStyle: {
        fontSize: 18,
      },
    }
  }
);

const App = createAppContainer(navigator);


export default () => {
  return (
         <Provider>
           <App />
         </Provider>
  );
}