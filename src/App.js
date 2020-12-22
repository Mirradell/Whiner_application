import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
//import { createMemoryHistory } from 'history';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage          from './MainPage'
import Header            from './Header'
import CreateNewProblem  from './CreateNewProblem'
import InsideOneCategory from './InsideCategory'
import AllDialogs        from './AllDialogs'
import OneDialog         from './OneDialog'

import * as Constants from './Consts'
import * as Styles from './Styles'

function CreateHeaderButtons(navigation) {
  return (
    <View style={Styles.styleHeader.container_all}>
       
          <TouchableHighlight style={Styles.styleHeader.btn}
                              underlayColor='#BCD7EC'
                              onPress={() => {navigation.navigate('NewProblem')}}>
            <Image style={Styles.styleHeader.images} source={require('../images/add.png')}/>
          </TouchableHighlight>
          <TouchableHighlight style={Styles.styleHeader.btn}
                              underlayColor='#BCD7EC'
                              onPress={() => {navigation.navigate('AllDialogs')}}>
            <Image style={Styles.styleHeader.images} source={require('../images/dialog.png')}/>
          </TouchableHighlight>
    </View>);
}

const Stack = createStackNavigator();
const backgroundColor = '#BCD7EC';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainPage" component={MainPage} options={({ navigation, route }) => ({
                                                                        title: 'Выберите категорию',
                                                                        headerRight: () => (CreateHeaderButtons(navigation)),
                                                                        headerStyle: { backgroundColor: backgroundColor }})} />

        <Stack.Screen name="NewProblem" component={CreateNewProblem} options={({ navigation, route }) => ({
                                                                        title: 'Выберите категорию',
                                                                        headerStyle: { backgroundColor: backgroundColor }})} />

        <Stack.Screen name="AllDialogs" component={AllDialogs} options={({ navigation, route }) => ({
                                                                        title: 'Диалоги',
                                                                        headerRight: () => (CreateHeaderButtons(navigation)),
                                                                        headerStyle: { backgroundColor: backgroundColor }})} />                                                                      

        <Stack.Screen name="InsideCategory" component={InsideOneCategory} options={({ navigation, route }) => ({
                                                                        title: route.params.category,
                                                                        headerRight: () => (CreateHeaderButtons(navigation)),
                                                                        headerStyle: { backgroundColor: backgroundColor }})} />

        <Stack.Screen name="OneDialog" component={OneDialog} options={({ navigation, route }) => ({
                                                                        title: 'Ура, общение!',
                                                                        headerStyle: { backgroundColor: backgroundColor }})} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;