import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, View} from 'react-native';
import * as React from 'react';

import {Dashboard, Countries, Country} from '../containers';
import {Colors, AppStyles, Images} from '../theme';
import {NavigationService} from '../utils';

const Stack = createStackNavigator();

DefaultTheme.colors.background = Colors.background;

export const screenOptions = () => ({
  headerBackTitleVisible: false,
  headerStyle: AppStyles.headerStyle,
  headerTitleAlign: 'left',

  headerBackImage: () => (
    <View style={{padding: 20}}>
      <Image source={Images.icons.arrowLeft} style={{tintColor: '#fff'}} />
    </View>
  ),
  headerTitleStyle: AppStyles.headerTitleStyle,
  // ...TransitionPresets.SlideFromRightIOS,
});

function App() {
  return (
    <NavigationContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}>
      <Stack.Navigator initialRouteName={'Home'} screenOptions={screenOptions}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Countries" component={Countries} />
        <Stack.Screen name="Country" component={Country} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
