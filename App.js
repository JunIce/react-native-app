import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import UserIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import {HomeScreen} from './src/views/Home';
import {SettingsScreen} from './src/views/System';
import {MeHome, HelpScreen, AboutShop, UserTerms} from './src/views/Me';
import {CityAll} from './src/views/Home/CityAll';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function PageScreen() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let ccolor = focused ? 'tomato' : 'gray';

          if (route.name === 'Shop') {
            return <EntypoIcon name="shopping-bag" color={ccolor} />;
          }

          if (route.name === 'Order') {
            return <EntypoIcon name="clipboard" color={ccolor} />;
          }

          if (route.name === 'MeHome') {
            return <UserIcon name="user" color={ccolor} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Shop"
        component={HomeScreen}
        options={{
          title: '首页',
        }}
      />
      <Tab.Screen
        name="Order"
        component={SettingsScreen}
        options={{title: '订单'}}
      />
      <Tab.Screen name="MeHome" component={MeHome} options={{title: '我'}} />
    </Tab.Navigator>
  );
}

function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={PageScreen}
          options={{title: null}}
        />
        <Stack.Screen
          name="AllCity"
          component={CityAll}
          options={{title: '全部国家及地区'}}
          {...props}
        />

        <Stack.Screen
          name="MeHelp"
          component={HelpScreen}
          options={{title: '帮助和反馈'}}
          {...props}
        />

        <Stack.Screen
          name="UserTerms"
          component={UserTerms}
          options={{title: '用户条款'}}
          {...props}
        />
        <Stack.Screen
          name="AboutShop"
          component={AboutShop}
          options={{title: '关于流量商店'}}
          {...props}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
