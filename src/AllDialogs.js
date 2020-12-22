import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button,
				 TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Router } from 'react-router-dom'
import ReactDOM from "react-dom";

import * as Constants from './Consts'
import * as Styles from './Styles'

const Separator = () => (
  <View style={Styles.separator.separator} />
);

export default class AllDialogs extends React.Component {
	printProblems() {
  //let res = this.props.route.params.dialogs.map(problem =>
    let res = Constants.DIALOGS.map(problem =>
    <>
      <TouchableHighlight style={Styles.styleInsideCategory.container_problem} 
                          key={problem.id + '_' + problem.prefix} 
                          underlayColor={Styles.underlayColor}
                          onPress={() => {this.props.navigation.navigate('OneDialog')}}>
	      <>
	        <Image style={Styles.styleInsideCategory.images} source={problem.image} />
	        <Text style={Styles.styleInsideCategory.txt}>{problem.name}</Text>
	      </>
      </TouchableHighlight>

      <Separator  key={problem.id + '_sep_' + problem.prefix} />
      </>
      );
  return res;
  }
   
  render() {
        return (
          <SafeAreaView style={Styles.styleInsideCategory.container_list}>
            <ScrollView style={Styles.styleInsideCategory.container_scroll}>
              {this.printProblems()}
            </ScrollView>
          </SafeAreaView>
        );
  }
}