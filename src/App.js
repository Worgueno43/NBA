/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Suspense } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StatusBar, StyleSheet, Text } from 'react-native';
import Logo from './img/NBA/nbalogo.jpg'
import MatchList from './view/MatchList'
import MatchInfo from './view/MatchInfo'
import Langue from './view/Langue'
import { useTranslation } from 'react-i18next';

StatusBar.setBarStyle('light-content')

const Stack = createStackNavigator();


function LogoTitle() {
  return ( 
    <Image 
        style={styles.img}
        source={Logo}
      />   
  );
}

export default function App() {
  const { t } = useTranslation();
  return (
    <Suspense fallback={<Text>loading</Text>}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home' 
          component={MatchList} 
          options={{
            title: 'NBA',
            headerStyle: {
              backgroundColor: '#051c2d',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: props => <LogoTitle {...props} />,
            headerRight: () => (
                <Langue />
            )
          }}
        />
        <Stack.Screen 
          name='Info' 
          component={MatchInfo} 
          options={{
            title: `${t('matchinfo')}`,
            headerStyle: {
              backgroundColor: '#051c2d',
              color: '#FFF'
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              color: '#FFF'
            },
            headerRight: () => (
              <Langue />
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Suspense>
  )
}

const styles = StyleSheet.create({
  img: {
    height: 50,
    width: 50,
    flex: 1,
    borderRadius: 15,
  },
})