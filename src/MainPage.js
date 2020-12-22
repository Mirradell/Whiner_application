import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';

import Header from './Header'
import ListOfProblems from './ListOfProblems'
import * as Constants from './Consts'
import * as Styles from './Styles'

const Separator = () => (
  <View style={Styles.separator.separator} />
);

export default class MainPage extends React.Component {
  render() {
    return (
      <View style={Styles.styleMainPage.container_all}>
        <SafeAreaView style={Styles.styleMainPage.container_text}>
        <>
          <Text style={Styles.styleMainPage.txt}>Выбери категорию и</Text>
          <Text style={Styles.styleMainPage.txt}>начни общение!</Text>
          </>
        </SafeAreaView>
        <Separator />
        <ListOfProblems navigation={this.props.navigation}/>
      </View>
    );
  }
}