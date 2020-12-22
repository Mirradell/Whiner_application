import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, StatusBar } from 'react-native';
import { Router, Route, Redirect } from 'react-router-dom'
import ReactDOM from "react-dom";
import { createMemoryHistory } from 'history';

import MainPage from'./MainPage';
import CreateNewProblem from './CreateNewProblem'
import App from './App'
import * as Styles from './Styles'
 
let history = createMemoryHistory();

export default class Header extends React.Component {
  render() {
    return (
        <View style={Styles.styleHeader.container_header}>
       
          <TouchableHighlight style={Styles.styleHeader.btn}
                              underlayColor={Styles.underlayColor}
                              onPress={() => {this.props.navigate('MainPage')}}>
            <Image style={Styles.styleHeader.images} source={require('../images/menu.png')}/>
          </TouchableHighlight>
 
          <View style={Styles.styleHeader.container_greeting}>
            <Text style={Styles.styleHeader.txt}>Привет,</Text>
            <Text style={Styles.styleHeader.txt}>username!</Text>
          </View>

          <TouchableHighlight style={Styles.styleHeader.btn}
                              underlayColor={Styles.underlayColor}
                              onPress={() => {this.props.navigate('NewProblem')}}>
            <Image style={Styles.styleHeader.images} source={require('../images/add.png')}/>
          </TouchableHighlight>
        </View>
    );
  }
}
//*/