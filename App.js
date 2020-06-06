import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import UserIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import {HomeScreen} from './src/views/Home';
import {SettingsScreen} from './src/views/System';
import {MeHome, HelpScreen, AboutShop, UserTerms} from './src/views/Me';
import {CityAll} from './src/views/Home/CityAll';
import {CityDetail} from './src/views/CityDetail';
import {GridView} from './src/views/GridView';
import {ImagePreview} from './src/views/ImagePreview';
import SearchView from './src/components/SearchView';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function PageScreen({navigation, route}) {
  function getHeaderTitle(r) {
    const routeName = r.state
      ? r.state.routes[r.state.index].name
      : r.params?.screen || 'Shop';

    switch (routeName) {
      case 'Shop':
        return () => <SearchView />;
      case 'Order':
        return '订单';
      case 'MeHome':
        return '我';
    }
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: getHeaderTitle(route),
    });
  }, [navigation, route]);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let ccolor = focused ? 'blue' : '#999';

          if (route.name === 'Shop') {
            return <EntypoIcon name="shopping-bag" color={ccolor} size={20} />;
          }

          if (route.name === 'Order') {
            return <EntypoIcon name="clipboard" color={ccolor} size={18} />;
          }

          if (route.name === 'MeHome') {
            return <UserIcon name="user" color={ccolor} size={22} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: '#999',
      }}>
      <Tab.Screen
        name="Shop"
        component={HomeScreen}
        options={{title: '商店'}}
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
      <Stack.Navigator initialRouteName="TestPage">
        {/* <Stack.Screen name="TestPage" component={TestPage} {...props} /> */}
        <Stack.Screen name="Home" component={PageScreen} {...props} />
        <Stack.Screen
          name="AllCity"
          component={CityAll}
          options={{title: '全部国家及地区'}}
          {...props}
        />
        <Stack.Screen name="CityDetail" component={CityDetail} />
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
        <Stack.Screen name="GridView" component={GridView} />
        <Stack.Screen name="ImagePreview" component={ImagePreview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
